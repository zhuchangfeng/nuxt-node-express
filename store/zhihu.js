const state = () => ({
    routeInfo: ""
});

const getters = {
    getRouteInfo(state) {
        return state.routeInfo;
    }
}

const mutations = {
    CHANGE_INFO(state, value) {
        state.routeInfo = value;
    }
}

const actions = {
    // 异步方法
    actionCounter(context, key) {
        context.commit("CHANGE_INFO", key)
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}