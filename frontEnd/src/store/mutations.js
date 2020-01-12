export default {
    addItem(state, payload) {
        Object.keys(payload).forEach((item)=>{
            if(state.globalState[item]){
                state.globalState[item]=payload[item]
            } else {
                state.globalState[item]=payload[item]
            }
        })
        return state;
    },
    clearItem(state, payload) {
        state.globalState.splice(payload.index, 1);
        return state;
    },
    updateItem(state, payload){

    },
};
