import React, {Fragment} from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls =[
    {label: 'Cheese', type: 'cheese'},
    {label: 'PotatoPatty', type: 'potatopatty'},
    {label: 'SoyPatty', type: 'soypatty'},
    {label: 'Veggies', type: 'veggies'},
];

const BuildControls = props => controls.map((ctrl) =>
<BuildControl label={ctrl.label} key={ctrl.label}/>) 
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