import C from '../actions/types';

const initialState = {
    categories: [],
};

export default function(state = initialState, action) {
    switch(action.type) {
        case C.FETCH_ALL_CATEGORIES: 
            return {
                ...state,
                categories: action.payload 
            };
        default:
            return state;
    }
}