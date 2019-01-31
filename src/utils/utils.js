import { $, moment } from '@/utils/cdn';

// 空判断
function isEmpty(val) {
    return val === null || val === '' || val === undefined;
}

// 带有效期的localStorage
const localStorageZ = {
    set(key, val, expires) {
        const type = $.type(expires);
        const createAt = moment().format('YYYY-MM-DD HH:mm:ss');
        const item = { val, type, createAt };
        const handle = {
            date() { item.expires = moment(expires).format('YYYY-MM-DD HH:mm:ss'); },
            number() { item.expires = expires; },
        };

        handle[type] && handle[type]();
        localStorage.setItem(key, JSON.stringify(item));
    },
    get(key) {
        const val = localStorage.getItem(key);
        if (isEmpty(val)) { return ''; }

        const item = JSON.parse(val);
        const self = this;

        let result = '';

        const handle = {
            date() {
                if (new Date() > new Date(item.expires)) {
                    self.clear(key);
                } else {
                    result = item.val;
                }
            },
            number() {
                const ss = (new Date().getTime() - new Date(item.createAt).getTime()) / 1000;
                if (ss > +item.expires) {
                    self.clear(key);
                } else {
                    result = item.val;
                }
            },
            undefined() {
                result = item.val;
            },
        };

        handle[item.type] && handle[item.type]();
        return result;
    },
    clear(key) {
        localStorage.removeItem(key);
    },
};

//
function getUrlParam(url) {
    const result = {};
    if (!isEmpty(url) && url.split('?').length === 2) {
        const query = url.split('?')[1].split('&');
        query.forEach((item) => {
            const arr = item.split('=');
            result[arr[0]] = arr[1]; // eslint-disable-line
        });
    }
}

function setRootSize(maxSize = 75) {
    $(() => {
        let fontSize = window.innerWidth / 10;
        fontSize = fontSize > maxSize ? maxSize : fontSize;
        $('html').css('font-size', fontSize);
    });
}

function autoRootSize() {
    $(window).on('resize', () => setRootSize());
    $(() => setRootSize());
}

export default {
    localStorage: localStorageZ,
    isEmpty,
    getUrlParam,
    autoRootSize,
};
