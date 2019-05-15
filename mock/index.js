const guest = require('./modules/guest');
const member = require('./modules/member');

module.exports = (app) => {
    app.get('/mock/guest/', (req, res) => guest.list(res));

    app.get('/mock/member/strategy', (req, res) => member.strategy(res));
};
