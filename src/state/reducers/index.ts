import {combineReducers} from "redux";
import bankReducer from "./bankReducer"
import wheatherReducer from "./wheatherReducer"

const reducers = combineReducers({
    bank: bankReducer,
    wheatherData:wheatherReducer
});

export default reducers;
export type State = ReturnType<typeof reducers>