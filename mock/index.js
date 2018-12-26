const Mock = require('mockjs');

module.exports = app => {
    app.get('/mock/list/', (req, res) => {
        const data = Mock.mock({
            'total': 20,
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|10-20': [{
                'id|+1': 1,
                'name': '@cname',
                'title': '@ctitle(15, 20)',
                'status': '@pick(["审核", "预申请", "转正", "正式", "已取消"])',
                'date': '@date',
                'price': '@float(-100000000, 100000000, 6, 6)'
            }]
        });
        res.json({code: 200, data});
    });
};