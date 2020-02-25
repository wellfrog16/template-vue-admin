<template>
    <div class="main-wrapper" v-loading="loading">
        <el-card shadow="never">
            <el-button type="primary" @click.prevent.stop="handleDriver">开始引导</el-button>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        async handleDriver() {
            // 可以进入页面时加载cdn资源，这里是点击才加载
            this.loading = true;
            const Driver = await this.$utils.loadCdn('driver');
            this.loading = false;
            const driver = new Driver({
                allowClose: false,
                doneBtnText: '完成',
                closeBtnText: '关闭',
                nextBtnText: '下一个',
                prevBtnText: '上一个',
            });

            // Define the steps for introduction
            driver.defineSteps([
                {
                    element: '.aside-menu',
                    popover: {
                        title: '导航菜单',
                        description: '这里是所有的页面菜单',
                        position: 'right-center',
                    },
                },
                {
                    element: '#asideToggle',
                    popover: {
                        title: '导航菜单大小控制',
                        description: '点击来改变导航菜单的大小',
                        position: 'bottom-left',
                    },
                },
                {
                    element: '#breadcrumb',
                    popover: {
                        title: '面包屑导航',
                        description: '标示出当前页面的分类位置',
                        position: 'bottom-left',
                    },
                },
                {
                    element: '#functions',
                    popover: {
                        title: '功能模块',
                        description: '一些小功能存放区域',
                        position: 'bottom-right',
                    },
                },
                {
                    element: '#elMain',
                    popover: {
                        title: '主体展示区域',
                        description: '具体的功能会在这里进行展示',
                        position: 'mid-center',
                    },
                },
            ]);

            // Start the introduction
            driver.start();
        },
    },
};
</script>
