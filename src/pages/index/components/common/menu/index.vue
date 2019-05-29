<template>
    <el-menu router
             :collapse="collapse"
             :background-color="backgroundColor"
             :text-color="textColor"
             :active-text-color="activeTextColor"
             :default-openeds="defaultOpeneds"
             :default-active="defaultActive"
    >
        <template v-for="(item, index) in data">

            <!-- 无子菜单 -->
            <template v-if="!isHidden(item) && (!item.children || isHiddenChildren(item))">
                <menu-item :item="item" :key="index" />
            </template>

            <!-- 有子菜单 -->
            <template v-if="!isHidden(item) && (item.children && !isHiddenChildren(item))">
                <submenu-item :item="item" :key="index" />
            </template>
        </template>
    </el-menu>
</template>

<script>
import MenuItem from './menu-item.vue';
import SubmenuItem from './submenu-item.vue';

// todo: 三级菜单通用组件化
export default {
    components: { MenuItem, SubmenuItem },
    props: {
        data: { type: Array, default: () => [] },
        collapse: { type: Boolean, default: false },
        'default-openeds': { type: Array, default: () => [] },
        'default-active': { type: String, default: '' },
        'background-color': { type: String, default: '#fff' },
        'text-color': { type: String, default: '#303133' },
        'active-text-color': { type: String, default: '#409eff' },
    },
    methods: {
        isHidden(item) {
            return !item.meta ? false : item.meta.hidden;
        },
        isHiddenChildren(item) {
            let isHidden = false;
            if (item.children && item.children.length > 0) {
                isHidden = item.children.every(item1 => item1.meta && item1.meta.hidden);
            }
            return isHidden;
        },
    },
};
</script>
