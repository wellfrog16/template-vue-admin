import Vue from 'vue';
import Hammer from 'hammer';

function vueTouch(el, type, binding) {
    const hammertime = new Hammer(el);
    hammertime.on(type, binding.value);
}

Vue.directive('tap', {
    bind: function(el, binding) {
        vueTouch(el, 'tap', binding);
    }
});

Vue.directive('swipeleft', {
    bind: function(el, binding) {
        vueTouch(el, 'swipeleft', binding);
    }
});

Vue.directive('swiperight', {
    bind: function(el, binding) {
        vueTouch(el, 'swiperight', binding);
    }
});

Vue.directive('press', {
    bind: function(el, binding) {
        vueTouch(el, 'press', binding);
    }
});
