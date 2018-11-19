import C from './types';
import axios from "axios";
import api from "../config/apiconfig";

export const requestCategories = () => dispatch => {
    dispatch({type: C.CATEGORIES_PENDING})
    axios.get(`${api}/categories`)
        .then(categories => {
                dispatch({
                    type: C.CATEGORIES_SUCCESS,
                    payload: categories.data
                });
            })
        .catch(error => {
            dispatch({
                type: C.CATEGORIES_FAILED,
                payload: error.data
            })
        });
}