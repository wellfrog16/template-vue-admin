<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="复制" name="tab-a">
                <clipboard />
            </el-tab-pane>
            <el-tab-pane label="手势" name="tab-b">
                <touch />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import clipboard from '#index/components/ui/part/clipboard.vue';
import touch from '#index/components/ui/part/touch.vue';

export default {
    components: { clipboard, touch },
    data() {
        return {
            activeName: 'tab-a',
        };
    },
    mounted() {
    },
    methods: {
        handleClick() {
        },
    },
};
</script>

<style lang="less">

</style>
