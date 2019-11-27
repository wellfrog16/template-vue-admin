<template>
    <div class="search">
        <el-form ref="form" :inline="true" :model="form.fields" :rules="form.rules" @submit.native.prevent>
            <el-form-item>
                <el-input
                    placeholder="请输入查询内容"
                    v-model="form.fields.q"
                    prefix-icon="el-icon-search"
                    autocomplete="on"
                    maxlength="20"
                    clearable
                    @keyup.native.enter="handleSearch"
                    @clear="handleSearch"
                />
            </el-form-item>
            <el-form-item>
                <el-select style="width: 120px;" v-model="form.fields.education" clearable @clear="handleSearch" placeholder="所有学历">
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
import { createNamespacedHelpers } from 'vuex';
import api from '@/api/mock/person';
import file from '@/utils/file';
import { _ } from '@/utils/cdn';
// import { helper } from '@/helper/lakes';
import { PAGE, PAGE_SIZE } from '@/helper/constant';

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
        query: (v) => v.$route.query,
    },
    watch: {
        query: {
            handler(val) {
                this.saveQuery(val);
                this.loadList();
            },
            deep: true,
        },
        colums(colums) {
            this.setState({ colums });
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        ...mapMutations(['setState', 'fixPage', 'reset']),

        // 查询初始化
        async init() {
            const { query } = this.$route;
            if (!_.isEmpty(query)) {
                this.saveQuery(query);
            } else { // 无参数则清空vuex的参数，回到第一页
                this.reset();
            }
            await this.loadList();
            this.fixPage();
        },

        // 保存地址栏查询参数
        saveQuery(query) {
            const filters = { ...query };
            this.setState({ filters });
            delete filters[PAGE];
            delete filters[PAGE_SIZE];
            _.merge(this.form.fields, filters);
        },

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
            valid && this.setState({ filters: { ...this.form.fields, [PAGE]: 1 } });
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
            this.setState({ activeUid: 0, editVisible: true });
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
