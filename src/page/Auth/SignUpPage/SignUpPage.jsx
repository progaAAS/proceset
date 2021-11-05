import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { NavLink, useHistory} from "react-router-dom";
import s from "../Auth.module.css";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../../query/user";
import { ReactComponent as Eye } from "../../../img/eye.svg";
import useToggle from "react-use-toggle";
import { required, requiredSecondName, email, requiredEmail, matchInput, passLength } from "../../../utils/validators";
import { Input } from "../../../components/common/FormControl/FormControls";
import Button from "../../../UI/Button/Button";
import Error from "../../../UI/Error/Error";

const passwordValidator = passLength(8);

const SignUpForm = (props) => {

  let [eye, SetActivateEye] = useToggle(false);
  let [eye1, SetActivateEye1] = useToggle(false);

  return <>
      <form className={s.authForm} onSubmit={props.handleSubmit}>
        <div className={s.authForm__forma}>
          <h3 className={s.head}>Регистрация</h3>
          <Field className={s.name} placeholder="Имя" name={"firstName"} validate={[required]} component={Input}/>  
          <Field className={s.fullName} placeholder="Фамилия" name={"secondName"} validate={[requiredSecondName]} component={Input}/>
          <Field className={s.email} placeholder="Электронная почта" name={"email"} validate={[email, requiredEmail]} component={Input}/> 
          <div className={s.input}>
            <Field className={s.password} type ={eye ? "text" : "password"} placeholder="Введите пароль" validate={[passwordValidator]} name={"password"} component={Input}/>
            <Eye onClick={SetActivateEye} className={s.eyeIconAuth}/>   
          </div>
          <div className={s.input}>
            <Field className={s.password} type ={eye1 ? "text" : "password"} placeholder="Повторите пароль" validate={[matchInput]} name={"password2"} component={Input}/>
            <Eye onClick={SetActivateEye1} className={s.eyeIconAuth}/>
          </div>
          <Button className={s.button}>Применить и войти</Button>
          <p className={s.authReg__Link}>Уже зарегистрированы? <NavLink to="/" className={s.link}>Вход</NavLink></p>
        </div>
        {props.hasError && <Error/>}
      </form>
    </>
}

const SignUpReduxForm = reduxForm({form: 'signup'})(SignUpForm)

const SignUpPage = () => {

  const history = useHistory();
  const [hasError, SetActivateError] = useState(false);
  const [newUser] = useMutation(SIGN_UP);
 
  const onSubmit = (formData) => {
    const firstName = formData.firstName;
    const secondName = formData.secondName;
    const email = formData.email;
    const password = formData.password;

    newUser({variables:{firstName, secondName, email, password}}).then(({data}) => {
      localStorage.setItem("token", data.signup);
      history.push("/setting")})
      .catch(e => {
        SetActivateError(true)
      })
  }

  return<div>
    <SignUpReduxForm onSubmit={onSubmit} hasError={hasError}/>
  </div>

}

export default SignUpPage;