/**
 * 判断数据类型
 * @param {检查的值:Any} value 
 */
function getType(value) {
    var typer = Object.prototype.toString
    var typeStr = typer.call(value)
    typeStr = typeStr.replace(/.*\s(\w+)\]/g, '$1')
    return typeStr.toLowerCase()
}
/**
 * 判断是否为空
 * @param {检查的值:Any} value 
 */
function isEmpty(value) {
    const type = getType(value);
    switch (type) {
        case 'object':
            return Object.keys(value).length === 0
        case 'array':
            return value.length === 0
        case 'number':
            return !isNaN(value);
        case 'string':
            return value.replace(/\s+/g, "").length === 0;
        default:
            return !!value
    }
}
/**
 * 防抖
 * @param {事件} func 
 * @param {等待时间} wait 
 * @param {是否立即执行} immediate 
 */
export function _debounce(func, wait = 200, immediate = true) {
    let timeout, result;
    // 延迟执行函数
    const later = (context, args) => setTimeout(() => {
        timeout = null; // 倒计时结束
        if (!immediate) {
            // 执行回调
            func.apply(context, args);
            context = args = null;
        }
    }, wait);
    const debounced = (...params) => {
            if (!timeout) {
                timeout = later(this, params);
                if (immediate) {
                    // 立即执行
                    func.apply(this, params);
                }
            } else {
                clearTimeout(timeout);
                // 函数在每个等待时延的结束被调用
                timeout = later(this, params);
            }
        }
        // 提供在外部清空定时器的方法
    debounced.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
    };
    return debounced;
};


/**
 * 节流
 * @param {事件} func 
 * @param {等待时间} wait 
 * @param {禁用第一次首先执行，传递 {leading: false};想禁用最后一次执行，传递 {trailing: false}} options 
 */
export function _throttle(func, wait = 200, options = {}) {
    let timeout, context, args, result;
    let previous = 0;
    const later = () => {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    const throttled = () => {
        const now = +new Date();
        if (!previous && options.leading === false) previous = now;
        //remaining 为距离下次执行 func 的时间
        //remaining > wait，表示客户端系统时间被调整过
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        //remaining 小于等于 0，表示事件触发的间隔时间大于设置的 wait
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                // 清空定时器
                clearTimeout(timeout);
                timeout = null;
            }
            // 重置 previous
            previous = now;
            // 执行函数
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };

    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };

    return throttled;
}

/**
 * 复制文本内容
 * @param {文本内容} text 
 * @param {回调函数} callback 
 */
function setSelectionRange(text = "", callback) {
    let textArea = document.createElement('textarea');
    // text = text + "\n ————————————————\n版权声明：不要用于商业。\n原文链接：" + location.href;
    textArea.style.position = 'fixed';
    textArea.style.zIndex = -1;
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '1em';
    textArea.style.height = '1em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        typeof callback === "function" && callback(true);
    } catch (err) {
        console.log('该浏览器不支持点击复制到剪贴板');
        typeof callback === "function" && callback("error:Browser does not support!");
    }

    document.body.removeChild(textArea);
}
/**
 * 数组去重
 * @param {目标数组:Array} arr 
 */
function uniq(arr) {
    let result = []
    if (getType(arr) == "array") {
        let obj = {}
        for (let i = 0; i < arr.length; i++) {
            const elem = arr[i];
            if (!obj[elem]) {
                result.push(elem)
                obj[elem] = 1
            }
        }
    }
    return result
}
/**
 * 获取url参数
 * @param {url参数名称} name 
 */
function gqs(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2])
    }
    return null
}

/**
 * 获取Cooke
 * @param {cookie名称} name 
 */
function getCookie(name) {
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    var r = document.cookie.match(reg)
    return r ? unescape(r[2]) : null
}

const install = function(Vue) { //通过install方法挂载到Vue原型上去
    Vue.prototype.isEmpty = isEmpty;
    Vue.prototype.getType = getType;
    Vue.prototype._debounce = _debounce;
    Vue.prototype._throttle = _throttle;
    Vue.prototype._inputSelect = setSelectionRange;
    Vue.prototype._uniq = uniq;
    Vue.prototype._gqs = gqs;
    Vue.prototype.getCookie = getCookie;
}
export default install