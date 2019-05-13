import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
           {name: 'Veggies', quantity: 0}
       ],
       price: 0,
       checkedOut : false 
    }
    
    render(){
        const burgerControls = [];
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls availableIngr={this.state.availableIngrs}/>
            </Fragment>
        );
    }
}

export default BurgerBuilder;