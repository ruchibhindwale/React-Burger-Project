import React, {Fragment} from 'react';
import Button from '../../UI/Button/Button';

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
            <p> Continue to Checkout ?</p>
            <Button clicked={props.purchaseCancelled} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType='Success'>CONTINUE</Button>
        </Fragment>
    )
}

export default OrderSummary;