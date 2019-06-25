import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-orders';

const orderSuccess = (orderData) => {
    return {
        type: actionTypes.ORDER_SUCCESS,
        order: orderData
    }
}

const orderFailure = (error) => {
    return {
        type: actionTypes.ORDER_FAILED,
        error: error
    }
}

const orderStart = () => {
    return {
        type: actionTypes.ORDER_START
    }
}


export const orderSubmitted = (orderData) => {
    return dispatch => {
        dispatch(orderStart());
        axios.post('/orders.json', orderData)
            .then( response => dispatch(orderSuccess(response.data)))
            .catch( err => dispatch(orderFailure(err)))
        }
    }