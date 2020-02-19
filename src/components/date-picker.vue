<template>
    <el-date-picker
        v-model="myValue"
        v-bind="$props"
        :picker-options="myPickerOptions"
        :tpye="type"
        @change="handleChange"
    />
</template>

<script>
import { DatePicker } from 'element-ui';

export default {
    mixins: [...DatePicker.mixins],
    props: {
        ...DatePicker.props,
        value: {
            type: Array,
            default: () => [],
        },

        // 范围类型，日期/日期时间
        type: {
            type: String,
            default: 'daterange',
        },

        // 限制天数
        limitDays: {
            type: Number,
            default: -3,
        },

        // 是否包含当天
        includeToday: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        const self = this;
        return {
            myPickerOptions: {
                disabledDate(time) {
                    const now = Date.now();
                    const pickerTime = time.getTime();
                    const dayTime = 3600 * 1000 * 24; // 一天的毫秒数
                    const limitTime = dayTime * self.limitDays; // 限制毫秒

                    let todayTime = 0;
                    if (self.limitDays > 0) { // limitDays > 0 时，是否包含今天
                        todayTime = self.includeToday ? dayTime : 0;
                    } else { // limitDays < 0 时，是否包含今天
                        todayTime = self.includeToday ? 0 : dayTime;
                    }

                    if (self.limitDays < 0) {
                        return pickerTime + todayTime > now || pickerTime + todayTime < now + limitTime;
                    }
                    return pickerTime + todayTime > now + limitTime || pickerTime + todayTime < now;
                },
            },
        };
    },
    computed: {
        myValue: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            },
        },
    },
    methods: {
        handleChange(v) {
            this.$emit('change', v);
        },
    },
};
</script>
