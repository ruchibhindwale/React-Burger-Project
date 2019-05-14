import React, {Fragment} from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
import ingredients, {MinPrice} from '../../../data/constants'

const BuildControls = props => (
    <div className={classes.BuildControls}>
        <p> Current Price: <strong>{props.totalPrice}</strong> </p>
        {
            ingredients.map((ctrl) =>
                <BuildControl ingrAdded={() => props.ingredientAdded(ctrl.type)} 
                    ingrRemoved={() => props.ingredientRemoved(ctrl.type)} 
                    label={ctrl.label} 
                    key={ctrl.label}
                    disabled={props.disabledInfo[ctrl.type]}/>) 
        }
        <button className={classes.OrderButton} disabled={props.totalPrice == MinPrice || props.inCheckoutProcess} onClick={props.checkedOut}>ORDER NOW</button>
    </div>
    )

    //console.log(props.availableIngr);

   /* const availableIngrs = props.availableIngr.map((element)=>{
        return (
            <Fragment>
                <div>{element} <span> + </span> <span> - </span></div>  
            </Fragment>
        )
    })
    return <div>{availableIngrs}</div>;*/

     

export default BuildControls;