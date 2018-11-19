import C from '../actions/types';

const initialState = {
    recipes: [],
    recipeSelected: false,
    recipe: {},
    recipesFound: []
};

export const recipes = (state = initialState, action) => {
    switch(action.type){
        case C.FETCH_ALL_RECIPES :
            return {
                ...state,
                recipes: action.payload
            };
        case C.FETCH_RECIPE:
            return {
                ...state,
                recipeSelected: true,
                recipe: action.payload
            }
        case C.SEARCH_RECIPES:
            return {
                ...state,
                recipesFound: action.payload
            }
        default:
            return state;
    }
}

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
        default:
            return state;
    }
}