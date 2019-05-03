<template>
    <el-menu-item
        v-bind="itemProps"
        @click="link"
    >
        <i :class="item.meta && item.meta.icon"></i>
        <span slot="title">{{ item.name }}</span>
    </el-menu-item>
</template>

<script>
export default {
    props: {
        item: { type: Object, default: () => {}, required: true },
    },
    computed: {
        itemProps() {
            const props = {
                key: this.item.path,
            };
            // 无index则不会触发el-menu的router
            if (!this.isLink) { props.index = this.item.path; }

            return props;
        },
        isLink() {
            return this.item.meta && this.item.meta.link;
        },
    },
    methods: {
        link() {
            this.isLink && window.open(this.item.path);
        },
    },
};
</script>
