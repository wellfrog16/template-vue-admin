<template>
    <el-menu-item
        :index="item.path"
        :key="item.path"
    >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
    </el-menu-item>
</template>

<script>
export default {
    props: {
        item: { type: Object, default: () => {} },
    },
};
</script>
