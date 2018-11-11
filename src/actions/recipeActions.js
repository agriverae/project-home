import C from './types';
import axios from "axios";

var hostname = window.location.hostname;

var hostinfo = 'http://' + hostname + ':' + 5000;

export const fetchAllRecipes = () => dispatch => {
    return axios.get(`${hostinfo}/recipes`)
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
    return axios.get(`${hostinfo}/recipes/${id}`)
    .then(recipe => {
        dispatch({
            type: C.FETCH_RECIPE,
            payload: recipe.data
        })
    })
}