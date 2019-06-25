import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import ingredients from '../../data/constants';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';

class BurgerBuilder extends Component{
    state = { 
       inCheckoutProcess : false,
       checkedOut: false
    }

    componentDidMount () {
        this.props.initializeIngredients();
    }

    checkedOutHandler = () => {
        this.setState({
            inCheckoutProcess: true
        });

        this.props.toggleBackdrop(true);
    }

    purchaseContinueHandler = () => {
        this.setState({checkedOut : true});
        const order = {
            ingredients: this.props.ingrs,
            price: this.props.price,
            customer: {
                name: 'Jane',
                address: {
                    street: 'Test Street',
                    zipCode: '3345',
                    country: 'India'
                },
                email: 'test@gmail.com'
            },
            deliveryMethod: 'fastest'
            
        };
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({checkedOut : false, inCheckoutProcess: false});
        })
        .catch(error => {
            this.setState({checkedOut : true, inCheckoutProcess: false});
        })
    }

    purchaseCancelHandler = () => {
        console.log('Purchase Cancel  Handler');
        this.setState({
            inCheckoutProcess: false
        });
        this.props.toggleBackdrop(false);
    }

    render(){
        console.log('BurgerBuilder props', this.props);
        let disabledInfo = {};
        let burger = null;
        
        if (this.props.ingrs) {
            [...this.props.ingrs].forEach((element) => {
                disabledInfo[element.name] = element.quantity <= 0;
            })
        }

        let orderSummary =  <OrderSummary 
                                purchaseCancelled={this.purchaseCancelHandler}
                                purchaseContinued={this.purchaseContinueHandler}/>
        if(this.state.checkedOut){
            orderSummary = <Spinner />
        }

        burger = this.props.error || !this.props.ingrs ? '<p>No ingredients found</p>' : (
            <Fragment>
                <Modal show={this.state.inCheckoutProcess}>
                    {orderSummary}
                </Modal> 
                <Burger ingredients={this.props.ingrs}/>
                <BuildControls disabledInfo={disabledInfo} 
                    ingredientAdded={this.props.onAddIngredient} 
                    ingredientRemoved={this.props.onRemoveIngredient}
                    totalPrice={this.props.price}
                    checkedOut={this.checkedOutHandler}
                    inCheckoutProcess={this.state.inCheckoutProcess}/>
            </Fragment>
        );

        return (<div>{ burger }</div>);
    }
}

const mapStateToProps = state => {
    return {
        ingrs : state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient : (ingName) => dispatch(actions.addIngredient(ingName)),
        onRemoveIngredient : (ingName) => dispatch(actions.removeIngredient(ingName)),
        initializeIngredients : () => dispatch(actions.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);