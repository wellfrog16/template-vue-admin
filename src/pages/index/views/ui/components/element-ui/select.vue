<template>
    <el-card shadow="never">
        <div slot="header" class="clearfix">
            <i class="fab fa-hire-a-helper fa-lg" /><span>下拉框</span>
        </div>
        <el-row>
            <el-select v-model="value1" placeholder="单选请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>

            <el-select v-model="value2" multiple placeholder="复选请选择" style="margin-left: 20px;">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>

            <el-select
                v-model="value3"
                multiple
                collapse-tags
                filterable
                style="margin-left: 20px;"
                placeholder="复选搜索请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-row>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            options: [
                { value: '选项1', label: '黄金糕' },
                { value: '选项2', label: '双皮奶' },
                { value: '选项3', label: '蚵仔煎' },
                { value: '选项4', label: '龙须面' },
                { value: '选项5', label: '北京烤鸭' },
            ],
            value1: '',
            value2: '',
            value3: '',
        };
    },
};
</script>
