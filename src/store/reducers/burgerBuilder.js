import * as actions from '../actions/actionTypes';
import ingredients from '../../data/constants';

const initialState = {
    ingredients: null,
    totalPrice: 15
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.ADD_INGREDIENT:
            const updatedPrice = ingredients.find(ingr => ingr.type == action.name).price;
            const updatedIngredients = [...state.ingredients];
            updatedIngredients.map(element => {
                if(element.name === action.name){
                    element.quantity++;
                    return element;
                }
            })

            return {
                ingredients : updatedIngredients,
                totalPrice : state.totalPrice + updatedPrice
            }
        case actions.REMOVE_INGREDIENT:
            const reducedPrice = ingredients.find(ingr => ingr.type == action.name).price;
            const reducedIngredients = [...state.ingredients];
            reducedIngredients.map(element => {
                if(element.name === action.name){
                    if(element.quantity > 0) {
                        element.quantity--;
                    } 
                    return element;
                }
            })
    
            return {
                ingredients : reducedIngredients,
                totalPrice : state.totalPrice - reducedPrice
            }
    case actions.SET_INGREDIENTS : 
    console.log('IN SET INGREDIENTS');
        return {
            ...state,
            ingredients : action.ingredients,
            error: false
        }
    case actions.FETCH_INGREDIENT_FAILED : 
        return {
            ...state,
            error: true
        
        }
    }
    return state;
}; 

export default reducer;