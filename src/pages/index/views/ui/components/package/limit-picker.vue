<template>
    <x-col
        title="限制选择"
        icon="el-icon-date"
    >
        <el-alert title="限制指定天数范围的日期选择" type="info" :closable="false" />
        <el-divider><i class="el-icon-date" /></el-divider>
        <el-form>
            <el-form-item label="限制天数">
                <el-input-number v-model="limitDays" :min="-10" :max="10" :precision="0" style="margin-right: 16px;"></el-input-number>
                <el-checkbox v-model="includeToday">包含当天</el-checkbox>
            </el-form-item>
            <el-form-item label="选择范围">
                <date-picker
                    v-model="value1"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd hh:mm:ss"
                    :limit-days="limitDays"
                    :include-today="includeToday"
                />
            </el-form-item>
        </el-form>
    </x-col>
</template>

<script>
import DatePicker from '@/components/date-picker.vue';
import XCol from '#index/components/col-card.vue';

export default {
    components: {
        XCol,
        DatePicker,
    },
    data() {
        return {
            value1: [],
            limitDays: -3,
            includeToday: false,
        };
    },
    methods: {
    },
};
</script>
