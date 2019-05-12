import React, { Fragment } from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
    let transformedIngredients = [], ingredientsArrSum=0; 
    transformedIngredients = props.ingredients.map((element, index) => {
        let ingrArr = [];
        for(let i=0; i<element.quantity; i++){
            ingrArr.push(<BurgerIngredient type={element.name}/>);
        }
        return ingrArr;
    })

    ingredientsArrSum = transformedIngredients.reduce((acc, currentVal) => {
        return acc + currentVal.length
    }, 0)

    /*const transformedIngredients = Object.keys(props.ingredients).map((ingr)=>{
        return [...Array(props.ingredients[ingr])].map((_, index) => {
            return <BurgerIngredient type={ingr}/>
        })
    });*/

    if(ingredientsArrSum == 0 ){
        transformedIngredients = <p>Please start adding ingredients</p>;
    }

    return (
    <div className={classes.Burger}>
        <BurgerIngredient type="BreadTop"/>
            {transformedIngredients}
        <BurgerIngredient type="BreadBottom"/>
    </div>
    );
}

export default Burger;