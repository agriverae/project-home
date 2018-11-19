import C from './types';
import axios from "axios";
import api from "../config/apiconfig";

export const requestRecipesSearch = (recipeName) => dispatch => {
    dispatch({type: C.SEARCH_RECIPES_PENDING});
    axios.get(`${api}/recipes?recipeName_like=${recipeName}`)
        .then(recipesFound => {
            dispatch({
                type: C.SEARCH_RECIPES_SUCCESS,
                payload: recipesFound.data
            })
        })
        .catch(error => { 
            dispatch({
                type: C.SEARCH_RECIPES_FAILED,
                payload: error.data
            })
        })
}

export const requestRecipes = () => dispatch => {
    dispatch({type: C.RECIPES_PENDING});
    axios.get(`${api}/recipes`)
    .then( recipes => 
        {
            dispatch({
                type: C.RECIPES_SUCCESS,
                payload: recipes.data
            });
        })
    .catch( error =>
        {
            dispatch({
                type: C.RECIPES_FAILED,
                payload: error.data
            })
        })
}