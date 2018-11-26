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

export const addRecipe = (recipe) => dispatch => {
    dispatch({type: C.ADDING_RECIPE_PENDING});
    delete recipe.id;
    axios.post(`${api}/recipes`, recipe)
        .then(result => {
            dispatch({
                type: C.ADDING_RECIPE_SUCCESS,
                payload: result.data
            })
        })
        .catch(error => {
            dispatch({
                type: C.ADDING_RECIPE_FAILED,
                payload: error.data
            })
        })
}

export const updateRecipe = (recipe) => dispatch => {
    dispatch({type: C.UPDATE_RECIPE_PENDING});
    const id = recipe.id;
    axios.patch(`${api}/recipes/${id}`, recipe)
        .then(result => {
            dispatch({
                type: C.UPDATE_RECIPE_SUCCESS,
                payload: result.data
            })
        })
        .catch(error => {
            dispatch({
                type: C.UPDATE_RECIPE_FAILED,
                payload: error.data
            })
        })
}

export const deleteRecipe = (recipe) => dispatch => {
    dispatch({type: C.DELETE_RECIPE_PENDING});
    const id = recipe.id;
    axios.delete(`${api}/recipes/${id}`)
        .then(result => {
            dispatch({
                type: C.DELETE_RECIPE_SUCCESS,
                payload: id
            })
        })
        .catch(error => {
            dispatch({
                type: C.DELETE_RECIPE_FAILED,
                payload: error.data
            })
        })
}