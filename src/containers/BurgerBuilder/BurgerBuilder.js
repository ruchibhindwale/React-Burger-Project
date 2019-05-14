import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import ingredients from '../../data/constants';

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
       checkedOut : false 
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

    render(){
        const disabledInfo = {};

        [...this.state.ingredients].forEach((element) => {
            disabledInfo[element.name] = element.quantity <= 0;
        })

        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls disabledInfo={disabledInfo} ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler}/>
            </Fragment>
        );
    }
}

export default BurgerBuilder;