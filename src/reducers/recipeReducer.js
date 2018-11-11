import C from '../actions/types';

const initialState = {
    recipes: [],
    recipeSelected: false,
    recipe: {}
};

export default function (state = initialState, action) {
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
        default:
            return state;
    }
}