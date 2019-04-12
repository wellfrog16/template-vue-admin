import Vue from 'vue';
import touch from './touch';

Vue.directive('tap', touch.tap);
Vue.directive('press', touch.press);
Vue.directive('swipeleft', touch.swipeleft);
Vue.directive('swiperight', touch.swiperight);
Vue.directive('swipeup', touch.swipeup);
Vue.directive('swipedown', touch.swipedown);
