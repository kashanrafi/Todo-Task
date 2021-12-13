import { createStore } from "redux";

let initialState = {
    listData: []
}
function transactionReducer(state = initialState, action){
    state = {listData:[...state.listData]};
    if (action.type === "ADD-LIST") {
        
     state.listData.push(action.payload);
     
    }
    else if (action.type === "DEL-LIST") {
        state.listData = state.listData.filter(data => data.id !== action.payload);
        
        // state.transactions.splice(action.payload, 1);
    }
    return state;
}
let store = createStore(transactionReducer);
export default store;