<template>
    <el-table
        ref="table"
        class="table"
        height="500"
        border
        stripe
        :data="list"
        @selection-change="handleSelectionChange"
    >
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column prop="name" label="姓名" width="120">
            <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
                <i class="fas fa-lg fa-fw" :class="scope.row.gender | genderFilter" />
            </template>
        </el-table-column>
        <el-table-column prop="income" label="收入" width="150" align="right" sortable>
            <template slot-scope="scope">
                {{ scope.row.income | currency('￥', 2) }}
            </template>
        </el-table-column>
        <el-table-column prop="education" label="学历" width="150" align="center" />
        <el-table-column prop="status" label="状态" width="80" align="center">
            <template slot-scope="scope">
                <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注" show-overflow-tooltip min-width="300" />
        <el-table-column label="操作" width="68" align="center">
            <template slot-scope="scope">
                <el-button @click="handleDelete(scope.row)" type="warning" size="mini" icon="el-icon-delete" />
            </template>
        </el-table-column>

        <infinite-loading
            slot="append"
            @infinite="infiniteHandler"
            force-use-infinite-wrapper=".el-table__body-wrapper">
        </infinite-loading>
    </el-table>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import api from '@/api/mock/person';
import style from '@/assets/style/usr/app.module.less';

const { mapState, mapMutations } = createNamespacedHelpers('lazyTable');

export default {
    filters: {
        statusFilter(status) {
            const list = [
                { key: '在职', value: 'info' },
                { key: '待业', value: 'danger' },
                { key: '退休', value: '' },
                { key: '创业', value: 'success' },
                { key: '游学', value: 'warning' },
            ];

            const result = list.find(item => item.key === status);
            return result ? result.value : '';
        },
        genderFilter(gender) {
            return gender === '男'
                ? ['fa-male', style['c-male']]
                : ['fa-female', style['c-female']];
        },
    },
    data() {
        return {
            style,
        };
    },
    computed: {
        ...mapState(['list', 'colums']),
    },
    mounted() {
        // 用于多选清除
        this.setState({ components: { table: this.$refs.table } });
    },
    methods: {
        ...mapMutations(['setState', 'listRemove']),

        // lazyload
        infiniteHandler(infiniteState) {
            this.setState({ infiniteState, isLoadMore: true });
        },

        // 删除确认
        handleDelete(activeIndex, row) {
            this.$confirm('确认要删除这条数据吗', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.remove(activeIndex, row);
            }).catch(() => {});
        },

        // 删除
        async remove(row) {
            this.setState({ activeUid: row.id, loading: true });

            // 远程删除
            const res = await api.remove({ id: row.id });

            // 本地删除
            res && this.listRemove({ multipleSelection: [row] });
            this.$nextTick(() => this.setState({ loading: false }));
        },

        // 批量选择
        handleSelectionChange(val) {
            this.setState({ multipleSelection: val });
        },
    },
};
</script>
