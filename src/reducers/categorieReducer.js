import C from '../actions/types';

const initalStateCategories = {
    isPending : false,
    categories: [],
    error: '',
}

export const requestCategories = (state = initalStateCategories, action) => {
    switch(action.type) {
        case C.CATEGORIES_PENDING:
            return {
                ...state,
                isPending: true
            }
        case C.CATEGORIES_SUCCESS:
            return {
                ...state,
                isPending: true,
                categories: action.payload
            }
        case C.CATEGORIES_FAILED:
            return {
                ...state,
                isPending: true,
                error: action.payload
            }
        default:
            return state;
    }
}
