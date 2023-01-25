import {legacy_createStore} from "redux"
import { reducer } from "./reducer";
import {
    applyMiddleware,
    compose,
    combineReducers
} from "redux"
import thunk from "redux-thunk"

export const store = legacy_createStore(combineReducers({
   todoManager : reducer 
}),compose(applyMiddleware(thunk)));