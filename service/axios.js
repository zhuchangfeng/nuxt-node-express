export default function ({ $axios, redirect }) {
    $axios.defaults.timeout = 50000;
    $axios.setHeader('content-type', 'application/json');
    $axios.setHeader('content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    $axios.onRequest(config => {
        // 在发送请求之前将参数转码在ie中会出现参数被编码的情况，这边做统一处理  
        config.data = decodeURIComponent(config.data);
        console.log('Making request to ' + config.url)
        return config;
    })
    $axios.onResponse(response => {
        const code = parseInt(response.data && response.data.errcode)
        switch (code) {
            // 用户未登录       
            case 500:
                console.log("500");
                break;
        }
        return response;
    })
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
    $axios.onRequestError(error => {
        return Promise.reject(error);
    })
    $axios.onResponseError(error => {
        return Promise.reject(error);
    });
}
