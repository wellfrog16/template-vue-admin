<script>
import api from '@/api/mock/person';
import AsyncSelect from '@/components/async-select.vue';

export default {
    mixins: [AsyncSelect],
    methods: {
        loadList() {
            this.disabled = true;
            api.edus().then(res => {
                this.options = res.list.map(item => ({
                    label: item,
                    value: item,
                }));
                this.disabled = false;
            });
        },
    },
};
</script>
