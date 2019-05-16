<template>
    <div>
        <el-button type="primary" @click="handleClick">开始</el-button>
        <el-divider><i class="el-icon-eleme"></i></el-divider>
        <el-alert type="success" :closable="false">
            <div :class="$style.wrapper" slot="title">
                <vue-count-to
                    slot="title"
                    ref="myCount"
                    :startVal="0"
                    :endVal="2019"
                    :duration="5000"
                    :autoplay="false"
                />
            </div>
        </el-alert>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$refs.myCount.start();
        },
    },
};
</script>

<style lang="less" module>
.wrapper {
    padding: 20px 0;
    font-size: 40px;
}
</style>
