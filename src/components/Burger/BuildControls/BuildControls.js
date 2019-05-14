import React, {Fragment} from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
import ingredients from '../../../data/constants'

const BuildControls = props => ingredients.map((ctrl) =>
<BuildControl ingrAdded={() => props.ingredientAdded(ctrl.type)} 
              ingrRemoved={() => props.ingredientRemoved(ctrl.type)} 
              label={ctrl.label} 
              key={ctrl.label}
              disabled={props.disabledInfo[ctrl.type]}/>) 
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