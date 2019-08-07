<template>
    <el-col :span="12">
        <el-card shadow="hover" :class="$style.card">
            <div slot="header" :class="$style.header">
                <i :class="icon" /><span>{{ title }}</span>
            </div>
            <slot></slot>
        </el-card>
    </el-col>
</template>

<script>
export default {
    props: {
        icon: String,
        title: String,
    },
};
</script>

<style lang="less" module>
.card {
    min-height: 300px;
}

.header i {
    margin-right: 5px;
}
</style>
