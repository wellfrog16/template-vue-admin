<template>
    <div :class="$style.main">
        <el-row>
            <el-col :span="4" v-for="item in list" :key="item.id">
                <h-text-ellipsis :content="item.title">{{ item.title }}</h-text-ellipsis>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                { id: 1, title: 'asdsadewrerew' },
                { id: 2, title: '35464578689090909042342342' },
                { id: 3, title: 'zxdfgfjuybngjhhrh' },
                { id: 4, title: 'asdsdfdg' },
                { id: 5, title: '235gfdgfh6565537' },
            ],
        };
    },
};
</script>

<style lang="less" module>
.main {
    display: inline-block;
}
</style>
