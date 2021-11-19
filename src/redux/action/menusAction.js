import {UPDATE_STATE} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constans";

export function updateState(data) {
    return{
        type:UPDATE_STATE,
        payload:data
    }
}

export function saveMenu(event, errors, values) {
    return function (dispatch) {
        axios.post(API_PATH + "menu", values)
            .then((res) => {
            console.log(res)
        })
    }
}