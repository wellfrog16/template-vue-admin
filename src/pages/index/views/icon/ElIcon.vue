<template>
    <el-card :class="$style.card" shadow="never">
        <el-row :class="$style.list">
            <el-col
                v-for="item in list"
                :key="item"
                :xs="8"
                :sm="6"
                :md="4"
                :lg="3"
                :xl="2"
            >
                <div :class="$style.item">
                    <i :class="`el-icon-${item}`" />
                    <span v-text="item"></span>
                </div>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
import { ClipboardJS } from '@/utils/cdn';
import { elIcons } from './items';

export default {
    data() {
        return {
            list: elIcons,
            clipboard: null,
        };
    },
    mounted() {
        this.clipboard = new ClipboardJS(`.${this.$style.list}>div>div`, {
            text(trigger) {
                return trigger.querySelector('i').className;
            },
        });

        this.clipboard.on('success', e => {
            this.$message.success('复制成功');
            e.clearSelection();
        });
    },
    destroyed() {
        this.clipboard.destroy();
    },
};
</script>

<style lang="less" module>
.card {
    overflow: initial;
}

.list {
    :global(.el-col) {
        text-align: center;
        height: 130px;

        div {
            display: flex;
            flex-direction: column;
            padding: 10px;
            cursor: pointer;

            &:hover {
                box-shadow: 0 0 3px #ccc;
                background-color: #f5f5f5;
            }
        }

        i {
            line-height: 60px;
            font-size: 32px;
        }
    }
}
</style>
