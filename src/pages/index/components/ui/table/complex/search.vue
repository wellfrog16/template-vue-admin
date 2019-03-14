<template>
    <div class="search">
        <el-form ref="form" :inline="true" :model="form.fields" :rules="form.rules" size="small">
            <el-form-item>
                <el-input
                    placeholder="请输入查询内容"
                    v-model="form.fields.keyword"
                    prefix-icon="el-icon-search"
                    autocomplete="on"
                    maxlength="20"
                />
            </el-form-item>
            <el-form-item>
                <el-select style="width: 120px;" v-model="form.fields.education" clearable placeholder="所有学历" size="small">
                    <el-option
                        v-for="item in educations"
                        :key="item"
                        :label="item"
                        :value="item"
                    />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">查询</el-button>
            </el-form-item>
        </el-form>
        <div>
            <el-button type="primary" size="small" icon="el-icon-plus">新增</el-button>
            <el-button type="primary" size="small" icon="button-fix-icon fas fa-file-export fa-sm">导出</el-button>
        </div>
    </div>
</template>

<script>
import api from '@/api/mock/table';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations, mapGetters } = createNamespacedHelpers('complexTable');

export default {
    data() {
        return {
            educations: ['大专', '本科', '硕士研究生', '博士研究生'],
            form: {
                fields: {
                    keyword: '',
                    education: '',
                },
                rules: {},
            },
        };
    },
    computed: {
        ...mapState(['list', 'page']),
        ...mapGetters(['queryParam']),
    },
    watch: {
        page() {
            this.loadList();
        },
    },
    mounted() {
        this.handleSearch();
    },
    methods: {
        ...mapMutations(['setVal']),

        // 查询
        async handleSearch() {
            if (await this.checkParams()) {
                this.loadList();
            }
        },

        // 检测必填，并保存查询参数
        async checkParams() {
            const valid = await this.$refs.form.validate();
            if (valid) {
                const params = Object.assign({ page: 1 }, this.form.fields);
                console.log(params);
                this.setVal(params);
            }
            return valid;
        },

        // 请求数据
        async loadList() {
            const res = await api.list(this.queryParam);

            this.setVal({
                list: res.list,
                total: res.total,
            });

            // if (res.success) {
            //     this.list = res.list;
            // } else {
            //     console.log(999);
            // }
        },
    },
};
</script>

<style lang="less" module>

</style>
