import {
    $, moment, _, CryptoJS,
} from '@/utils/cdn';


/**
 * 普通空判断
 *
 * @param {string} val
 * @returns
 */
function isEmpty(val) {
    return val === null || val === '' || val === undefined;
}

// 带有效期的localStorage
const localStorageZ = {
    /**
     * 设置localStorge
     *
     * @param {string} key
     * @param {string} val
     * @param {date | number(秒)} expires
     * @param {boolean} encrypt
     */
    set(key, value, { expires, encrypt } = {}) {
        const type = $.type(expires);
        const createAt = moment().format('YYYY-MM-DD HH:mm:ss');
        const val = encrypt ? CryptoJS.AES.encrypt(value, 'frog').toString() : value;
        const item = { val, type, createAt };
        const handle = {
            date() { item.expires = moment(expires).format('YYYY-MM-DD HH:mm:ss'); },
            number() { item.expires = expires; },
        };

        handle[type] && handle[type]();
        localStorage.setItem(key, JSON.stringify(item));
    },
    /**
     * 获取localStorge
     *
     * @param {string} key
     * @returns
     */
    get(key, encrypt) {
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
        result = encrypt ? CryptoJS.AES.decrypt(result, 'frog').toString(CryptoJS.enc.Utf8) : result;
        return result;
    },
    /**
     * 删除指定的localStorge
     *
     * @param {string} key
     */
    clear(key) {
        localStorage.removeItem(key);
    },
};

/**
 * 浏览器query数据json化
 *
 * @param {string} url
 */
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

/**
 * 设置html根字体大小
 *
 * @param {number} [maxSize=75]
 */
function setRootSize(maxSize = 75) {
    $(() => {
        let fontSize = window.innerWidth / 10;
        fontSize = fontSize > maxSize ? maxSize : fontSize;
        $('html').css('font-size', fontSize);
    });
}

/**
 * window的resize事件
 *
 */
function autoRootSize() {
    $(window).on('resize', () => setRootSize());
    $(() => setRootSize());
}

/**
 * 生成4位数字的canvas
 *
 * @param {HTMLDom} canvas
 * @returns
 */
function createCode(canvas) {
    const ctx = canvas.getContext('2d');
    const chars = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k',
        'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        1, 2, 3, 4, 5, 6, 7, 8, 9,
    ];

    let code = '';
    ctx.clearRect(0, 0, 80, 39);
    for (let i = 0; i < 4; i += 1) {
        const char = chars[_.random(56)];
        code += char;
        ctx.font = `${_.random(20, 25)}px SimHei`; // 设置字体随机大小
        ctx.fillStyle = '#D3D7F7';
        ctx.fillStyle = '#333';
        ctx.textBaseline = 'middle';
        ctx.shadowOffsetX = _.random(-3, 3);
        ctx.shadowOffsetY = _.random(-3, 3);
        ctx.shadowBlur = _.random(-3, 3);
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        const x = 80 / 5 * (i + 1);
        const y = 39 / 2;
        const deg = _.random(-25, 25);

        // 设置旋转角度和坐标原点
        ctx.translate(x, y);
        ctx.rotate(deg * Math.PI / 180);
        ctx.fillText(char, 0, 0);

        // 恢复旋转角度和坐标原点
        ctx.rotate(-deg * Math.PI / 180);
        ctx.translate(-x, -y);
    }

    return code;
}

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
    // 数值判断
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

export default {
    localStorage: localStorageZ,
    isEmpty,
    getUrlParam,
    autoRootSize,
    createCode,
    currency,
};
