const Mock = require('mockjs'); // eslint-disable-line
const helper = require('../helper/helper');

function list(res) {
    const data = Mock.mock({
        total: '@integer(100, 2000)',
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|10-20': [{
            'id|+1': 1,
            name: '@cname',
            mobile: '@integer(10000000000, 19999999999)',
            type: '@pick(["宾客", "VIP"])',
            from: '@pick(["前台办理", "微信小程序", "自助一体机"])',
            room: '@integer(100, 9999)',
            order: '@integer(100000, 999999)',
            breakfast: '@integer(0, 2)',
            permission: '@boolean(1)',
            valid: '@boolean(1)',
            datetime1: '@datetime',
            datetime2: '@datetime',
        }],
    });
    helper.sendSuccess(res, data);
}

module.exports = {
    list,
};
