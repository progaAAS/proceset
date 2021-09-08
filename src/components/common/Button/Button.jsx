import React, {Component} from "react";
import s from './Button.module.css';
import classNames from 'classnames';

const Button = ({children, onClick, className}) => {

    const classes = classNames(
        className,
        s
    );

    return (
        <button
            className={classNames(className, s.button)}
            onClick={onClick}
        >{children}</button>
    )
};

export default Button;