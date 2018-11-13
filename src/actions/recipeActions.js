import C from './types';
import axios from "axios";
import api from "../config/apiconfig";

export const fetchAllRecipes = () => dispatch => {
    return axios.get(`${api}/recipes`)
    .then(recipes => 
        {
            dispatch({
                type: C.FETCH_ALL_RECIPES,
                payload: recipes.data
            });
        }
    );
}

export const fetchRecipe = (id) => dispatch => {
    return axios.get(`${api}/recipes/${id}`)
            .then(recipe => {
                dispatch({
                    type: C.FETCH_RECIPE,
                    payload: recipe.data
                })
            })
}

export const searchRecipes = (recipeName) => dispatch => {
    return axios.get(`${api}/recipes?recipeName_like=${recipeName}`)
            .then(recipes => {
                dispatch({
                    type: C.SEARCH_RECIPES,
                    payload: recipes.data
                })
            });
}