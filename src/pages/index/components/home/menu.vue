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

            <!-- 无二级子节点 -->
            <el-menu-item
                v-if="!isHidden(item) && (!item.children || isHiddenChildren(item))"
                :index="item.path"
                :key="index"
            >
                <i :class="item.icon"></i>
                <span slot="title">{{ item.name }}</span>
            </el-menu-item>

            <!-- 有二级子节点 -->
            <el-submenu
                v-if="!isHidden(item) && (item.children && !isHiddenChildren(item))"
                :index="item.name"
                :key="index"
            >
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{ item.name }}</span>
                </template>
                <template v-for="(item1, index1) in item.children">

                    <!-- 无三级菜单 -->
                    <el-menu-item
                        v-if="!isHidden(item1) && (!item1.children || isHiddenChildren(item1))"
                        :index="`${item.path}/${item1.path}`"
                        :key="index1"><i :class="item1.icon">
                        </i>{{ item1.name }}1
                    </el-menu-item>

                    <!-- 有三级菜单 -->
                    <template v-if="!isHidden(item1) && (item1.children && !isHiddenChildren(item1))">
                        <el-submenu :index="item1.name" :key="index1">
                            <template slot="title">
                                <i :class="item1.icon"></i>
                                <span>{{ item1.name }}2</span>
                            </template>
                            <el-menu-item
                                v-for="(item2, index2) in item1.children"
                                :index="`${item.path}/${item1.path}/${item2.path}`"
                                :key="index2">
                                <i :class="item2.icon"></i>{{ item2.name }}
                            </el-menu-item>
                        </el-submenu>
                    </template>
                </template>
            </el-submenu>
            <!--  -->
        </template>
    </el-menu>
</template>

<script>
// todo: 三级菜单通用组件化
export default {
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
                isHidden = item.children.some(item1 => item1.meta && item1.meta.hidden);
                // for (const item1 in item.children) {
                //     if (item1.meta && item1.meta.hidden) { isHidden = true; break; }
                // }
            }
            return isHidden;
        },
    },
};
</script>
