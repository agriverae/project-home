import { combineReducers } from 'redux';
import { requestRecipes, requestRecipesSearch} from "./recipeReducer";
import categorieReducer from "./categorieReducer";

export default combineReducers({
    requestRecipes,
    requestRecipesSearch,
    categories: categorieReducer,
});