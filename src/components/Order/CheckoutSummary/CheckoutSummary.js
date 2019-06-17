import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    console.log('CheckoutSummary', props);
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{width: '300px', height: '100px', margin: 'auto'}} />
            <Burger ingredients={props.ingredients}/>
            <Button btnType='Danger' clicked={props.cancel}>Cancel</Button>
            <Button btnType='Success' clicked={props.continue}>Continue</Button>
        </div>
    );

}

export default checkoutSummary;