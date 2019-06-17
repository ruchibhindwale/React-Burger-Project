import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends Component {

    state = {
        ingredients: [
            {name: 'Cheese', quantity: 2},
            {name: 'PotatoPatty', quantity:2},
            {name: 'SoyPatty', quantity: 0},
            {name: 'Veggies', quantity: 1}
        ]
    }

    componentDidMount = () => {
        this.setState({ingredients : this.props.location.state.ingredients});
    }

    cancelHandler = () => {
        this.props.history.goBack();
    }

    continueHandler = () => {
        this.props.history.push(this.props.match.url + '/contact');
    }

    render () {
        return (
            <div>
                <CheckoutSummary 
                ingredients= {this.state.ingredients}
                cancel={this.cancelHandler} 
                continue={this.continueHandler}/>
                <Route path={this.props.match.url + '/contact'} render={() => <ContactData ingredients={this.state.ingredients}/>}/>
            </div> 
        );
    }
}

export default Checkout