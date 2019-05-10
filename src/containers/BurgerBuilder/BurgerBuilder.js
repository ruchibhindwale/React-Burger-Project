import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    state = { 
       ingredients : {
           'Cheese': 2,
           'PotatoPatty' : 1,
           'Veggies': 1
       },
       price: 0,
       checkedOut : false 
    }
    
    render(){
        const burgerControls = [];
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <div>BurgerBuilder</div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;