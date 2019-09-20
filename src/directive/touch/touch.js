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

export default {
    tap: {
        bind(el, binding) { vueTouch(el, binding, 'tap'); },
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
