import { combineReducers } from 'redux';
import { requestRecipes, requestRecipesSearch} from "./recipeReducer";
import {requestCategories} from "./categorieReducer";

export default combineReducers({
    requestRecipes,
    requestRecipesSearch,
    requestCategories,
});