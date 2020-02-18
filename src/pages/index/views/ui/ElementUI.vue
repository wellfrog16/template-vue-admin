<template>
    <div :class="[$style.main, 'main-wrapper']">
        <div :class="$style.wrapper">
            <el-alert
                style="margin-bottom: 8px;"
                effect="dark"
                title="说明"
                type="success">
                这里仅列出 Element-UI 的部分组件和功能以作右侧导航展示，更多组件及用法请参考<a href="http://element.eleme.io" target="_blank">官网</a>
            </el-alert>

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
            <vue-scrollactive
                :class="$style['sidebar-menu']"
                active-class="active"
                :offset="20"
                :duration="800"
                bezier-easing-value=".5,0,.35,1"
                scroll-container-selector=".el-main"
                :modifyUrl="false"
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
            </vue-scrollactive>
        </div>
        <x-backtotop element="#elMain" />
    </div>
</template>

<script>
import XBacktotop from '@/components/backtotop/index.vue';
import XButton from './components/element-ui/button.vue';
import XRadio from './components/element-ui/radio.vue';
import XCheckbox from './components/element-ui/checkbox.vue';
import XInput from './components/element-ui/input.vue';
import XSelect from './components/element-ui/select.vue';
import XCascader from './components/element-ui/cascader.vue';
import XSlider from './components/element-ui/slider.vue';
import XTransfer from './components/element-ui/transfer.vue';

export default {
    components: {
        XButton,
        XRadio,
        XCheckbox,
        XInput,
        XSelect,
        XCascader,
        XSlider,
        XTransfer,
        XBacktotop,
    },
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

@menuWidth: 150px;

.menu-card {
    width: 100%;

    a {
        line-height: 30px;
        display: block;
        transition: all 0.2s ease-in;

        &:hover, &:global(.active) {
            padding: 0 14px;
            background-color: @g-color-primary;
            color: #fff;
            transition: all 0.3s ease-in;
        }
    }
}

.main {
    flex-direction: row;

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
