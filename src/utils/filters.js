import Vue from 'vue';
import utils from './index';

Vue.filter('currency', utils.currency);
Vue.filter('secretPhoneNum', utils.secretPhoneNum);
