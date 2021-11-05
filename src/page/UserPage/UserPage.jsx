import React, { useState } from "react";
import s from "./UserPage.module.css";
import {  required, matchInput, passLength } from "../../utils/validators";
import useToggle from "react-use-toggle";
import { Field, reduxForm } from "redux-form";
import { ReactComponent as Eye } from "../../img/eye.svg";
import InputText from "../../components/InputText/InputText";
import Button from "../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import currentUser from "../../query/currentUser";
import { useQuery } from "@apollo/client";
import { EDITUSER } from "../../query/editUser";
import { setPasswordData } from "../../redux/userReducer";

const passwordValidator = passLength(8);

const UserForm = (props) => {

  const [eye, SetActivateEye] = useToggle(false);
  const [eye1, SetActivateEye1] = useToggle(false);
  
  const dataPassword = useSelector(state => state.userPage);
  
  return <div className={s.userForm}>
    <form className={s.authForm} onSubmit={props.handleSubmit}>
      <div className={s.subtitle}>
        <div className={s.userName}>
          {`${props.data.currentUser.firstName}` + " " +`${ props.data.currentUser.secondName}`}. Редактирование
        </div>
        <Button className={s.button}>{props.toggelBtn}</Button>
      </div>
      <div className={s.container}>
        <Field className={s.firstName} name={"firstName"} placeholder={props.data.currentUser.firstName} validate={[required]} component={InputText} inputText={"Имя"}/>  
        <Field className={s.secondName} name={"secondName"} placeholder={props.data.currentUser.secondName} validate={[required]} component={InputText} inputText={"Фамилия"}/>
        <Field className={s.email} name={"email"} placeholder={props.data.currentUser.email} validate={[required]} component={InputText} inputText={"Почта"}/> 
        <Field className={s.password} type ={eye ? "text" : "password"} name={"password"} placeholder={dataPassword.password} validate={[passwordValidator]} component={InputText} inputText={"Новый пароль"}/>
        <a onClick={SetActivateEye} className={s.eye}><Eye className={s.eyeIconReg1}/></a>
        <Field className={s.password} type ={eye1 ? "text" : "password"} placeholder="Повторите пароль" validate={[required]} validate={[matchInput]} name={"password2"} component={InputText} inputText={"Повторите пароль"}/>
        <a onClick={SetActivateEye1} className={s.eye}><Eye className={s.eyeIconReg2}/></a>
      </div>
    </form>
  </div>
}

const UserReduxForm = reduxForm({form: 'user'})(UserForm)

const UserPage = () => {

  const dispatch = useDispatch();
  const [editUser] = useMutation(EDITUSER);
  const[toggelBtn, setToggelBtn] = useState("Сохранить")

  const { loading, data, error } = useQuery(currentUser, {fetchPolicy: "network-only"})

  if (loading) {
    return <p>...загрузка</p>;
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }
  
  const onSubmit = (formData) => {
    setToggelBtn("Сохранено")
    const id = data.currentUser.id;
    let firstName = formData.firstName;
    let secondName = formData.secondName;
    let email = formData.email;
    let password = formData.password;
    dispatch(setPasswordData(password));

    editUser({variables:{id, email, firstName, secondName, password}}).then(
       setTimeout(()=>setToggelBtn("Сохранить"), 3000)
    )}
  
    return <din className={s.authReg}>
      <div className={s.authReg__form}>
        <div className={s.authReg__forma}>
          <UserReduxForm toggelBtn={toggelBtn} onSubmit={onSubmit} data={data}/>
        </div>
      </div>
    </din>
}

export default UserPage;