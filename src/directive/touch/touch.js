import utils from '@/utils';

function vueTouch(el, binding, re, ev = re) {
    utils.loadCdn('hammer').then(Hammer => {
        const hammertime = new Hammer.Manager(el);
        const recognizers = {
            pan: Hammer.Pan,
            tap: Hammer.Tap,
            press: Hammer.Press,
            swipe: Hammer.Swipe,
        };
        hammertime.add(new recognizers[re]());
        hammertime.on(ev, binding.value);
    });
}

export default {
    tap: {
        bind(el, binding) { vueTouch(el, binding, 'tap'); },
    },
    pan: {
        bind(el, binding) { vueTouch(el, binding, 'pan'); },
    },
    panstart: {
        bind(el, binding) { vueTouch(el, binding, 'pan', 'panstart'); },
    },
    panend: {
        bind(el, binding) { vueTouch(el, binding, 'pan', 'panend'); },
    },
    panup: {
        bind(el, binding) { vueTouch(el, binding, 'pan', 'panup'); },
    },
    pandown: {
        bind(el, binding) { vueTouch(el, binding, 'pan', 'pandown'); },
    },
    press: {
        bind(el, binding) { vueTouch(el, binding, 'press'); },
    },
    pressup: {
        bind(el, binding) { vueTouch(el, binding, 'press', 'pressup'); },
    },
    swipeleft: {
        bind(el, binding) { vueTouch(el, binding, 'swipe', 'swipeleft'); },
    },
    swiperight: {
        bind(el, binding) { vueTouch(el, binding, 'swipe', 'swiperight'); },
    },
    swipeup: {
        bind(el, binding) { vueTouch(el, binding, 'swipe', 'swipeup'); },
    },
    swipedown: {
        bind(el, binding) { vueTouch(el, binding, 'swipe', 'swipedown'); },
    },
};
