<template>
    <el-container :class="$style.container">
        <el-aside :class="$style.aside" :width="width">
            <h1 :class="$style.logo"><span>管理系统logo</span></h1>
            <aside-menu
                class="aside-menu"
                :data="menuData"
                :collapse="collapse"
                background-color="#1f2d3d"
                text-color="#fff" />
        </el-aside>
        <el-container>
            <el-header :class="$style.header">
                <div>
                    <i :class="[$style.switch, 'fas fa-bars fa-lg']" @click="toggle"></i>
                </div>
                <functions />
            </el-header>
            <el-main :class="$style.main">
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
// import AsideMenu from '../../components/home/menu.vue';
import AsideMenu from '../../components/common/menu/index.vue';
import Functions from '../../components/home/functions/index.vue';
import menu from '@/helper/menu';
import { $ } from '@/utils/cdn';

export default {
    components: { AsideMenu, Functions },
    data() {
        return {
            width: 'auto',
            collapse: false,
            menuData: menu.filter(this.$router.options.routes),
            test: [1, 2, 3],
        };
    },
    mounted() {
    },
    methods: {
        toggle() {
            const swit = $(`.${this.$style.switch}`);
            const target = $(`.${this.$style.logo} span`);
            if (this.collapse) {
                setTimeout(() => target.show(), 100);
                swit.removeClass(this.$style['switch-tran']);
            } else {
                target.hide();
                swit.addClass(this.$style['switch-tran']);
            }
            this.collapse = !this.collapse;
        },
    },
};
</script>

<style lang="less" module>
@import '../../../../assets/style/config.less';

@height: 60px;

.logo {
    height: @height;
    line-height: @height;
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 20px;
}

.container {
    height: 100vh;

    :global(.aside-menu:not(.el-menu--collapse)) {
        width: 250px;
    }
}

.aside {
    width: 200px;
    background-color: @g-color-primary;

    > ul {
        border-right: 0;
    }
}

.header {
    height: @height;
    line-height: @height;
    border-bottom: 1px solid @g-color-border4;
    display: flex;
    justify-content: space-between;
}

.switch {
    cursor: pointer;
    transition: all 0.2s;
}

.switch-tran {
    transform: rotate(90deg);
    transition: all 0.2s;
}

.main {
    background-color: #f0f2f5;
    display: flex;
    flex-direction: column;
}
</style>
