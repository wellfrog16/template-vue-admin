<template>
    <el-dialog
        title="提示"
        :visible.sync="previewVisiable"
        :before-close="handleClose"
    >
        <div class="detail">
            <el-row>
                <el-col :span="12"><description-item label="姓名" :content="activeRow.name" /></el-col>
                <el-col :span="12"><description-item label="学历" :content="activeRow.education" /></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><description-item label="生日" :content="activeRow.birthday" /></el-col>
                <el-col :span="12"><description-item label="身份证" :content="activeRow.id" /></el-col>
            </el-row>
        </div>
        <span slot="footer">
            <el-button type="primary" @click="handleClose">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { _ } from '@/utils/cdn';
import DescriptionItem from '../../../common/descriptionItem.vue';

const { mapState, mapMutations, mapGetters } = createNamespacedHelpers('complexTable');

export default {
    components: { DescriptionItem },
    data() {
        return {
            dialogVisible: true,
        };
    },
    computed: {
        ...mapState(['previewVisiable']),
        ...mapGetters(['activeRow']),
        data: v => _.toPairs(v.activeRow),
    },
    watch: {
        visiable(val) {
            val && this.update();
        },
    },
    methods: {
        ...mapMutations(['setState']),
        handleClose() {
            this.setState({ previewVisiable: false });
        },
        update() {
        },
    },
};
</script>

<style lang="less" module>
</style>
