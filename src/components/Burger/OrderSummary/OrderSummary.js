import React, {Fragment} from 'react';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const OrderSummary = (props) => {
    let orderSummary = props.ingrs ? (
        <Fragment>
            <h3> Your Order </h3>
            <p> A delicious burger wih the following ingredients : </p>
            <ul>
                {props.ingrs.map((ingr) => {
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
            <Link to='/checkout'><Button btnType='Success'>CONTINUE</Button></Link>
        </Fragment>
    ) : null
    return <div>{ orderSummary }</div>
}

const mapStateToProps = state => {
    return {
        ingrs : state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice
    }
}

export default connect(mapStateToProps)(OrderSummary);