import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/ContactData/ContactData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends Component {

    cancelHandler = () => {
        this.props.history.goBack();
    }

    continueHandler = () => {
        this.props.history.push(this.props.match.url + '/contact');
    }

    render () {
        console.log('Ingredients in Checkout', this.props.ingrs);
        return (
            <div>
                <CheckoutSummary 
                ingredients= {this.props.ingrs}
                cancel={this.cancelHandler} 
                continue={this.continueHandler}/>
                <Route path={this.props.match.url + '/contact'} component={ContactData}/>
            </div> 
        );
    }
}

const mapStateToProps = state => {
    return {
        ingrs : state.burgerBuilder.ingredients
    }
}

export default connect(mapStateToProps)(Checkout)