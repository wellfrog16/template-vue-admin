<template>
    <div>
        <el-row v-for="item in list" :key="item.id">
            <el-col :span="3">
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
                { id: 3, title: 'zxdfgfjuybngjhhrhxcvdf' },
                { id: 4, title: 'asdsdfdg' },
                { id: 5, title: '235gfdgfh6565537zdsd' },
            ],
        };
    },
};
</script>
