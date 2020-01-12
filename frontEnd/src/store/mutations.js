export default {
    addItem(state, payload) {
        state.globalState.push(payload);
        return state;
    },
    clearItem(state, payload) {
        state.globalState.splice(payload.index, 1);
        return state;
    },
    updateItem(state, payload){

    },
};
