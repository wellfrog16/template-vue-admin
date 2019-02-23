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
                    >
                        <i
                            slot="suffix"
                            class="el-input__icon fas fa-lg fa-fw"
                            :class="[$style['icon-eye'], classEye]"
                            @click="showPwd"
                            onselectstart="return false"
                        ></i>
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
                        @click="refreshCode()"
                        onselectstart="return false"
                    ></canvas>
                </el-form-item>

                <el-button :class="$style.login" type="primary" @click="handleLogin">登 入</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import utils from '@/utils/utils';

export default {
    data() {
        return {
            form: {
                passwordType: 'password',
                code: '',
                fields: {
                    username: 'admin',
                    password: 'admin888',
                    code: '',
                },
                rules: {
                    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                    code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
                },
            },
        };
    },
    mounted() {
        this.refreshCode();
    },
    methods: {
        showPwd() {
            this.form.passwordType = this.isPassword ? 'text' : 'password';
        },
        refreshCode() {
            const domCanvas = this.$refs.canvas;
            const code = utils.createCode(domCanvas);

            this.form.code = code;
        },
        handleLogin() {},
    },
    computed: {
        isPassword() {
            return this.form.passwordType === 'password';
        },
        classEye() {
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
    width: 230px;
}

.canvas {
    float: right;
    cursor: pointer;
}

.login {
    width: 100%;
}
</style>
