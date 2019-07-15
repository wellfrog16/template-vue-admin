<template>
    <div :class="$style.main">
        <el-tooltip v-if="tipsVisible" placement="top">
            <div slot="content"><slot>{{ content }}</slot></div>
            <div :class="$style.ellipsis"><slot>{{ content }}</slot></div>
        </el-tooltip>
        <div v-if="textVisible" :class="$style.text"><slot>{{ content }}</slot></div>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: String },
    },
    data() {
        return {
            tipsVisible: false,
            textVisible: false,
        };
    },
    watch: {
        content: {
            handler() {
                this.update();
            },
            immediate: true,
        },
    },
    methods: {
        // 检查是否溢出
        isOverflow() {
            return new Promise((resolve) => {
                this.tipsVisible = true;
                this.textVisible = true;

                this.$nextTick(() => {
                    const originWidth = document.querySelector(`.${this.$style.text}`).offsetWidth;
                    const ellipsisWidth = document.querySelector(`.${this.$style.ellipsis}`).offsetWidth;

                    resolve(originWidth > ellipsisWidth);
                });
            });
        },

        // 更新数据和结构
        async update() {
            const isOverflow = await this.isOverflow();
            this.tipsVisible = isOverflow;
            this.textVisible = !isOverflow;
        },
    },
};
</script>

<style lang="less" module>
.main {
    width: 100%;
    display: inline-block;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.text {
    display: inline;
}
</style>
