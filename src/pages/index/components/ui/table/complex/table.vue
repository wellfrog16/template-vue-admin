<template>
    <el-table
        class="table"
        height="500"
        border
        stripe
        :data="list"
        @selection-change="handleSelectionChange"
    >
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column fixed prop="name" label="姓名" width="120">
            <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
                <i class="fas fa-lg fa-fw" :class="scope.row.gender | genderFilter" />
            </template>
        </el-table-column>
        <el-table-column prop="birthday" label="出生日期" width="140" align="center" sortable />
        <el-table-column prop="income" label="收入" width="150" align="right" sortable v-if="colums.includes('income')">
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
        <el-table-column prop="id" label="身份证" width="200" align="center" v-if="colums.includes('id')" />
        <el-table-column prop="county" label="区域" show-overflow-tooltip width="200" />
        <el-table-column prop="email" label="邮箱" show-overflow-tooltip width="250" />
        <el-table-column prop="zip" label="邮编" width="100" align="center" />
        <el-table-column prop="remark" label="备注" show-overflow-tooltip width="500" />
        <el-table-column fixed="right" label="操作" width="175">
            <template slot-scope="scope">
                <el-button @click="handlePreview(scope.$index)" type="success" size="mini" icon="el-icon-view" />
                <el-button @click="handleEdit(scope.$index)" type="primary" size="mini" icon="el-icon-edit" />
                <el-button @click="handleDelete(scope.$index, scope.row.guid)" type="warning" size="mini" icon="el-icon-delete" />
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import api from '@/api/mock/table';
import { createNamespacedHelpers } from 'vuex';
import style from '@/assets/style/usr/app.module.less';

const { mapState, mapMutations } = createNamespacedHelpers('complexTable');

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
    methods: {
        ...mapMutations(['setState', 'listRemove']),

        // 预览
        handlePreview(activeIndex) {
            this.setState({ activeIndex, previewVisiable: true });
        },

        // 编辑
        handleEdit(activeIndex) {
            this.setState({ activeIndex, editVisiable: true });
        },

        // 删除确认
        handleDelete(activeIndex, guid) {
            this.$confirm('确认要删除这条数据吗', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.remove(activeIndex, guid);
            }).catch(() => {});
        },

        // 删除
        async remove(activeIndex, guid) {
            this.setState({ activeIndex, loading: true });
            const res = await api.remove({ guid });
            res && this.listRemove(); // stata移除
            this.$nextTick(() => this.setState({ loading: false }));
        },

        // 批量选择
        handleSelectionChange(val) {
            this.setState({ multipleSelection: val });
        },
    },
};
</script>
