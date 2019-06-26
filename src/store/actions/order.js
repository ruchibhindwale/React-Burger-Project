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

export const fetchOrdersSuccess = (orders) => {
    return {
        type : actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFailure = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrders = () => {
    return dispatch => {
        axios.get('/orders.json')
            .then(res => {
                dispatch(fetchOrdersSuccess(res.data))
            })
            .catch((error) => {
                dispatch(fetchOrdersFailure(error))
            })
    }
}