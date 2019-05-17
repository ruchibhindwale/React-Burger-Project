import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import ingredients from '../../data/constants';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

class BurgerBuilder extends Component{
    state = { 
       /*ingredients : {
           'Cheese': 2,
           'PotatoPatty' : 2,
           'Veggies': 3
       },*/
       ingredients: [
           {name: 'Cheese', quantity: 0},
           {name: 'PotatoPatty', quantity:0},
           {name: 'SoyPatty', quantity: 0},
           {name: 'Veggies', quantity: 0}
       ],
       price: 15,
       inCheckoutProcess : false,
       checkedOut: false
    }
    
    addIngredientHandler = (ingrName) => {
        const updatedPrice = ingredients.find(ingr =>ingr.type == ingrName).price;
        
        this.setState((prevState) => {
            const updatedIngredients = [...prevState.ingredients];

            updatedIngredients.forEach((element) => {
            if(element.name === ingrName){
                element.quantity++;
            }
        });
        
        return{
            ingredients: updatedIngredients,
            price: prevState.price + updatedPrice
        }
        });
    }

    removeIngredientHandler = ingrName => {
        const updatedPrice = ingredients.find(ingr =>ingr.type == ingrName).price;
        
        this.setState((prevState) => {
            const updatedIngredients = [...prevState.ingredients];

            updatedIngredients.forEach((element) => {
                if(element.name === ingrName){
                    if(element.quantity <= 0) {
                        return;
                    } else {
                        element.quantity--;
                    }
                }
            });
        
            return {
                ingredients: updatedIngredients,
                price: prevState.price - updatedPrice
            }
        });
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
            ingredients: this.state.ingredients,
            price: this.state.price,
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
        this.setState({
            inCheckoutProcess: false
        });
        this.props.toggleBackdrop(false);
    }

    render(){
        const disabledInfo = {};
        

        [...this.state.ingredients].forEach((element) => {
            disabledInfo[element.name] = element.quantity <= 0;
        })

        let orderSummary =  <OrderSummary 
                                ingredients={this.state.ingredients}
                                purchaseCancelled={this.purchaseCancelHandler}
                                purchaseContinued={this.purchaseContinueHandler}
                                price={this.state.price}/>
        if(this.state.checkedOut){
            orderSummary = <Spinner />
        }

        return (
            <Fragment>
                <Modal show={this.state.inCheckoutProcess}>
                    {orderSummary}
                </Modal> 
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls disabledInfo={disabledInfo} 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    totalPrice={this.state.price}
                    checkedOut={this.checkedOutHandler}
                    inCheckoutProcess={this.state.inCheckoutProcess}/>
            </Fragment>
        );
    }
}

export default BurgerBuilder;