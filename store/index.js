const state = () => ({
    counter: 0
});

const getters = {
    getCounter(state) {
        return state.counter;
    }
}

const mutations = {
    increment(state) {
        state.counter++
    }
}

const actions = {
    // 异步方法
    actionCounter(context) {
        // 异步改变对话框的状态
        context.commit(increment)
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}