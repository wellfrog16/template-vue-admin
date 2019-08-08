const guest = require('./modules/guest');
const member = require('./modules/member');
const oauth = require('./modules/security/oauth');

module.exports = (app) => {
    app.get('/mock/guest/', (req, res) => guest.list(res));

    app.get('/mock/member/strategy', (req, res) => member.strategy(res));

    app.post('/mock/oauth', (req, res) => oauth.token(req, res));
};
