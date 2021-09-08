import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form';
import useToggle from 'react-use-toggle';
import {ReactComponent as Eye} from '../../img/eye.svg';
import {NavLink, useHistory} from "react-router-dom";
import s from "./Auth.module.css";
import {  required  } from "./../../utils/validators";
import { Input } from '../common/FormControl/FormControls';
import { LOGIN } from '../../query/login';
import {useMutation} from "@apollo/client";
import {useDispatch} from "react-redux";
import {setPasswordData} from '../../redux/userReducer';
import Button from '../common/Button/Button';
import Error from '../../UI/Error/Error';


const AuthForm = (props) => {

  let [eye, SetActivateEye] = useToggle(false);

    return<form className={s.authForm} onSubmit={props.handleSubmit}>
        <div className={s.authForm__forma}>
          <Field className={s.login} placeholder="Логин" name={"email"} validate={[required]} component={Input}/>  
          <Field className={s.password} type ={eye ? "text" : "password"} placeholder="Пароль" name={"password"} validate={[required]} component={Input}/>
          <a onClick={SetActivateEye} className={s.eye}><Eye className={s.eyeIconAuth}/></a>
          <Button className={s.button}>Войти в систему</Button>
          <NavLink className={s.activeLink} to="/registration">Зарегистрироваться</NavLink>
        </div>
           {props.hasError && <Error/>}
        </form>
}

const AuthReduxForm = reduxForm({form: 'join'})(AuthForm)

const Auth = (props) => {

  const history = useHistory()
  const [Login, error] = useMutation(LOGIN);
  let [hasError, SetActivateError] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    let email = formData.email;
    let password = formData.password;

    dispatch(setPasswordData(password))

    Login({variables:{
      email, 
      password
    }}).then(data => {
            console.log(data);
            localStorage.setItem("token", data.data.login.token);
            history.push("/setting")
          }).catch(e => {
            SetActivateError(true)
        })
   
     }
  
 
  return(

        <AuthReduxForm onSubmit={onSubmit} hasError={hasError}/>
  )
}


export default Auth
