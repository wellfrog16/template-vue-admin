<template>
    <div :class="[$style.main, 'flex-center']">
        <el-card :class="$style.box">
            <div slot="header" class="clearfix">
                <span>管理登录</span>
            </div>
            <el-form ref="form" :model="form.fields" :rules="form.rules" auto-complete="on" @submit.native.prevent>
                <el-form-item prop="name">
                    <el-input
                        v-model="form.fields.name"
                        prefix-icon="fas fa-user fa-lg fa-fw"
                        placeholder="用户名"
                        type="text"
                        auto-complete="on"
                    />
                </el-form-item>

                <el-form-item prop="password">
                    <el-input
                        v-model="form.fields.password"
                        prefix-icon="fas fa-lock fa-lg fa-fw"
                        placeholder="密码"
                        auto-complete="on"
                        type="password"
                        show-password
                        @keyup.enter.native="handleLogin"
                    >
                    </el-input>
                </el-form-item>

                <el-form-item prop="code">
                    <el-input
                        v-model="form.fields.code"
                        prefix-icon="fas fa-shield-alt fa-lg fa-fw"
                        placeholder="验证码"
                        type="text"
                        :class="$style['input-code']"
                        @keyup.enter.native="handleLogin"
                    ></el-input>
                    <canvas
                        width="80"
                        height="32"
                        ref="canvas"
                        :class="$style.canvas"
                        @click="refreshCode"
                        onselectstart="return false"
                    ></canvas>
                </el-form-item>

                <el-form-item v-show="serverVisible">
                    <el-select v-model="form.fields.serverId" placeholder="请选择" :class="$style['server-select']">
                        <el-option
                            v-for="item in servers"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                        <i class="fas fa-server fa-lg fa-fw" slot="prefix" />
                    </el-select>
                </el-form-item>

                <el-button :class="$style.login" type="primary" @click="handleLogin" :loading="loading">登 入</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { utils, rules, storage } from '@/utils/rivers';
import config from '@/config';
import { STORAGE_SERVER } from '@/helper/constant';

export default {
    data() {
        const validateCode = (rule, value, callback) => {
            if (value.toLowerCase() !== this.preset.code.toLowerCase()) {
                callback(new Error('验证码不正确'));
            } else {
                callback();
            }
        };

        const site = this.$helper.site();

        return {
            loading: false,
            servers: config.servers,
            serverVisible: config.serverVisible,
            preset: {
                name: 'admin',
                password: 'admin888',
                code: '',
            },
            form: {
                fields: {
                    name: 'admin',
                    password: 'admin888',
                    serverId: site.server.id,
                    code: '',
                },
                rules: {
                    ...rules.checkString('name', { name: '用户名' }),
                    ...rules.checkString('password', { name: '密码' }),
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'change' },
                        { validator: validateCode, trigger: 'blur' },
                    ],
                },
            },
        };
    },
    mounted() {
        this.refreshCode();
    },
    methods: {
        refreshCode() {
            const domCanvas = this.$refs.canvas;
            const code = utils.createCode(domCanvas);

            this.preset.code = code;
            this.form.fields.code = code;
        },
        handleLogin() {
            this.$refs.form.validate().then(() => {
                // 先校验验证码
                if (this.preset.code.toLowerCase() !== this.form.fields.code.toLowerCase()) { return; }

                this.loading = true;

                // 登陆
                this.$store.dispatch('security/account/login', this.form.fields).then(() => {
                    storage.set(STORAGE_SERVER, this.form.fields.serverId); // 保存server选择
                    const path = this.$route.query.from || '/home';
                    this.$router.push({ path }).catch(() => {});
                }).catch((err) => {
                    this.loading = false;
                    let { message } = err;
                    message.match(/^(.+)code\s(\d{3})/g);
                    message = RegExp.$1;
                    const code = +(RegExp.$2);

                    if (code && code < 300) {
                        this.$message.error(message);
                    }

                    console.warn(err);
                });
            }).catch((err) => { console.warn(err); });
        },
    },
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

.main {
    background-color: @g-color-primary;
    color: #fff;
    height: 100vh;

    :global(.el-input__prefix) {
        display: flex;
        align-items: center;
    }
}

.box {
    width: 350px;

    :global(.el-input__inner) {
        padding-left: 35px;
    }
}

.input-code {
    width: 220px !important;
}

.server-select {
    width: 100%;

    i {
        position: relative;
        left: 2px;
    }
}

.canvas {
    float: right;
    cursor: pointer;
}

.login {
    width: 100%;
}
</style>
