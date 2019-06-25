import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import classes from './ContactData.css'
import * as actions from '../../store/actions/index';

import axios from 'axios';

class ContactData extends Component {
    state = {
        orderForm :{
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: '',
                validation : {
                    required: true
                },
                valid: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation : {
                    required: true
                },
                valid: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip code'
                },
                value: '',
                validation : {
                    required: true,
                    minLength: 5
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation : {
                    required: true
                },
                valid: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: '',
                validation : {
                    required: true
                },
                valid: false
            },
        }
    }

    orderSubmittedHandler = (event) => {
        event.preventDefault();
        //this.setState({checkedOut : true});
        const formData = {};
        for(let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key];
        }
        const order = {
                ingredients: this.props.ingrs,
                price: this.props.price,
                orderData: formData
            
        };
        /*axios.post('/orders.json', order)
        .then(response => {
            this.setState({checkedOut : false, inCheckoutProcess: false});
            this.props.history.push('/orders');
        })
        .catch(error => {
            this.setState({checkedOut : true, inCheckoutProcess: false});
        })*/
        this.props.onOrderSubmitted(order);
    }

    checkValidity(value, rules){
        let isValid = true;

        if(rules.required) {
            isValid = value.trim !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        updatedElement.value = event.target.value;
        updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation);

        updatedOrderForm[inputIdentifier] = updatedElement;
        this.setState({orderForm : updatedOrderForm})
    }

    render(){
        const formElementsArray = [];
        
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        return (
            <div className={classes.ContactData}>
                {this.props.checkedOut ? <Spinner /> : null}
                <h4>Enter your Contact Data</h4>
                <form onsubmit={this.orderSubmittedHandler}>
                    {
                        formElementsArray.map((formElement) => 
                            <Input elementType={formElement.config.elementType} 
                               elementConfig={formElement.config.elementConfig}
                               value={formElement.config.value}
                               key={formElement.id}
                               invalid={!formElement.config.valid}
                               shouldValidate={formElement.config.validation}
                               changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                        )
                    }
                    <Button type='button' btnType='Success' clicked={this.orderSubmittedHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingrs : state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        checkedOut: state.order.checkedOut
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderSubmitted: (orderData) => dispatch(actions.orderSubmitted(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);