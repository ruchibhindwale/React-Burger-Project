import React, {Fragment} from 'react';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';
import { pipelineTopicExpression } from '@babel/types';

const OrderSummary = props => {
    return (
        <Fragment>
            <h3> Your Order </h3>
            <p> A delicious burger wih the following ingredients : </p>
            <ul>
                {props.ingredients.map((ingr) => {
                    return (
                        <li key={ingr.name}>
                            <span style={{textTransform: 'capitalize'}}>{ingr.name}</span>: {ingr.quantity}
                        </li>
                    )
                })}
            </ul>
            <p> <strong> Total Price : {props.price} </strong> </p>
            <p> Continue to Checkout ?</p>
            <Button clicked={props.purchaseCancelled} btnType='Danger'>CANCEL</Button>
            <Link to={{
                pathname : '/checkout',
                state: {ingredients: props.ingredients, 
                        price: props.price
                    }
            }}><Button btnType='Success'>CONTINUE</Button></Link>
        </Fragment>
    )
}

export default OrderSummary;