<template>
    <el-card shadow="never">
        <div :class="$style.main" :style="style">
            <el-form>
                <el-form-item :label="item.label" v-for="item in data" :key="item.label">
                    <el-progress
                        :text-inside="true"
                        :stroke-width="18"
                        :percentage="item.percentage"
                        :status="checkStatus(item.percentage)"
                    />
                </el-form-item>
            </el-form>
        </div>
    </el-card>
</template>

<script>
import { _ } from '@/utils/cdn';

export default {
    props: {
        height: { type: String, required: true },
    },
    data() {
        return {
            data: [
                { label: '本月销售进度', percentage: _.random(30, 100) },
                { label: '本月营销进度', percentage: _.random(30, 100) },
                { label: '新产品研发进度', percentage: 100 },
                { label: '市场调研进度', percentage: _.random(30, 100) },
            ],
        };
    },
    computed: {
        style() {
            return {
                height: this.height,
            };
        },
    },
    methods: {
        checkStatus(num) {
            if (num === 100) { return 'success'; }
            if (num <= 50) { return 'exception'; }
            return 'text';
        },
    },
};
</script>

<style lang="less" module>
.main {
    width: 100%;
}
</style>
