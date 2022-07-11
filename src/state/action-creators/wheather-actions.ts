import { Dispatch } from "redux";
import { WheatherActionType } from "../action-types"
import {Action} from "../actions/index"
import wheatherService from "../../shared-services/wheather-service";

export const getWheather = (url:string) => {
    console.log("called")
    return async (dispatch: Dispatch<Action>) => {
        await wheatherService.getWheatherData(url).subscribe((res) => {
            dispatch({
                type: WheatherActionType.GET_WHEATHER,
                data:res
            });
        });
    }
}