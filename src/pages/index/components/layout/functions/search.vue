<template>
    <div :class="$style.main" v-outside-click="handleHidden">
        <i class="fas fa-search fa-lg fa-fw" @click="toggleInput"></i>
        <el-select
            v-model.trim="keywords"
            placeholder="请输入查询页面"
            :class="[$style.search, inputStyle]"
            default-first-option
            filterable
            clearable
            remote
            :remote-method="querySearch"
            @change="handleRedirct"
        >
            <el-option
                v-for="item in options"
                :key="item.value.path"
                :label="item.label.join(' > ')"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [],
            keywords: '',
            routes: [],
            inputStyle: {
                [this.$style.show]: false,
            },
        };
    },
    computed: {
        currentRoute() {
            return this.formatRoutes(this.routes);
        },
    },
    mounted() {
        this.routes = [...this.$store.getters.routes];
    },
    methods: {
        handleHidden() {
            const { show } = this.$style;
            this.inputStyle[show] = false;
        },

        toggleInput() {
            const { show } = this.$style;
            this.inputStyle[show] = !this.inputStyle[show];
        },

        // 拍平路由
        formatRoutes(routes, path = '', title = []) {
            let result = [];
            routes.forEach((route) => {
                if (route.meta && !route.meta.hidden) {
                    const data = {};
                    data.title = [...title, route.name];
                    data.meta = route.meta || {};
                    data.meta.path = this.formatPath(path, route.path);
                    result.push(data);

                    if (route.children && route.children.length > 0) {
                        result = [...result, ...this.formatRoutes(route.children, data.meta.path, data.title)];
                    }
                }
            });
            return result;
        },
        formatPath(path1, path2) {
            if (path1 === '') { return path2; }
            return `${path1}/${path2}`;
        },
        handleRedirct(meta) {
            if (meta.link) {
                window.open(meta.path);
            } else if (meta.path) {
                this.$router.push({ path: meta.path });
            }
            this.keywords = '';
            this.options = [];
        },
        // 查询
        querySearch(key) {
            this.options = [];
            if (key) {
                this.options = this.currentRoute
                    .filter(item => item.title.join('$$').indexOf(key) !== -1)
                    .map(item => ({ label: item.title, value: item.meta }));
            }
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
