import C from '../actions/types';

const initialRecipeSearch = {
    isPending: false,
    recipesFound: [],
    error: '',
};

export const requestRecipesSearch = (state = initialRecipeSearch, action ) => {
    switch(action.type) {
        case C.SEARCH_RECIPES_PENDING:
            return {
                ...state,
                isPending: true
            }
        case C.SEARCH_RECIPES_SUCCESS:
            return {
                ...state,
                isPending: false,
                recipesFound: action.payload
            }
        case C.SEARCH_RECIPES_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const initialStateRecipe = {
    isPending: false,
    isPendingToAdd: false,
    isPendingToUpdate: false,
    isPendingToDelete: false,
    recipes: [],
    error: '',
};

export const requestRecipes = (state = initialStateRecipe, action) => {
    switch(action.type){
        case C.RECIPES_PENDING:
            return {
                ...state,
                isPending: true
            }
        case C.RECIPES_SUCCESS:
            return {
                ...state,
                isPending: false,
                recipes: action.payload
            }
        case C.RECIPES_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case C.ADDING_RECIPE_PENDING: 
            return {
                ...state,
                isPendingToAdd: true,
            }
        case C.ADDING_RECIPE_SUCCESS:
            return {
                ...state,
                isPendingToAdd: false,
                recipes:[
                    ...state.recipes,
                    action.payload
                ]
            }
        case C.ADDING_RECIPE_FAILED:
            return {
                ...state,
                isPendingToAdd: false,
                error: action.payload
            }
        case C.UPDATE_RECIPE_PENDING:
            return {
                ...state,
                isPendingToUpdate: true
            }
        case C.UPDATE_RECIPE_SUCCESS:
            return {
                ...state,
                isPendingToUpdate: false,
                recipes: [
                    ...state.recipes.filter(recipe => recipe.id !== action.payload.id ),
                    action.payload
                ]
            }
        case C.UPDATE_RECIPE_FAILED:
            return {
                ...state,
                isPendingToUpdate: false,
                error: action.payload
            }
        case C.DELETE_RECIPE_PENDING:
            return {
                ...state,
                isPendingToDelete: true
            }
        case C.DELETE_RECIPE_SUCCESS:
            return {
                ...state,
                isPendingToDelete: false,
                recipes: [
                    ...state.recipes.filter(recipe => recipe.id !== action.payload ),
                ]
            }
        case C.DELETE_RECIPE_FAILED:
            return {
                ...state,
                isPendingToDelete: false,
                error: action.payload
            }
        default:
            return state;
    }
}   