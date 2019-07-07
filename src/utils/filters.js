import Vue from 'vue';
import utils from './index';

Vue.filter('currency', utils.currency);
