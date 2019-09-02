<template>
    <el-table
        ref="table"
        height="500"
        border
        stripe
        :data="list"
    >
        <el-table-column prop="id" label="ID" align="right" width="70" />
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="roles" label="角色">
            <template slot-scope="scope">{{ scope.row.roles.join(', ') }}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
                <el-button @click="showEdit(scope.row)" type="primary" size="mini" icon="el-icon-edit" />
                <el-button @click="handleRemove(scope.row)" type="warning" size="mini" icon="el-icon-delete" />
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import AbsTable from '#index/components/abstract/table/default.vue';

const { mapState, mapMutations, mapActions } = createNamespacedHelpers('security/account');

export default {
    mixins: [AbsTable],
    computed: {
        ...mapState(['list']),
    },
    mounted() {
    },
    methods: {
        ...mapMutations(['setState']),
        ...mapActions(['remove']),
    },
};
</script>
