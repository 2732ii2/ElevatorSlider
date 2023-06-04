import {createStore} from "redux";
import reducer from "./Reducer.js";
var store = createStore(reducer);

export default store;