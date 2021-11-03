import {combineReducers, createStore} from "redux";
import userReducer from "./userReducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    userPage: userReducer,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;

export default store;