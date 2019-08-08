const Mock = require('mockjs'); // eslint-disable-line

function token(req, res) {
    console.log(req);
    const admin = req.body.name === 'admin' && req.body.password === '123456';
    const editor = req.body.name === 'editor' && req.body.password === '123456';
    const code = (admin || editor) ? 200 : 300;
    const message = code === 200 ? '' : '用户名密码错误';
    const data = Mock.mock({
        access_token: 'Bearer-@guid',
        refresh_token: 'Bearer-@guid',
    });
    res.json({ code, data, message });
}

module.exports = {
    token,
};
