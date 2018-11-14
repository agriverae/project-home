import { combineReducers } from 'redux';
import recipeReducer from "./recipeReducer";
import categorieReducer from "./categorieReducer";

export default combineReducers({
    recipes: recipeReducer,
    categories: categorieReducer,
});