<template>
    <transition :name="transitionName">
        <div v-show="visible" :class="[$style.main, 'flex-center']" @click="backToTop">
            <i class="el-icon-upload2" />
        </div>
    </transition>
</template>

<script>
import { $ } from '@/utils/cdn';

export default {
    name: 'BackToTop',
    props: {
        visibilityHeight: { type: Number, default: 400 },
        element: { type: String, default: 'body' },
    },
    data() {
        return {
            visible: false,
        };
    },
    computed: {
        container() {
            return $(this.element);
        },
    },
    mounted() {
        this.container.on('scroll', () => this.handleScroll());
    },
    beforeDestroy() {
        this.container.unbind();
    },
    methods: {
        handleScroll() {
            this.visible = this.container.scrollTop() > this.visibilityHeight;
        },
        backToTop() {
            this.container.scrollTo(0, 1000);
        },
    },
};
</script>

<style lang="less" module>
@import '../../assets/style/config.less';

.main {
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 40px;
    height: 40px;
    font-size: 20px;
    background-color: @g-color-primary;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
}
</style>
