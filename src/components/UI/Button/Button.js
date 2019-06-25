import React from 'react';
import classes from './Button.css';

const Button = props => (
    <button type={props.type} className={[Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
)

export default Button;