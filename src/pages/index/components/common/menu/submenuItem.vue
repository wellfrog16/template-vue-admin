<template>
    <el-submenu
        :index="item.path"
        :key="item.path"
    >
        <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
        </template>
        <template v-for="item1 in item.children">

            <!-- 无子级菜单 -->
            <template v-if="!isHidden(item1) && (!item1.children || isHiddenChildren(item1))">
                <menu-item :item="myItem(item1)" :key="myItem(item1).path" />
            </template>

            <!-- 有子菜单 -->
            <template v-if="!isHidden(item1) && (item1.children && !isHiddenChildren(item1))">
                <submenu-item :item="myItem(item1)" :key="myItem(item1).path" />
            </template>
        </template>
    </el-submenu>
</template>

<script>
import MenuItem from './menuItem.vue';

export default {
    name: 'submenuItem',
    components: { MenuItem },
    props: {
        item: { type: Object, default: () => {} },
    },
    methods: {
        myItem(item) {
            const data = { ...item };
            data.path = `${this.item.path}/${data.path}`;
            return data;
        },
        isHidden(item) {
            return !item.meta ? false : item.meta.hidden;
        },
        isHiddenChildren(item) {
            let isHidden = false;
            if (item.children && item.children.length > 0) {
                isHidden = item.children.some(item1 => item1.meta && item1.meta.hidden);
            }
            return isHidden;
        },
    },
};
</script>
