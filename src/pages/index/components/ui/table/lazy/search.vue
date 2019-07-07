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
        </el-form>
        <div>
            <el-button type="primary" icon="el-icon-refresh" @click="handleRefresh">刷新</el-button>
            <el-button type="primary" icon="button-fix-icon fas fa-file-export fa-sm" @click="handleDownload">导出</el-button>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import api from '@/api/mock/table';
import config from '@/config';
import { PAGE, PAGE_SIZE } from '@/helper/constant';
import file from '@/utils/file';

const { mapState, mapMutations } = createNamespacedHelpers('lazyTable');

export default {
    data() {
        return {
            edus: ['专科', '本科', '硕士研究生', '博士研究生', '其他'],
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
        ...mapState(['list', 'filters', 'infiniteState', 'isLoadMore']),
    },
    watch: {
        isLoadMore(val) {
            val && this.loadList();
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        ...mapMutations(['setState']),

        // 初始化，回填查询条件
        init() {
            const filters = { ...this.filters };
            delete filters[PAGE];
            delete filters[PAGE_SIZE];
            this.form.fields = Object.assign(this.form.fields, filters);
        },

        // 查询
        async handleSearch() {
            if (await this.checkParams()) {
                this.setState({ list: [] });
                this.infiniteState.reset();
            }
        },

        // 刷新
        handleRefresh() {
            this.setState({ list: [], filters: { ...config.page } });
            this.infiniteState.reset();
        },

        // 检测必填，并保存查询参数
        async checkParams() {
            const valid = await this.$refs.form.validate();
            valid && this.setState({ filters: { ...this.form.fields, [PAGE]: 1 } });
            return valid;
        },

        // 请求数据
        async loadList() {
            const res = await api.list(this.filters);
            if (res) {
                // 根据返回数量是否大于0，来决定是加载完成还是加载中止
                let list = [...this.list];
                if (res.list.length > 0) {
                    list = [...this.list, ...res.list];
                    this.setState({ filters: { [PAGE]: +this.filters[PAGE] + 1 } });
                }
                this.setState({ list, total: res.total, isLoadMore: false });
                this.$nextTick(() => {
                    res.list.length > 0 ? this.infiniteState.loaded() : this.infiniteState.complete();
                });
            }
        },

        // 新建
        handleCreate() {
            this.setState({ activeUid: 0, editVisible: true });
        },

        // 导出
        handleDownload() {
            file.export2excel({
                data: this.list,
                headerProp: ['name', 'income', 'education', 'status', 'remark'],
                headerName: ['姓名', '收入', '学历', '状态', '备注'],
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
