import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import { HYDRATE } from "next-redux-wrapper";


const allReducers = combineReducers({
    sampleData: sampleReducer
});

const rootReducer = (state = {}, action) => {
    if (action.type === HYDRATE) {
        const nextState = { ...state, ...action.payload };
        return { ...nextState };
    } else {
        return allReducers(state, action);
    }
};

export default rootReducer;
