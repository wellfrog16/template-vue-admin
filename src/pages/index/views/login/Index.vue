<template>
    <div :class="[$style.main, 'flex-center']">
        <el-card :class="$style.box">
            <div slot="header" class="clearfix">
                <span>管理登陆</span>
            </div>
            <el-form ref="form" :model="form.fields" :rules="form.rules" class="login-form" auto-complete="on">
                <el-form-item prop="username">
                    <el-input
                        v-model="form.fields.username"
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
                        :type="form.passwordType"
                        show-password
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
                        height="40"
                        ref="canvas"
                        :class="$style.canvas"
                        @click="refreshCode"
                        onselectstart="return false"
                    ></canvas>
                </el-form-item>

                <el-button :class="$style.login" type="primary" @click="handleLogin">登 入</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import utils from '@/utils/utils';

const { mapActions } = createNamespacedHelpers('user');

export default {
    data() {
        const validateCode = (rule, value, callback) => {
            if (value.toLowerCase() !== this.preset.code.toLowerCase()) {
                callback(new Error('验证码不正确'));
            } else {
                callback();
            }
        };

        return {
            preset: {
                username: 'admin',
                password: 'admin888',
                code: '',
            },
            form: {
                passwordType: 'password',
                fields: {
                    username: 'admin',
                    password: 'admin888',
                    code: '',
                },
                rules: {
                    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' },
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
        ...mapActions(['login']),
        refreshCode() {
            const domCanvas = this.$refs.canvas;
            const code = utils.createCode(domCanvas);

            this.preset.code = code;
        },
        handleLogin() {
            this.$refs.form.validate().then(() => {
                // 先校验验证码
                if (this.preset.code.toLowerCase() !== this.form.fields.code.toLowerCase()) { return; }

                this.login(this.form.fields).then((success) => {
                    if (success) {
                        const path = this.$route.query.from || '/home';
                        this.$nextTick(() => this.$router.push({ path }));
                        this.saveLoginInfo();
                    } else {
                        this.refreshCode();
                        this.$message.error('登陆失败，账号或密码错误');
                    }
                }).catch((err) => {
                    this.$message.error(err);
                });
            }).catch(() => {});
        },
        // 保存登陆信息
        saveLoginInfo() {
            utils.localStorage.set('username', this.form.fields.username, 60 * 60 * 2);
            // this.$store.commit('site/setVal', { username: this.form.fields.username });
        },
    },
    computed: {
        isPassword() {
            return this.form.passwordType === 'password';
        },
        clsEye() {
            return {
                'fa-eye-slash': this.isPassword,
                'fa-eye': !this.isPassword,
            };
        },
    },
};
</script>

<style lang="less" module>
@import '../../../../assets/style/config.less';

.main {
    background-color: @g-color-primary;
    color: #fff;
    height: 100vh;
}

.box {
    width: 350px;

    :global(.el-input__inner) {
        padding-left: 35px;
    }
}

.icon-eye {
    cursor: pointer;
}

.input-code {
    width: 230px !important;
}

.canvas {
    float: right;
    cursor: pointer;
}

.login {
    width: 100%;
}
</style>
