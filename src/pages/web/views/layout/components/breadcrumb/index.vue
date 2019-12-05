<template>
    <b-container>
        <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Admin',
                    href: '#',
                },
                {
                    text: 'Manage',
                    href: '#',
                },
                {
                    text: 'Library',
                    active: true,
                },
            ],
        };
    },
};
</script>

<style lang="less" module>
</style>
