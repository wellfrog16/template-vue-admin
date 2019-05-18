<template>
    <div :class="$style.main">
        <span :class="[$style.icon, 'flex-center']" :style="style">
            <i :class="icon"></i>
        </span>
        <div :class="$style.content">
            <h4>{{ title }}</h4>
            <vue-count-to
                :class="$style.number"
                :startVal="0"
                :endVal="number"
                :duration="duration"
                :prefix="prefix"
                :suffix="suffix"
                :separator="separator"
                :decimals="decimals"
            />
        </div>
    </div>
</template>

<script>
import { utils } from '@/utils/rivers';

export default {
    props: {
        icon: { type: String },
        color: { type: String, default: () => utils.getRandomColor() },
        title: { type: String, default: '' },
        number: { type: Number, default: 0 },
        prefix: { type: String, default: '' },
        suffix: { type: String, default: '' },
        separator: { type: String, default: ',' },
        duration: { type: Number, default: 3000 },
        decimals: { type: Number, default: 0 },
    },
    computed: {
        style() {
            return {
                'background-color': this.color,
            };
        },
    },
    mounted() {
        console.log(this.color);
    },
};
</script>

<style lang="less" module>
@import '../../../../../assets/style/config.less';

@base-size: 90px;

.main {
    border: 1px solid @g-color-border3;
    background-color: #fff;
    height: @base-size;
    overflow: hidden;
    display: flex;
}

.icon {
    width: @base-size;
    height: @base-size;
    flex: 0 0 @base-size;
    color: #fff;
    font-size: 30px;
}

.content {
    flex-grow: 1;
    padding: 10px;

    h4 {
        margin: 0;
        font-weight: 100;
        // font-size: 12px;
    }
}

.number {
    display: inline-block;
    font-size: 28px;
    margin-top: 10px;
}
</style>
