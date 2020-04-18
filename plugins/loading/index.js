import loadingBox from './loading.vue';
const merge = ($data, option) => {
    for (const prop in option) {
        if ($data.hasOwnProperty(prop)) {
            $data[prop] = option[prop]
        }
    }
}
export default (Vue) => {
    const loadingConstructor = Vue.extend(loadingBox);
    let initComponent = new loadingConstructor().$mount();
    Vue.directive("loading", {
        // bind声明周期, 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
        bind(el, binding, vnode, oldVnode) {
            const { value } = binding;
            let isLoading = typeof(value) == "undefined" ? true : !!value;
            if (isLoading) {
                el.style.position = 'relative';
                el.appendChild(initComponent.$el)
            }
        },
        // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
        inserted(el, binding, vnode, oldVnode) {},
        // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
        update(el, binding, vnode, oldVnode) {},
        // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
        componentUpdated(el, binding, vnode, oldVnode) {
            const { value } = binding;
            merge(initComponent.$data, { isLoading: value });
        },
        unbind(el, binding, vnode, oldVnode) {}
    })
}