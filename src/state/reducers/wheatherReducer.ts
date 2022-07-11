import { WheatherActionType } from "../action-types";
import {Action} from "../actions/index"

const reducer = (state:any = {} , action:Action) => {
    switch (action.type) {
        case WheatherActionType.GET_WHEATHER:
            return {wheatherData:action.data};
        default:
            return state
    }
}

export default reducer