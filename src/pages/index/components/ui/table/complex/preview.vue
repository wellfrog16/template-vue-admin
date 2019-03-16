<template>
    <el-dialog
        title="提示"
        :visible.sync="previewVisiable"
        :before-close="handleClose"
    >
        <div class="detail">
            <el-row>
                <el-col :span="12">姓名：{{ activeRow.name }}</el-col>
                <el-col :span="12"><description-item label="标题" content="内容">11111111111111222222</description-item></el-col>
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
