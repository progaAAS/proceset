import React, {useState} from 'react';
import {ReactComponent as ErrorSvg} from '../../img/error.svg';
import s from './Error.module.css'

const Error = () =>{
    return <div className={s.authForm__error}>
    <div className={s.authForm__Img}><ErrorSvg/></div>
    <div className={s.authForm__Text}>Сообщение об ошибке</div>
    </div>
}
export default Error;