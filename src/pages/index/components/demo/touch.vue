<template>
    <div :class="$style.main">
        <div
            :class="[$style.box, 'flex-center']"
            v-tap="handleTap"
            v-press="handlePress"
            v-swipeleft="handleSwipeleft"
            v-swiperight="handleSwiperight"
            v-swipeup="handleSwipeup"
            v-swipedown="handleSwipedown"
        >手势区域</div>
        <div :class="$style.log">{{ log }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            log: ''
        };
    },
    methods: {
        handleTap() {
            this.log = 'tap';
        },
        handlePress() {
            this.log = 'press';
        },
        handleSwipeleft() {
            this.log = 'swipeleft';
        },
        handleSwiperight() {
            this.log = 'swiperight';
        },
        handleSwipeup() {
            this.log = 'swipeup';
        },
        handleSwipedown() {
            this.log = 'swipedown';
        },
    }
};
</script>

<style lang="less" module>
.main {
    display: flex;
    height: 300px;
}

.box {
    flex: 0 0 300px;
    background-color: #eee;
}

.log {
    flex-grow: 1;
    background-color: #e5e5e5;
}
</style>