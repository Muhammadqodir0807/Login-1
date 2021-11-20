import {SET_BURGER} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constans";


export function setBurger(data) {
    return{
        type:SET_BURGER,
        payload:data
    }
}

export const getBurger = () => (dispatch) => {
    axios.get(API_PATH + "api/Allcategory/")
        .then((res) => {
            dispatch(setBurger({menus:res.data.data}))
        })
}

export const getBurgerId = (id) => {
    return function (dispatch , getState) {
        axios.get(API_PATH + "api/ProductsByCategoryId/" + id)
            .then((res) => {
                dispatch(setBurger({menusId:res.data}))
            })
    }
}