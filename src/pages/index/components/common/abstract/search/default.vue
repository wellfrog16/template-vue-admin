<template>
    <div>
        <el-form
            ref="form"
            inline
            :model="form.fields"
            @submit.native.prevent
        >
            <el-form-item>
                <el-input
                    placeholder="请输入查询内容"
                    v-model="form.fields.q"
                    prefix-icon="el-icon-search"
                    autocomplete="on"
                    maxlength="20"
                    clearable
                    @clear="search"
                    @keyup.native.enter="search"
                />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <slot><div></div></slot>
    </div>
</template>

<script>
import { PAGE } from '@/helper/constant';

export default {
    data() {
        return {
            form: {
                fields: {
                    q: '',
                },
            },
        };
    },
    computed: {
        overdue() {
            console.warn('请实现overdue计算属性');
            return true;
        },

        filters() {
            console.warn('请实现filters计算属性');
            return {};
        },
    },
    watch: {
        overdue(val) {
            val && this.refresh();
        },
    },
    methods: {
        setState() { console.warn('请实现setState方法'); },

        // 查询
        async search() {
            await this.checkParams() && this.loadList();
        },

        // 刷新
        refresh() {
            this.loadList();
        },

        // 检测必填，并保存查询参数
        async checkParams() {
            const valid = await this.$refs.form.validate();
            valid && this.setState({ filters: { ...this.form.fields, [PAGE]: 1 } });
            return valid;
        },

        // 请求数据
        loadList() {
            console.warn('请实现loadList方法');
        },
    },
};
</script>
