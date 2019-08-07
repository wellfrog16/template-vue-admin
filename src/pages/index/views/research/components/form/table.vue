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
        <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
                <el-button @click="handleEdit(scope.row)" type="primary" size="mini" icon="el-icon-edit" />
                <el-button @click="handleDelete(scope.row)" type="warning" size="mini" icon="el-icon-delete" />
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import api from '@/api/mock/table';
import style from '@/assets/style/usr/app.module.less';

const { mapState, mapMutations } = createNamespacedHelpers('baseForm');

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
            statusData: [
                { text: '在职', value: '在职' },
                { text: '待业', value: '待业' },
                { text: '退休', value: '退休' },
                { text: '创业', value: '创业' },
                { text: '游学', value: '游学' },
            ],
        };
    },
    computed: {
        ...mapState(['list']),
    },
    mounted() {
    },
    methods: {
        ...mapMutations(['setState']),

        // 编辑
        handleEdit(row) {
            this.setState({ activeUid: row.id, editVisible: true });
        },

        // 删除确认
        handleDelete(row) {
            this.$confirm('确认要删除这条数据吗', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.remove(row);
            }).catch(() => {});
        },

        // 删除
        async remove(row) {
            this.setState({ activeUid: row.id, loading: true });

            // 远程删除
            await api.remove({ id: row.id });

            this.$nextTick(() => this.setState({ loading: false, overdue: true }));
        },

        // 批量选择
        handleSelectionChange(val) {
            this.setState({ multipleSelection: val });
        },
    },
};
</script>
