import C from '../actions/types';

const initiaUsuarioInfo = {
    isPending: false,
    isLogin: false,
    token: '',
    error: '',
};

export const loginUsuario = (state = initiaUsuarioInfo, action) => {
    switch(action.type){
        case C.LOGIN_USUARIO_PENDING: 
            return {
                ...state,
                isPending: true
            }
        case C.LOGIN_USUARIO_SUCCESS: 
            return {
                ...state,
                isPending: false,
                isLogin: true,
                token: action.payload
            }
        case C.LOGIN_USUARIO_FAILED: 
            return {
                ...state,
                isPending: false,
                isLogin: false,
                error: action.payload
            }
        default: 
            return state
    }
}