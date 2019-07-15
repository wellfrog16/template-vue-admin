<template>
    <div :class="$style.main" :id="uid">
        <el-tooltip
            v-if="tipsVisible"
            :effect="effect"
            :placement="placement"
            :popper-class="popperClass"
            :popper-options="popperOptions"
            :enterable="enterable"
        >
            <div slot="content"><slot>{{ content }}</slot></div>
            <div :class="$style.ellipsis"><slot>{{ content }}</slot></div>
        </el-tooltip>
        <div v-if="textVisible" :class="$style.text"><slot>{{ content }}</slot></div>
    </div>
</template>

<script>
export default {
    props: {
        id: { type: String },
        effect: { type: String, default: 'dark' },
        type: { type: String, default: 'single' }, // 单行多行
        placement: { type: String, default: 'top' }, // tips位置
        content: { type: String },
        popperOptions: { type: Object, default: () => ({ boundariesElement: 'body', gpuAcceleration: false }) }, // popper.js 的参数
        popperClass: { type: String }, // popper样式
        enterable: { type: Boolean, default: true }, // 鼠标是否可进入到 tooltip 中
    },
    data() {
        return {
            randomId: `ellipsis${new Date().getTime() + Math.floor(Math.random() * 100000)}`,
            tipsVisible: false,
            textVisible: false,
        };
    },
    computed: {
        uid() {
            return this.id || this.randomId;
        },
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
                    const originWidth = document.querySelector(`#${this.uid} .${this.$style.text}`).offsetWidth;
                    const ellipsisWidth = document.querySelector(`#${this.uid} .${this.$style.ellipsis}`).offsetWidth;
                    console.log(originWidth);
                    console.log(ellipsisWidth);
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
