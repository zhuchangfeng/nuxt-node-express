import axios from 'axios'; //导入axios模块
import config from './config';
//创建axios
const request = axios.create(config);
//默认请求带参数
console.log(process.server);
const urlPrefix = "/api";
if (process.server) {
    config.baseURL = `http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 3000}`;
    config.withCredentials = true;
}
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// 响应拦截器拦截返回的响应信息 6100状态码为用户未登录
request.interceptors.response.use(
    response => {
        const code = parseInt(response.data && response.data.errcode);
        switch (code) {
            // 用户未登录       
            case 500:
                console.log("500");
                break;
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    });
// 添加请求拦截器
request.interceptors.request.use(function(config) {
        // 在发送请求之前将参数转码在ie中会出现参数被编码的情况，这边做统一处理  
        config.url = urlPrefix + config.url;
        if (config.method === 'post') {
            if (config.headers['Content-Type'] !== 'application/json') {
                config.data = decodeURIComponent(config.data);
                console.log('Making request to ' + config.url)
            } else {
                config.data = config.data;
            }
        }
        return config;
    },
    function(error) {
        // 对请求错误做些什么  
        return Promise.reject(error);
    });
//暴露模块
export default request;