import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";

export default combineReducers({
    //takes in object of all my reducers e.g state: reducer
    log: logReducer,
    tech: techReducer

});