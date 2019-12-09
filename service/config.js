const http = require('http')
const https = require('https')
const config = require('../nuxt.config.js');
module.exports = {
    baseURL: process.browser ? '/' : (process.env._AXIOS_BASE_URL_ || `http://${config.server.host}:${config.server.port}`),
    // `baseURL` 将自动加在 `url` 前面  
    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)  
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json;application/x-www-form-urlencoded;charset=utf-8',
    },
    // 请求头设置  
    withCredentials: true,
    // 响应的数据格式 json / blob /document /arraybuffer / text / stream
    responseType: 'json', // 默认的
    // 用于node.js
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true }),
}