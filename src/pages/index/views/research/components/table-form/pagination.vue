<script>
import { createNamespacedHelpers } from 'vuex';
import AbsPagination from '#index/components/abstract/pagination/default.vue';

const { mapState, mapMutations } = createNamespacedHelpers('research/tableForm');

export default {
    mixins: [AbsPagination],
    computed: {
        ...mapState(['total', 'filters']),
    },
    methods: {
        ...mapMutations(['setState']),
    },
};
</script>
