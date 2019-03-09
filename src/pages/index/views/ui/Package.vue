<template>
    <div :class="$style.main">
        <div :class="$style.wrapper">
            <div class="app-tips" style="margin: 1px 0 10px 0;">
                <p>这里仅列出 Element-UI 的部分组件和功能以作右侧导航展示，更多组件及用法请参考<a href="http://element.eleme.io" target="_blank">官网</a></p>
            </div>

            <!-- 按钮 -->
            <x-button id="pa-button" />

            <!-- 单选框 -->
            <x-radio id="pa-radio" />

            <!-- 多选框 -->
            <x-checkbox id="pa-checkbox" />

            <!-- 输入框 -->
            <x-input id="pa-input" />

            <!-- 下拉框 -->
            <x-select id="pa-select" />

            <!-- 级联选择器 -->
            <x-cascader id="pa-cascader" />

            <!-- 滑块 -->
            <x-slider id="pa-slider" />

            <!-- 穿梭框 -->
            <x-transfer id="pa-transfer" />
        </div>
        <div :class="$style.nav">
            <scrollactive
                :class="$style['sidebar-menu']"
                active-class="active"
                :offset="20"
                :duration="800"
                bezier-easing-value=".5,0,.35,1"
                scroll-container-selector=".el-main"
            >
                <el-card :class="$style['menu-card']" shadow="never">
                    <a href="#pa-button" class="scrollactive-item">按钮</a>
                    <a href="#pa-radio" class="scrollactive-item">单选框</a>
                    <a href="#pa-checkbox" class="scrollactive-item">复选框</a>
                    <a href="#pa-input" class="scrollactive-item">输入框</a>
                    <a href="#pa-select" class="scrollactive-item">下拉框</a>
                    <a href="#pa-cascader" class="scrollactive-item">级联选择器</a>
                    <a href="#pa-slider" class="scrollactive-item">滑块</a>
                    <a href="#pa-transfer" class="scrollactive-item">穿梭框</a>
                </el-card>
            </scrollactive>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        XButton: () => import('../../components/ui/package/button.vue'),
        XRadio: () => import('../../components/ui/package/radio.vue'),
        XCheckbox: () => import('../../components/ui/package/checkbox.vue'),
        XInput: () => import('../../components/ui/package/input.vue'),
        XSelect: () => import('../../components/ui/package/select.vue'),
        XCascader: () => import('../../components/ui/package/cascader.vue'),
        XSlider: () => import('../../components/ui/package/slider.vue'),
        XTransfer: () => import('../../components/ui/package/transfer.vue'),
    },
};
</script>

<style lang="less" module>
@import '../../../../assets/style/config.less';

@menuWidth: 150px;

.menu-card {
    width: 100%;

    a {
        line-height: 30px;
        display: block;

        &:hover, &:global(.active) {
            padding: 0 14px;
            background-color: @g-theme-color;
            color: #fff;
        }
    }
}

.main {
    display: flex;

    :global(.el-card+.el-card) {
        margin-top: 10px;
    }

    .wrapper {
        display: flex;
        flex: 1 1 0;
        flex-direction: column;

        :global(.el-card__header span) {
            margin-left: 10px;
        }

        :global(.el-row+.el-row) {
            margin-top: 10px;
        }

        > div {
            flex-grow: 1;
        }
    }

    .nav {
        flex: 0 0 @menuWidth;
        padding-left: 10px;
    }
}

.sidebar-menu {
    position: fixed;
    width: @menuWidth;
}
</style>
