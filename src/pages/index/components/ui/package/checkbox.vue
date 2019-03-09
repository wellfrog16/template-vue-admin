<template>
    <el-card shadow="never">
        <div slot="header" class="clearfix">
            <i class="fab fa-hire-a-helper fa-lg" />&nbsp;<span>复选框</span>
        </div>
        <el-row>
            <el-checkbox v-model="checked1">备选项</el-checkbox>
        </el-row>
        <el-row>
            <el-checkbox v-model="checked2" disabled>备选项1</el-checkbox>
            <el-checkbox v-model="checked3" disabled>备选项</el-checkbox>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框 A"></el-checkbox>
                <el-checkbox label="复选框 B"></el-checkbox>
                <el-checkbox label="复选框 C"></el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
        </el-row>
        <el-row style="margin-top: 20px;">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkboxGroup3" size="small">
                <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{ city }}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>
    </el-card>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
    data() {
        return {
            checked1: false,
            checked2: true,
            checked3: false,
            checkList: ['选中且禁用', '复选框 A'],
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
            checkboxGroup2: ['上海'],
            checkboxGroup3: ['上海'],
        };
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            const checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
    },
};
</script>
