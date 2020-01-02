var jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const { TOKESECRET } = dotenv.parsed;
module.exports = function(req, res, next) {
    if (req.headers['authorization']) {
        var token = req.headers['authorization'].split(' ')[1]
        var decoded = jwt.decode(token, TOKESECRET, )
            // 如果过期了就重新登录
            // 验证token也需要优化
        console.log(decoded);
        if (token && decoded.exp <= Date.now() / 1000) {
            return res.send({
                code: 401,
                message: "授权已经过期，请重新登陆"
            })
        }
    }
    next();
}