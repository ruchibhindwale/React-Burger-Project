import React from 'react';
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types';

const BurgerIngredient = props => <div className={classes[props.type]}/>;

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;