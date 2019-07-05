<script>
import { createNamespacedHelpers } from 'vuex';
import AbsPagination from '#index/components/abstract/pagination/default.vue';

const { mapState, mapMutations } = createNamespacedHelpers('mixins');

export default {
    mixins: [AbsPagination],
    computed: {
        ...mapState(['total']),
    },
    methods: {
        ...mapMutations(['setState']),
    },
};
</script>
