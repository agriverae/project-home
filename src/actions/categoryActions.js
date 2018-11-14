import C from './types';
import axios from "axios";
import api from "../config/apiconfig";

export const fetchAllCategories = () => dispatch => {
    return axios.get(`${api}/categories`)
    .then(categories => 
        {
            dispatch({
                type: C.FETCH_ALL_CATEGORIES,
                payload: categories.data
            });
        }
    );
}