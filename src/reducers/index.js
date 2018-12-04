import { combineReducers } from 'redux';
import { requestRecipes, requestRecipesSearch} from "./recipeReducer";
import {requestCategories} from "./categorieReducer";
import { loginUsuario } from "./usuarioReducer"

export default combineReducers({
    requestRecipes,
    requestRecipesSearch,
    requestCategories,
    loginUsuario,
});