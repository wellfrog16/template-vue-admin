import Vue from 'vue';
import { _ } from '@/utils/cdn';

// 货币格式化
function currency(vals, units = '', decimals) {
    let decimal = decimals;
    let val = vals;
    let unit = units;

    if (decimal === undefined || decimal === null) {
        const arr = (`${val}`).split('.');
        decimal = arr.length === 2 ? arr[1].length : 0;
    }
    const digitsRE = /(\d{3})(?=\d)/g;
    val = parseFloat(val);
    if (!_.isFinite(val) || (!val && val !== 0)) return '';
    unit = unit != null ? unit : '$';
    decimal = decimal != null ? decimal : 2;
    const stringified = Math.abs(val).toFixed(decimal);
    const intx = decimal
        ? stringified.slice(0, -1 - decimal)
        : stringified;
    const i = intx.length % 3;
    const head = i > 0
        ? (intx.slice(0, i) + (intx.length > 3 ? ',' : ''))
        : '';
    const floatx = decimal
        ? stringified.slice(-1 - decimal)
        : '';
    const sign = val < 0 ? '-' : '';
    return sign + unit + head
        + intx.slice(i).replace(digitsRE, '$1,')
        + floatx;
}

Vue.filter('currency', currency);
