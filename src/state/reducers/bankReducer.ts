import { BankActionType } from "../action-types";
import {Action} from "../actions/index"
const initialState = 0;

const reducer = (state:number = initialState , action:Action) => {
    switch (action.type) {
        case BankActionType.DEPOSIT:
            return state + action.payload;
        case BankActionType.WITHDRAW:
            return state - action.payload;
        case BankActionType.BANKRUPT:
            return 0;
        default:
            return state
    }
}

export default reducer