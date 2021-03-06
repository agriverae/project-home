import C from './types';
import axios from "axios";
import api from "../config/apiconfig";

export const requestCategories = () => dispatch => {
    dispatch({type: C.CATEGORIES_PENDING})
    axios.get(`${api}/categories`)
        .then(result => {
                dispatch({
                    type: C.CATEGORIES_SUCCESS,
                    payload: result.data
                });
            })
        .catch(error => {
            dispatch({
                type: C.CATEGORIES_FAILED,
                payload: error.data
            })
        });
}

export const addCategories = (category, token) => dispatch => {
    dispatch({type: C.ADDING_CATEGORY_PENDING});
    delete category.id;
    axios.post(`${api}/categories`, category, {
        headers: { Authorization: "Bearer " + token }
    })
        .then(result => {
            dispatch({
                type: C.ADDING_CATEGORY_SUCCESS,
                payload: result.data
            })
        })
        .catch(error => {
            dispatch({
                type: C.ADDING_CATEGORY_FAILED,
                payload: error.data
            })
        })
}

export const updateCategories = (category, token) => dispatch => {
    dispatch({type: C.UPDATE_CATEGORY_PENDING});
    const id = category.id;
    axios.patch(`${api}/categories/${id}`, category,  {
        headers: { Authorization: "Bearer " + token }
    })
        .then(result => {
            dispatch({
                type: C.UPDATE_CATEGORY_SUCCESS,
                payload: result.data
            })
        })
        .catch(error => {
            dispatch({
                type: C.UPDATE_CATEGORY_FAILED,
                payload: error.data
            })
        })
}

export const deleteCategories = (category, token) => dispatch => {
    dispatch({type: C.DELETE_CATEGORY_PENDING});
    const id = category.id;
    axios.delete(`${api}/categories/${id}`,  {
        headers: { Authorization: "Bearer " + token }
    })
        .then(result => {
            dispatch({
                type: C.DELETE_CATEGORY_SUCCESS,
                payload: id
            })
        })
        .catch(error => {
            dispatch({
                type: C.DELETE_CATEGORY_FAILED,
                payload: error.data
            })
        })
}