<template>
    <div class="login-page">
        <div class="banner">
            <div class="logo">
                <img src="../../../assets/img/login/logo.png" alt="">
            </div>
            <div class="login-btn" @click="handleLogin">
                <img src="../../../assets/img/login/login.png" alt=""><span>登录</span>
            </div>
        </div>
        <div class="main-content">
            <div class="top-content">
                <h3>上期所大数据监管科技平台</h3>
                <h5>数字上期 智慧期市</h5>
                <el-button size="small" @click="handleDetail">了解详情</el-button>
                <div class="login-area" v-if="showLoginDialog">
                    <el-form ref="ruleForm" :model="ruleForm" label-width="70px" @keyup.enter.native="handleConfirm('loginFormId')">
                        <el-form-item prop="userName" label="用户名:" :rules="[{
                            required: true, message: '请输入用户名'
                        }]">
                            <el-input class="custom-width" size="small" v-model="ruleForm.userName" clearable></el-input>
                        </el-form-item>
                        <el-form-item prop="password" label="密码:" :rules="[{
                            required: true, message: '请输入密码'
                        }]">
                            <el-input class="custom-width" size="small" v-model="ruleForm.password" clearable type="password"></el-input>
                        </el-form-item>
                    </el-form>
                    <div style="text-align:center;">
                        <el-button type="primary" @click="handleConfirm" :loading="fullScreenLoading">登录</el-button>
                    </div>
                </div>
            </div>
            <div class="bottom-content">
                <div class="div1">研究支撑平台</div>
                <div class="div2">监管科技工具集</div>
                <div class="div3">国际化应用</div>
                <div class="div4">行业应用</div>
            </div>
            
        </div>
        <!-- <el-dialog :visible="showLoginDialog" center @close="handleCloseDialog" top="10%">
            <div class="login-dialog">
                <el-form ref="ruleForm" :model="ruleForm" label-width="140px">
                    <el-form-item prop="userName" label="用户名:" :rules="[{
                        required: true, message: '请输入用户名'
                    }]">
                        <el-input class="custom-width" size="small" v-model="ruleForm.userName" clearable></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="密码:" :rules="[{
                        required: true, message: '请输入密码'
                    }]">
                        <el-input class="custom-width" size="small" v-model="ruleForm.password" clearable type="password"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div slot=footer>
                <el-button type="primary" size="small" @click="handleConfirm">确定</el-button>
                <el-button type="default" size="small" @click="handleCancle">取消</el-button>
            </div>
        </el-dialog> -->
    </div>
</template>
<script>
// import {saveAuthedInfos, saveRealName} from '@/utils/storageUtil'
// import {loginApi} from '@/api/modules/dataAnsis'
export default {
    data() {
        return {
            showLoginDialog: false,
            fullScreenLoading: false,
            ruleForm: {
                userName: '',
                password: ''
            }
        }
    },
    methods: {
        handleDetail () {

        },
        handleCloseDialog() {
            this.showLoginDialog = false
        },
        handleLogin () {
            this.showLoginDialog = !this.showLoginDialog
        },
        handleCancle() {
            this.handleCloseDialog()
        },
        handleConfirm() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    // 请求token
                    // this.getLogin()
                    this.$router.push({path: '/index'})
                }
            })
        },
        getLogin () {
            let params = {
                username: this.ruleForm.userName.toLowerCase(),
                password: this.ruleForm.password
            }
            this.fullScreenLoading = true
            loginApi(params).then((resp) => {
                this.fullScreenLoading = false
                console.log(resp)
                // saveAuthedInfos(resp, params.username)
                // saveRealName(res)
                let redirect = decodeURIComponent(this.$router.currentRoute.query.redirect || '/index')
                this.$router.push({path: redirect})
            }, () => {
                this.fullScreenLoading = false
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .login-page {
        width: 100%;
        height: 100%;

        .login-dialog {
            background: transparent;

            .custom-width {
                width: 350px;
            }
        }

        .banner {
            width: 100%;
            height: 60px;
            line-height: 60px;
            background: url('../../../assets/img/login/banner_bg.png') no-repeat;
            background-size: cover;
            overflow: hidden;
            display: flex;
            justify-content: space-between;

            .logo {
                flex: 1;
                line-height: 60px;
                margin-left: 20px;

                img {
                    width: 50px;
                    height: 40px;
                    vertical-align: middle;
                }
            }

            .login-btn {
                flex: 1;
                line-height: 60px;
                text-align: right;
                margin-right: 20px;
                cursor: pointer;

                img {
                    width: 20px;
                    height: 20px;
                    vertical-align: middle;
                }

                span {
                    margin-left: 8px;
                }
            }
        }

        .main-content {
            width: 100%;
            height: 100%;
            position: fixed;
            background: url('../../../assets/img/login/content_bg.png') no-repeat;
            background-size: cover;
            overflow: hidden;

            .top-content {
                text-align: center;
                margin-top: 100px;

                h3 {
                    color: #d7e7fa;
                    font-size: 72px;
                    font-weight: 400;
                    opacity: 0.9;
                    margin: 100px 0 50px 0;
                }

                h5 {
                    color: #cbdaec;
                    font-size: 24px;
                    margin: 0;
                    font-weight: 400;
                }

                button {
                    margin-top: 50px;
                    color: #d7e7fa;
                    font-size: 14px;
                    background: url('../../../assets/img/login/detail_btn_bg.png') no-repeat;
                    background-size: cover;
                }
            }

            .login-area {
                width: 400px;
                position: absolute;
                right: 10%;
                top: 35%;
                padding: 30px;
                box-shadow: 4px 6px 35px #4e4b4b;

                /deep/ .el-form-item__label {
                    color: #ddeaf9;
                }

                /deep/ .el-input__inner {
                    background: transparent;
                    color: #ddeaf9;
                }

                button {
                    margin: 0;
                    width: 160px;
                    margin-left: 70px;
                }
            }

            .bottom-content {
                position: absolute;
                bottom: 100px;
                display: flex;
                width: 100%;
                height: 100px;
                line-height: 100px;

                > div {
                    flex: 1;
                    justify-content: space-around;
                    margin: 0 20px;
                    text-align: center;
                    color: #ddeaf9;
                    font-size: 16px;
                    cursor: pointer;
                    font-weight: 400;
                    width: 400px;
                }

                .div1 {
                    background: url('../../../assets/img/login/1_1.png') no-repeat;
                    background-size: cover;
                }

                .div1:hover {
                    background: url('../../../assets/img/login/1_2.png') no-repeat;
                    background-size: cover;
                    color: #fff;
                    font-weight: 800;
                }

                .div2 {
                    background: url('../../../assets/img/login/2_1.png') no-repeat;
                    background-size: cover;
                }

                .div2:hover {
                    background: url('../../../assets/img/login/2_2.png') no-repeat;
                    background-size: cover;
                    color: #fff;
                    font-weight: 800;
                }

                .div3 {
                    background: url('../../../assets/img/login/3_1.png') no-repeat;
                    background-size: cover;
                }

                .div3:hover {
                    background: url('../../../assets/img/login/3_2.png') no-repeat;
                    background-size: cover;
                    color: #fff;
                    font-weight: 800;
                }

                .div4 {
                    background: url('../../../assets/img/login/4_1.png') no-repeat;
                    background-size: cover;
                }

                .div4:hover {
                    background: url('../../../assets/img/login/4_2.png') no-repeat;
                    background-size: cover;
                    color: #fff;
                    font-weight: 800;
                }
            }
        }
    }
</style>

