import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingName) => { 
    return {
        type: actionTypes.ADD_INGREDIENT,
        name:ingName
    } 
}

export const removeIngredient = (ingName) => { 
    return {
        type : actionTypes.REMOVE_INGREDIENT,
        name: ingName
    }
}

const setIngredients = (ingrs) => {
    return {
        type : actionTypes.SET_INGREDIENTS,
        ingredients: ingrs
    }
}

const fetchIngredientsFailed = (error) => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED,
        error: error
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then((response) => {
                console.log('axios, then');
                const ingrs =  [{name: 'Cheese', quantity: 0},
                              {name: 'PotatoPatty', quantity:0},
                              {name: 'SoyPatty', quantity: 0},
                              {name: 'Veggies', quantity: 0}]
                dispatch(setIngredients(ingrs));
            })
            .catch(error => {
                console.log('axios, catch');
                dispatch(fetchIngredientsFailed(error))
            })
    }
}