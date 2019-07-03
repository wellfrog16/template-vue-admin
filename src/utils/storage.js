import {
    $,
    moment,
    CryptoJS,
} from '@/utils/cdn';
import utils from './utils';

const SECRET_KEY = 'frog';

// 带有效期的localStorage

/**
 * 删除指定的localStorge
 *
 * @param {string} key
 */
function remove(key) {
    localStorage.removeItem(key);
}

/**
 * 设置localStorge
 *
 * @param {string} key
 * @param {string} val
 * @param {date | number(秒)} expires
 * @param {boolean} encrypt
 */
function set(key, value, { expires, encrypt } = {}) {
    const type = $.type(expires);
    const createAt = moment().format('YYYY-MM-DD HH:mm:ss');
    const val = encrypt ? CryptoJS.AES.encrypt(value, SECRET_KEY).toString() : value;
    const item = { val, type, createAt };
    const handle = {
        date() { item.expires = moment(expires).format('YYYY-MM-DD HH:mm:ss'); },
        number() { item.expires = expires; },
    };

    handle[type] && handle[type]();
    localStorage.setItem(key, JSON.stringify(item));
}

/**
 * 获取localStorge
 *
 * @param {string} key
 * @returns
 */
function get(key, encrypt) {
    const val = localStorage.getItem(key);
    if (utils.isEmpty(val)) { return ''; }

    const item = JSON.parse(val);
    let result = '';

    const handle = {
        date() {
            if (new Date() > new Date(item.expires)) {
                remove(key);
            } else {
                result = item.val;
            }
        },
        number() {
            const ss = (new Date().getTime() - new Date(item.createAt).getTime()) / 1000;
            if (ss > +item.expires) {
                remove(key);
            } else {
                result = item.val;
            }
        },
        undefined() {
            result = item.val;
        },
    };

    handle[item.type] && handle[item.type]();
    result = encrypt ? CryptoJS.AES.decrypt(result, SECRET_KEY).toString(CryptoJS.enc.Utf8) : result;
    return result;
}

export default {
    get,
    set,
    remove,
};
