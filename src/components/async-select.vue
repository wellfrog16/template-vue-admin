<template>
    <el-select
        v-model="myValue"
        :disabled="disabled"
        :placeholder="placeholder"
        :size="size"
        :multiple="multiple"
        :clearable="clearable"
        @clear="clear"
    >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </el-select>
</template>

<script>
export default {
    props: {
        placeholder: { type: String, default: '请选择' },
        loadingText: { type: String, default: '加载中...' },
        clearable: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false },
        size: { type: String },
        value: { type: [String, Number, Boolean] },
    },
    data() {
        return {
            options: [],
            disabled: true,
        };
    },
    computed: {
        myPlaceholder() {
            return this.disabled ? this.loadingText : this.placeholder;
        },
        myValue: {
            get() {
                return this.disabled ? this.loadingText : this.value;
            },
            set(val) {
                this.$emit('input', val);
            },
        },
    },
    async mounted() {
        try {
            await this.loadList();
            this.$emit('load');
        } catch {
            this.$emit('error');
        }
    },
    methods: {
        loadList() {
            console.log('请实现loadList方法');
        },
        clear() {
            this.$emit('clear');
        },
    },
};
</script>
