<template>
    <div :class="$style.main">
        <i class="fas fa-search fa-lg fa-fw" @click="toggleInput"></i>
        <el-autocomplete
            v-model="keywords"
            placeholder="请输入查询页面"
            :class="[$style.search, inputStyle]"
            clearable
            :fetch-suggestions="querySearch"
            @select="handleRedirct"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            keywords: '',
            inputStyle: {
                [this.$style.show]: false,
            },
        };
    },
    methods: {
        toggleInput() {
            const { show } = this.$style;
            this.inputStyle[show] = !this.inputStyle[show];
        },
        handleRedirct() {
            console.log(111);
        },
        querySearch(key, cb) {
            console.log(this.$store.getters.routes);
            console.log(key);
            cb([]);
        },
    },
};
</script>

<style lang="less" module>
@import '../../../../../assets/style/config.less';

.main {
    display: inline-block;

    i {
        cursor: pointer;
    }
}

.search {
    width: 0 !important;
    // overflow: hidden;
    margin-left: 10px;
    transition: width 0.2s;

    input {
        border: 0;
        border-radius: 0;
        border-bottom: 1px solid @g-color-border1;
        display: none;
    }
}

.show {
    width: 150px !important;

    input {
        display: inline-block;
    }
}
</style>
