<template>
    <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
            <span><i class="fab fa-cc-visa fa-lg" />卡片名称</span>
        </div>
        <el-row>
            <el-col
                :span="2"
                v-for="item in items"
                :key="item.category + '/' + item.name"
                v-text="item.name"
            ></el-col>
        </el-row>
    </el-card>
</template>

<script>
import { items } from './items';

export default {
    mounted() {
        console.log(items);
    },
    data() {
        return {
            items,
        };
    },
};
</script>

<style lang="less" module>
</style>
