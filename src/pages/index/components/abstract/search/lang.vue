<script>
export default {
    watch: {
        lang() {
            this.refresh();
        },
    },
    methods: {
        refresh() {
            console.warn('请实现refresh方法，以现有数据重新拉取，lang设置在header里');
        },
    },
};
</script>
