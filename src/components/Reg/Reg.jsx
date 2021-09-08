import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NavLink, useHistory} from "react-router-dom";
import s from "./Reg.module.css";
import {useMutation} from "@apollo/client";
import {SIGN_UP } from '../../query/user';
import {ReactComponent as Eye} from '../../img/eye.svg';
import useToggle from 'react-use-toggle';
import {  required, requiredSecondName, email, requiredEmail, matchInput, passLength } from "./../../utils/validators";
import { Input } from '../common/FormControl/FormControls';
import {setPasswordData} from '../../redux/userReducer';
import {useDispatch, useSelector} from "react-redux";
import Button from '../common/Button/Button';
import {setErrorData} from "../../redux/userReducer";
import Error from '../../UI/Error/Error';

const passwordValidator = passLength(8);

const RegForm = (props) => {


  let [eye, SetActivateEye] = useToggle(false);
  let [eye1, SetActivateEye1] = useToggle(false);


    return <form className={s.authForm} onSubmit={props.handleSubmit}>
      <div className={s.authForm__forma}>
          <div className={s.head}>Регистрация</div>
          <Field className={s.login} placeholder="Имя" name={"firstName"} validate={[required]} component={Input}/>  
          <Field className={s.password} placeholder="Фамилия" name={"secondName"} validate={[requiredSecondName]} component={Input}/>
          <Field className={s.login} placeholder="Электронная почта" name={"email"} validate={[email, requiredEmail]} component={Input}/> 
          <Field className={s.login} type ={eye ? "text" : "password"} placeholder="Введите пароль" validate={[passwordValidator]} name={"password"} component={Input}/>
          <a onClick={SetActivateEye} className={s.eye}><Eye className={s.eyeIconReg1}/></a>        
          <Field className={s.login} type ={eye1 ? "text" : "password"} placeholder="Повторите пароль" validate={[matchInput]} name={"password2"} component={Input}/>
          <a onClick={SetActivateEye1} className={s.eye}><Eye className={s.eyeIconReg2}/></a> 
          <Button className={s.button}>Применить и войти</Button>
          <p className={s.authReg__Link}>Уже зарегистрированы? <NavLink to="/" className={s.link}>Вход</NavLink></p>
        </div>
        {props.hasError && <Error/>}

      </form>
}

const RegReduxForm = reduxForm({form: 'registration'})(RegForm)

const Reg = () => {

  const history = useHistory();
  let [hasError, SetActivateError] = useState(false);
  const [newUser] = useMutation(SIGN_UP);
 


  const onSubmit = (formData) => {
    let firstName = formData.firstName;
    let secondName = formData.secondName;
    let email = formData.email;
    let password = formData.password;

 newUser({variables:{
   firstName, 
   secondName, 
   email, 
   password
 }}).then(({data}) => {
         localStorage.setItem("token", data.signup);
         history.push("/setting")
       }).catch(e => {
          SetActivateError(true)
      })

  }

  return<div>
      <RegReduxForm onSubmit={onSubmit} hasError={hasError}/>
    </div>

}

export default Reg;