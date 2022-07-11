import {BankActionType , WheatherActionType} from "../action-types/index"

interface DepositAction {
    type: BankActionType.DEPOSIT
    payload:number
}
interface WithdrawAction {
    type: BankActionType.WITHDRAW
    payload:number
}
interface BankruptAction {
    type: BankActionType.BANKRUPT
}
interface WheatherAction {
    type: WheatherActionType.GET_WHEATHER,
    data:any
}
export type Action = DepositAction | WithdrawAction | BankruptAction | WheatherAction