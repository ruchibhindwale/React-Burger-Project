import React, { Fragment } from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
    const transformedIngredients = Object.keys(props.ingredients).map(()=>{

    });
    return (
    <div>
    <div className={classes.lollipop}>
        <div className={classes.lollipopCir}></div>
        <div className={classes.lollipopStick}></div>
    </div>
    <div className={classes.fruitella}><span>Fruitella</span></div>
    <div className={classes.icecream}>
        <div className={classes.top}></div>
        <div className={classes.cone}></div>
    </div>
    <div className={classes.chocolate}>Chocolate</div>
    </div>
    );
}

export default Burger;