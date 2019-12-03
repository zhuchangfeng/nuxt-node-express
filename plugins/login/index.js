import Vue from 'vue'
import loginBox from './login.vue'
//传值
const merge = ($data, option) => {
    for (let prop in option) {
        if ($data.hasOwnProperty(prop)) {
            $data[prop] = option[prop]
        }
    }
}
const viewConstructor = Vue.extend(loginBox);
const showLogin = (option = {}) => {
    let initComponent = new viewConstructor();
    initComponent.$mount();
    merge(initComponent.$data, option);
    document.querySelector(option.container || 'body').appendChild(initComponent.$el);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
const hideLogin = () => {
    var viewtArr = document.querySelectorAll('.login');
    for (var i = 0; i < viewtArr.length; i++) {
        viewtArr[i].parentNode.removeChild(viewtArr[i]);
    }
    document.getElementsByTagName("body")[0].style.overflow = "initial";
}

const install = function (Vue) {
    Vue.prototype.$showLogin = showLogin;
    Vue.prototype.$hideLogin = hideLogin;
}
export default install