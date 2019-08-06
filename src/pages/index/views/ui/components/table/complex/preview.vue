<template>
    <el-dialog
        :title="title"
        :visible.sync="previewVisible"
        :before-close="handleClose"
        class="or-dialog-wrapper"
        custom-class="or-dialog"
        width="700px"
        top="0"
    >
        <div class="detail-preview">
            <el-row>
                <el-col :span="12">
                    <description-item label="姓名">
                        <template>
                            <span>{{ data.name }}</span>
                            <i class="fas fa-male fa-lg fa-fw" v-if="data.gender === '男'" :class="style['c-male']" />
                            <i class="fas fa-female fa-lg fa-fw" v-if="data.gender === '女'" :class="style['c-female']" />
                        </template>
                    </description-item>
                </el-col>
                <el-col :span="12"><description-item label="学历" :content="data.education" /></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><description-item label="生日" :content="data.birthday" /></el-col>
                <el-col :span="12"><description-item label="身份证" :content="data.id" /></el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><description-item label="区域" :content="data.county" /></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><description-item label="邮编" :content="data.zip" /></el-col>
                <el-col :span="12"><description-item label="Email" :content="data.email" /></el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <description-item label="收入">
                        <template>{{ data.income | currency('￥', 2) }}</template>
                    </description-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><description-item label="备注" :content="data.remark" /></el-col>
            </el-row>
        </div>
        <span slot="footer">
            <el-button type="primary" @click="handleClose">确定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import DescriptionItem from '#index/components/common/description-item.vue';
import style from '@/assets/style/usr/app.module.less';

const { mapState, mapMutations, mapGetters } = createNamespacedHelpers('complexTable');

export default {
    components: { DescriptionItem },
    data() {
        return {
            style,
        };
    },
    computed: {
        ...mapState(['previewVisible']),
        ...mapGetters(['activeRow']),
        data() {
            return this.activeRow || {};
        },
        title() {
            return `${this.data.name} 个人信息`;
        },
    },
    methods: {
        ...mapMutations(['setState']),
        handleClose() {
            this.setState({ previewVisible: false });
        },
    },
};
</script>
