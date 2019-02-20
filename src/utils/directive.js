import Vue from 'vue';
import { Hammer } from '@/utils/cdn';

function vueTouch(el, binding, re, ev = re) {
    const hammertime = new Hammer.Manager(el);
    const recognizers = {
        tap: Hammer.Tap,
        press: Hammer.Press,
        swipe: Hammer.Swipe,
    };
    hammertime.add(new recognizers[re]());
    hammertime.on(ev, binding.value);
}

Vue.directive('tap', {
    bind(el, binding) {
        vueTouch(el, binding, 'tap');
    },
});

Vue.directive('swipeleft', {
    bind(el, binding) {
        vueTouch(el, binding, 'swipe', 'swipeleft');
    },
});

Vue.directive('swiperight', {
    bind(el, binding) {
        vueTouch(el, binding, 'swipe', 'swiperight');
    },
});

Vue.directive('swipeup', {
    bind(el, binding) {
        vueTouch(el, binding, 'swipe', 'swipeup');
    },
});

Vue.directive('swipedown', {
    bind(el, binding) {
        vueTouch(el, binding, 'swipe', 'swipedown');
    },
});

Vue.directive('press', {
    bind(el, binding) {
        vueTouch(el, binding, 'press');
    },
});
