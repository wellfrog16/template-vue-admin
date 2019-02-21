<template>
    <div :class="[$style.main, 'flex-center']">
        <el-card :class="$style.box">
            <div slot="header" class="clearfix">
                <span>管理登陆</span>
            </div>
            <el-form ref="loginForm" :model="form.fields" class="login-form" auto-complete="on">
                <el-form-item prop="username">
                    <el-input
                        v-model="form.fields.username"
                        prefix-icon="fas fa-user fa-lg fa-fw"
                        placeholder="用户名"
                        name="username"
                        type="text"
                        auto-complete="on"
                    />
                </el-form-item>

                <el-form-item prop="password">
                    <el-input
                        v-model="form.fields.password"
                        prefix-icon="fas fa-lock fa-lg fa-fw"
                        placeholder="密码"
                        name="password"
                        auto-complete="on"
                        :type="form.passwordType"
                        @keyup.enter.native="handleLogin"
                    >
                        <i slot="suffix" class="el-input__icon fas fa-eye-slash fa-lg fa-fw" @click="showPwd"></i>
                    </el-input>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                passwordType: 'password',
                fields: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: '',
                },
            },
        };
    },
    methods: {
        showPwd() {
            this.form.passwordType = this.form.passwordType === 'password' ? 'text' : 'password';
        },
        handleLogin() {},
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
</style>
