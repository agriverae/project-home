import C from './types';
import axios from 'axios';
import api from "../config/apiconfig";

export const userLogin = (user) => dispatch => {
    dispatch({type: C.LOGIN_USUARIO_PENDING});
    axios.post(`${api}/login`, user)
        .then(userInfo => {
            dispatch({
                type: C.LOGIN_USUARIO_SUCCESS,
                payload: userInfo.data.access_token
            });
        })
        .catch(error => { 
            dispatch({
                type: C.LOGIN_USUARIO_SUCCESS,
                payload: error.data
            });
        })
}

export const userLogout = () => dispatch => {
    dispatch({type: C.LOGOUT});
}