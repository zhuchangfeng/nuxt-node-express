const state = () => ({
    hoverIndex: null
});

const getters = {
    getIndex(state) {
        return state.hoverIndex;
    }
}

const mutations = {
    CHANGE_INDEX(state, key) {
        state.hoverIndex = key;
    },
}

const actions = {
    // 异步方法
    actionIndex(context, key) {
        // 异步改变对话框的状态
        context.commit("CHANGE_INDEX", key)
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}