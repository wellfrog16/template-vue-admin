import Vue from 'vue';
import { Hammer } from '@/utils/cdn';

function vueTouch(el, type, binding) {
    const hammertime = new Hammer(el);
    hammertime.on(type, binding.value);
}

Vue.directive('tap', {
    bind(el, binding) {
        vueTouch(el, 'tap', binding);
    },
});

Vue.directive('swipeleft', {
    bind(el, binding) {
        vueTouch(el, 'swipeleft', binding);
    },
});

Vue.directive('swiperight', {
    bind(el, binding) {
        vueTouch(el, 'swiperight', binding);
    },
});

Vue.directive('swipeup', {
    bind(el, binding) {
        vueTouch(el, 'swipeup', binding);
    },
});

Vue.directive('swipedown', {
    bind(el, binding) {
        vueTouch(el, 'swipedown', binding);
    },
});

Vue.directive('press', {
    bind(el, binding) {
        vueTouch(el, 'press', binding);
    },
});
