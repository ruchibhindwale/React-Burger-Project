import * as actionTypes from '../actions/actionTypes';

const initialState = {
    checkedOut: false,
    orders: [],
    fetchOrderError: false
}

const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ORDER_START:
            return {
                ...state,
                checkedOut: true
            }
        case actionTypes.ORDER_SUCCESS:
            console.log('Order Success');
            return {
                ...state,
                order: action.order,
                checkedOut: false
            }
        case actionTypes.ORDER_FAILED:
            return {
                ...state,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                fetchOrderError: true
            }   
    }   
    return state;
}

export default orderReducer;