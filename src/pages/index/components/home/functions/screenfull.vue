<template>
    <el-tooltip :effect="effect" content="全屏" :placement="placement">
        <screenfull />
    </el-tooltip>
</template>

<script>
import Screenfull from '@/components/screenfull/index.vue';

export default {
    components: { Screenfull },
    props: {
        effect: { type: String, default: 'light' },
        placement: { type: String, default: 'bottom' },
    },
};
</script>
