import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { customerReducer } from "./customerReduser";
import { thunk } from "redux-thunk";

export const store = createStore(customerReducer, applyMiddleware(thunk))