const Mock = require('mockjs'); // eslint-disable-line
const helper = require('../helper/helper');

function strategy(res) {
    const data = Mock.mock({
        name: '@cname',
        type: '@pick(["宾客", "VIP"])',
        portrait: '',
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|3-5': [{
            'id|+1': 1,
            name: '@ctitle(5, 10)',
            datetime: '@datetime',
        }],
    });
    helper.sendSuccess(res, data);
}

module.exports = {
    strategy,
};
