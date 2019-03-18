<template>
    <el-table
        class="table"
        height="500"
        border
        stripe
        :data="list">
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column fixed prop="name" label="姓名" width="120">
            <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
                <i class="fas fa-male fa-lg fa-fw" v-if="scope.row.gender === '男'" :class="style['c-male']" />
                <i class="fas fa-female fa-lg fa-fw" v-if="scope.row.gender === '女'" :class="style['c-female']" />
            </template>
        </el-table-column>
        <!-- <el-table-column prop="gender" label="性别" width="50" align="center" /> -->
        <el-table-column prop="birthday" label="生日" width="140" align="center" sortable />
        <el-table-column prop="income" label="收入" width="150" align="right" sortable>
            <template slot-scope="scope">
                {{ scope.row.income | currency('￥', 2) }}
            </template>
        </el-table-column>
        <el-table-column prop="education" label="学历" width="150" align="center" />
        <el-table-column prop="id" label="身份证" width="200" align="center" />
        <el-table-column prop="county" label="区域" show-overflow-tooltip width="200" />
        <el-table-column prop="email" label="邮箱" width="250" />
        <el-table-column prop="zip" label="邮编" width="100" align="center" />
        <el-table-column prop="remark" label="备注" width="500" />
        <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
                <el-button @click="handlePreview(scope.$index)" type="success" size="mini" icon="el-icon-view"></el-button>
                <el-button @click="handleEdit(scope.$index)" type="primary" size="mini" icon="el-icon-edit"></el-button>
                <!-- <el-button type="warning" size="mini" icon="el-icon-delete"></el-button> -->
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import style from '@/assets/style/usr/app.module.less';

const { mapState, mapMutations } = createNamespacedHelpers('complexTable');

export default {
    data() {
        return {
            style,
        };
    },
    computed: {
        ...mapState(['list']),
    },
    methods: {
        ...mapMutations(['setState']),
        handlePreview(activeIndex) {
            this.setState({ activeIndex, previewVisiable: true });
        },
        handleEdit(activeIndex) {
            this.setState({ activeIndex, editVisiable: true });
        },
    },
};
</script>
