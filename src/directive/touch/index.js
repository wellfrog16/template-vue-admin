import Vue from 'vue';
import touch from './touch';

Vue.directive('tap', touch.tap);
Vue.directive('pan', touch.pan);
Vue.directive('panstart', touch.panstart);
Vue.directive('panend', touch.panend);
Vue.directive('panup', touch.panup);
Vue.directive('pandown', touch.pandown);
Vue.directive('press', touch.press);
Vue.directive('pressup', touch.pressup);
Vue.directive('swipeleft', touch.swipeleft);
Vue.directive('swiperight', touch.swiperight);
Vue.directive('swipeup', touch.swipeup);
Vue.directive('swipedown', touch.swipedown);
