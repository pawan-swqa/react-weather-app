import { Dispatch } from "redux";
import { BankActionType } from "../action-types"
import {Action} from "../actions/index"

export const depositMoney = (amount:number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: BankActionType.DEPOSIT,
            payload:amount
        });
    }
}

export const withdrawMoney = (amount:number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: BankActionType.WITHDRAW,
            payload:amount
        });
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: BankActionType.BANKRUPT,
        });
    }
}