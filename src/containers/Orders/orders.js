import React,  { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class orders extends Component {

    componentDidMount (){
        this.props.onFetchOrders();
    }

    render () {
        let orders = <h1> No orders </h1>
        if(this.props.order){
            orders = this.props.orders.map((order) => {
                return <div>{order.id}</div>
            })
        }
        return <div>{orders}</div>
    }
}

const mapStateToProps = state => {
    return {
        orders : state.order.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders : () => {dispatch(actions.fetchOrders())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(orders);