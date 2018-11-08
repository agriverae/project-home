import C from './types';
import axios from "axios";

var hostname = window.location.hostname;

var hostinfo = 'http://' + hostname + ':' + 5000;

export const fetchRecipes = () => dispatch => {
    axios.get(hostinfo+'/recipes')
    .then(recipes => 
        {
            return dispatch({
            type: C.FETCH_RECIPES,
            payload: recipes.data
            });
        }
    );
}