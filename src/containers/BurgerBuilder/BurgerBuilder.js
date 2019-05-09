import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    state = { 
       ingredients : [],
       price: 0,
       checkedOut : false 
    }
    
    ingredients = ['Salad', 'Fries', 'Cheese', 'Mustard', 'Ketchup'];

    render(){
        const burgerControls = [];
        return (
            <Fragment>
                <Burger/>
                <div>BurgerBuilder</div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;