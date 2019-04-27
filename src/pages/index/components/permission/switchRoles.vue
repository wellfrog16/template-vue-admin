<template>
    <el-checkbox-group v-model="switchRoles">
        <el-checkbox-button v-for="item in options" :label="item" :key="item">{{ item }}</el-checkbox-button>
    </el-checkbox-group>
</template>

<script>
export default {
    data() {
        return {
            options: ['admin', 'editor', 'guest'],
        };
    },
    computed: {
        roles() {
            return this.$store.getters.roles;
        },
        switchRoles: {
            get() {
                return this.roles;
            },
            set(val) {
                this.$store.commit('member/setState', { roles: val });
                this.$emit('change');
            },
        },
    },
};
</script>
