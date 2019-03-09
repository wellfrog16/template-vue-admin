<template>
    <el-card shadow="never">
        <div slot="header" class="clearfix">
            <i class="fab fa-hire-a-helper fa-lg" /><span>输入框</span>
        </div>
        <el-row>
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="inputVal1">
            </el-input>
        </el-row>

        <el-row>
            <el-input placeholder="请输入内容" v-model="inputVal2">
                <template slot="prepend">Http://</template>
            </el-input>
        </el-row>

        <el-row>
            <el-input placeholder="请输入内容" v-model="inputVal3">
                <template slot="append">.com</template>
            </el-input>
        </el-row>

        <el-row>
            <el-input placeholder="请输入内容" v-model="inputVal4" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-row>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            inputVal1: '',
            inputVal2: '',
            inputVal3: '',
            inputVal4: '',
            select: '',
        };
    },
};
</script>
