<template>
    <div :class="$style.main">
        <div :class="$style.wrapper">
            <section id="example-content">
                <p>This is the #example-content section which the sidebar will be relatively affixed!</p>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <p id="markup-1">22222222222222</p>
                <p>This is the #example-content section which the sidebar will be relatively affixed!</p>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <p id="markup-2">333333333333333</p>
                <p>This is the #example-content section which the sidebar will be relatively affixed!</p>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <p id="markup-3">4444444444444</p>
            </section>
        </div>
        <div :class="$style.nav">
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
.main {
    display: flex;

    .wrapper {
        flex: 1 1 0;
        background-color: #fcfcfc;
    }

    // section {
    //     width: 500px;
    //     height: 10000px;
    //     // flex-grow: 1;
    //     // height: 10000px;
    // }

    .nav {
        flex: 0 0 200px;
        background-color: greenyellow;
    }
}

.sidebar-menu {
    position: fixed;
}
</style>
