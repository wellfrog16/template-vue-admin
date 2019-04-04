<template>
    <div class="search">
        <el-form ref="form" :inline="true" :model="form.fields" :rules="form.rules">
            <el-form-item>
                <el-input
                    placeholder="请输入查询内容"
                    v-model="form.fields.q"
                    prefix-icon="el-icon-search"
                    autocomplete="on"
                    maxlength="20"
                />
            </el-form-item>
            <el-form-item>
                <el-select style="width: 120px;" v-model="form.fields.education" clearable placeholder="所有学历">
                    <el-option
                        v-for="item in edus"
                        :key="item"
                        :label="item"
                        :value="item"
                    />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-checkbox-group v-model="colums" :class="$style.checkbox">
                    <el-checkbox label="income">收入</el-checkbox>
                    <el-checkbox label="id">身份证</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
        </el-form>
        <div>
            <el-button type="primary" icon="el-icon-plus" @click="handleCreate">新增</el-button>
            <el-button type="primary" icon="el-icon-refresh" @click="handleRefresh">刷新</el-button>
            <el-button type="primary" icon="button-fix-icon fas fa-file-export fa-sm" @click="handleDownload">导出</el-button>
        </div>
    </div>
</template>

<script>
import api from '@/api/mock/table';
import { createNamespacedHelpers } from 'vuex';
import { _ } from '@/utils/cdn';
import { helper } from '@/helper/lakes';
import file from '@/utils/file';

const { mapState, mapMutations, mapGetters } = createNamespacedHelpers('complexTable');

export default {
    data() {
        return {
            edus: ['专科', '本科', '硕士研究生', '博士研究生', '其他'],
            colums: ['income', 'id'],
            form: {
                fields: {
                    q: '',
                    education: '',
                },
                rules: {},
            },
        };
    },
    computed: {
        ...mapState(['list', 'filters']),
        ...mapGetters(['queryPath']),
        query: v => v.$route.query,
    },
    watch: {
        // watch filters，翻页正常捕获filter变化并触发，但直接手动修改地址栏，filters更新，watch不到变化/某些情况下仅触发一次
        // 测试watch $route.query正常
        // 先用$route.query解决，但是多了一步computed
        query: {
            handler(val) {
                this.setFilters(val);
                helper.mergeParam(this.form.fields, val);
                this.loadList();
            },
            deep: true,
        },
        colums(colums) {
            this.setState({ colums });
        },
    },
    mounted() {
        const filters = this.$route.query;

        // query不为空，则保存参数
        if (!_.isEmpty(filters)) {
            this.setFilters(filters);
            delete filters.p;
            delete filters.ps;
            helper.mergeParam(this.form.fields, filters);
            this.loadList();
        } else { // 无参数则清空vuex的参数，回到第一页
            this.setFilters({});
            this.loadList();
            // this.$router.push(this.queryPath);
        }
    },
    methods: {
        ...mapMutations(['setState', 'setFilters']),

        // 查询
        async handleSearch() {
            if (await this.checkParams()) {
                this.$router.push(this.queryPath);
            }
        },

        // 刷新
        handleRefresh() {
            this.loadList();
        },

        // 检测必填，并保存查询参数
        async checkParams() {
            const valid = await this.$refs.form.validate();
            valid && this.setState({ filters: { ...this.form.fields, p: 1 } });
            return valid;
        },

        // 请求数据
        async loadList() {
            this.setState({ loading: true });

            const res = await api.list(this.filters);
            res && this.setState({ list: res.list, total: res.total });
            this.$nextTick(() => this.setState({ loading: false }));
        },

        // 新建
        handleCreate() {
            this.setState({ activeIndex: -1, editVisible: true });
        },

        // 导出
        handleDownload() {
            file.export2excel({
                data: this.list,
                headerProp: ['id', 'name', 'gender', 'birthday', 'county', 'education', 'status', 'email', 'zip', 'income', 'remark'],
                headerName: ['身份证', '姓名', '性别', '出生年月', '城市', '学历', '状态', '电子邮件', '邮编', '收入', '备注'],
                name: '导出.xlsx',
            });
        },
    },
};
</script>

<style lang="less" module>
.checkbox {
    margin-left: 20px;

    :global(.el-checkbox+.el-checkbox) {
        margin-left: 15px;
    }
}
</style>
