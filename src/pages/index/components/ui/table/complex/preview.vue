<template>
    <el-dialog
        :title="title"
        :visible.sync="previewVisiable"
        :before-close="handleClose"
        class="or-dialog"
        width="700px"
        top="-5vh"
    >
        <div class="detail-preview">
            <el-row>
                <el-col :span="12">
                    <description-item label="姓名">
                        <template>
                            <span>{{ activeRow.name }}</span>
                            <i class="fas fa-male fa-lg fa-fw" v-if="activeRow.gender === '男'" :class="style['c-male']" />
                            <i class="fas fa-female fa-lg fa-fw" v-if="activeRow.gender === '女'" :class="style['c-female']" />
                        </template>
                    </description-item>
                </el-col>
                <el-col :span="12"><description-item label="学历" :content="activeRow.education" /></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><description-item label="生日" :content="activeRow.birthday" /></el-col>
                <el-col :span="12"><description-item label="身份证" :content="activeRow.id" /></el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><description-item label="区域" :content="activeRow.county" /></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><description-item label="邮编" :content="activeRow.zip" /></el-col>
                <el-col :span="12"><description-item label="Email" :content="activeRow.email" /></el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <description-item label="收入">
                        <template>{{ activeRow.income | currency('￥', 2) }}</template>
                    </description-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><description-item label="备注" :content="activeRow.remark" /></el-col>
            </el-row>
        </div>
        <span slot="footer">
            <el-button type="primary" @click="handleClose">确定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import DescriptionItem from '../../../common/descriptionItem.vue';
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
        ...mapState(['previewVisiable']),
        ...mapGetters(['activeRow']),
        title() {
            return `${this.activeRow.name} 个人信息`;
        },
    },
    methods: {
        ...mapMutations(['setState']),
        handleClose() {
            this.setState({ previewVisiable: false });
        },
    },
};
</script>
