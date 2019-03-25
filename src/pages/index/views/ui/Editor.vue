<template>
    <div :class="$style.main">
        <tinymce v-model="content" :height="300" />
    </div>
</template>

<script>
import Tinymce from '@/components/tinymce/index.vue';

export default {
    components: {
        Tinymce,
    },
    data() {
        return {
            content: '',
        };
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
        transition: all 0.2s ease-in;

        &:hover, &:global(.active) {
            padding: 0 14px;
            background-color: @g-theme-color;
            color: #fff;
            transition: all 0.3s ease-in;
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
