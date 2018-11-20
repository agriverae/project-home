import C from '../actions/types';

const initalStateCategories = {
    isPending : false,
    isPendingToAdd: false,
    isPendingToUpdate: false,
    isPendingToDelete: false,
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
        case C.ADDING_CATEGORY_PENDING:
            return {
                ...state,
                isPendingToAdd: true
            }
        case C.ADDING_CATEGORY_SUCCESS:
            return {
                ...state,
                isPendingToAdd: false,
                categories: [
                    ...state.categories,
                    action.payload
                ]
            }
        case C.ADDING_CATEGORY_FAILED:
            return {
                ...state,
                isPendingToAdd: false,
                error: action.payload
            }
        case C.UPDATE_CATEGORY_PENDING:
            return {
                ...state,
                isPendingToUpdate: true
            }
        case C.UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                isPendingToUpdate: false,
                categories: [
                    ...state.categories.filter(category => category.id !== action.payload.id ),
                    action.payload
                ]
            }
        case C.UPDATE_CATEGORY_FAILED:
            return {
                ...state,
                isPendingToUpdate: false,
                error: action.payload
            }
        case C.DELETE_CATEGORY_PENDING:
            return {
                ...state,
                isPendingToDelete: true
            }
        case C.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                isPendingToDelete: false,
                categories: [
                    ...state.categories.filter(category => category.id !== action.payload ),
                ]
            }
        case C.DELETE_CATEGORY_FAILED:
            return {
                ...state,
                isPendingToDelete: false,
                error: action.payload
            }
        default:
            return state;
    }
}
