import React, { Fragment } from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
    return (
    <div className={classes.Burger}>
        <BurgerIngredient type='BreadTop'/>
        <BurgerIngredient type='Cheese'/>
        <BurgerIngredient type='PotatoPatty'/>
        <BurgerIngredient type='Veggies'/>
        <BurgerIngredient type='BreadBottom'/>
    </div>
    );
}

export default Burger;