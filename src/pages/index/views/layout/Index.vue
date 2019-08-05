<template>
    <el-container :class="$style.container">
        <el-aside :class="$style.aside" :width="width">
            <h1 :class="$style.logo"><span>管理系统logo</span></h1>
            <aside-menu
                class="aside-menu"
                :data="menuData"
                :collapse="collapse"
                background-color="#316cb1"
                text-color="#d0ddec"
                active-text-color="#deff00"
                :default-active="defaultActive"
                :popper-class="$style['my-popper']"
            />
        </el-aside>
        <el-container>
            <el-header :class="$style.header">
                <div :class="$style.left">
                    <i :class="[$style.switch, 'fas fa-bars fa-lg']" @click="toggle" id="asideToggle" />
                    <el-breadcrumb separator="/" :class="$style.breadcrumb" id="breadcrumb">
                        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item
                            v-for="item in routeMatched"
                            :to="{ path: item.path }"
                            :key="item.path"
                        >{{ item.meta && item.meta.title }}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <functions />
            </el-header>
            <el-main :class="$style.main" id="elMain">
                <transition name="component-fade" mode="out-in">
                    <router-view />
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AsideMenu from '#index/components/common/menu/index.vue';
import Functions from '#index/components/layout/functions/index.vue';
import { $ } from '@/utils/cdn';
import { storage } from '@/utils/rivers';

export default {
    components: { AsideMenu, Functions },
    data() {
        return {
            width: 'auto',
            collapse: false,
            menuData: this.$store.getters.routes,
        };
    },
    computed: {
        routeMatched() {
            return this.$route.matched.filter(item => !(item.meta && item.meta.hidden) && (item.meta && item.meta.title !== '首页'));
        },
        defaultActive() {
            const matched = [...this.$route.matched];
            const route = matched.reverse().find(item => (item.meta && item.meta.belong) || !(item.meta && item.meta.hidden));
            return (route.meta && route.meta.belong) || route.path;
        },
    },
    mounted() {
        this.setCollapse(this.getStatus());
    },
    methods: {
        toggle() {
            this.setCollapse(!this.getStatus());
        },
        setCollapse(status) {
            const swit = $(`.${this.$style.switch}`);
            const target = $(`.${this.$style.logo} span`);
            if (!status) {
                setTimeout(() => target.show(), 100);
                swit.removeClass(this.$style['switch-tran']);
                storage.set('sys-collapse', 0);
            } else {
                target.hide();
                swit.addClass(this.$style['switch-tran']);
                storage.set('sys-collapse', 1);
            }
            this.collapse = status;
        },
        getStatus() {
            return !!(storage.get('sys-collapse') || 0);
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

    :global(.aside-menu) i {
        color: #d0ddec;
    }

    :global(.el-menu-item.is-active) i {
        color: #deff00;
    }
}

.my-popper i {
    color: #d0ddec;
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
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    position: relative;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);

    .left {
        display: flex;
        align-items: center;
    }
}

.switch {
    cursor: pointer;
    transition: all 0.2s;
}

.switch-tran {
    transform: rotate(90deg);
}

.main {
    background-color: #f0f2f5;
    box-sizing: border-box;
    padding: 0;
    // display: flex;
    // flex-direction: column;
}

.breadcrumb {
    display: inline-block;
    margin-left: 20px;
}
</style>
