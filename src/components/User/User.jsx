import React, {useState, useRef} from 'react';
import s from "./User.module.css";
import {  required, matchInput, passLength } from "./../../utils/validators";
import useToggle from 'react-use-toggle';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControl/FormControls';
import {ReactComponent as Eye} from '../../img/eye.svg';
import InputText from '../InputText/InputText';
import Button from '../common/Button/Button';
import {useDispatch, useSelector} from "react-redux";
import {useMutation} from "@apollo/client";
import currentUser from '../../query/currentUser';
import {useQuery} from "@apollo/client";
import {EDITUSER} from "../../query/editUser";
import {setPasswordData} from "../../redux/userReducer";
import {useHistory} from "react-router-dom";

const passwordValidator = passLength(8);

const UserForm = (props) => {
debugger

  let [eye, SetActivateEye] = useToggle(false);
  let [eye1, SetActivateEye1] = useToggle(false);
  const dataPassword = useSelector(state => state.userPage);
  

    return <div className={s.userForm}>
            <form className={s.authForm} onSubmit={props.handleSubmit}>
              <div className={s.subtitle}>
                  <div className={s.userName}>
                    {`${props.data.currentUser.firstName}` + " " +`${ props.data.currentUser.secondName}`}. Редактирование
                  </div>
                  <Button className={s.button}>Сохранить</Button>
                </div>
                <div className={s.container}>
                  <Field className={s.login} name={"firstName"} placeholder={props.data.currentUser.firstName} validate={[required]} component={InputText} inputText={"Имя"}/>  
                  <Field className={s.secondName} name={"secondName"} placeholder={props.data.currentUser.secondName} validate={[required]} component={InputText} inputText={"Фамилия"}/>
                  <Field className={s.login} name={"email"} placeholder={props.data.currentUser.email} validate={[required]} component={InputText} inputText={"Почта"}/> 
                  <Field className={s.password} type ={eye ? "text" : "password"} name={"password"} placeholder={dataPassword.password} validate={[passwordValidator]} component={InputText} inputText={"Новый пароль"}/>
                  <a onClick={SetActivateEye} className={s.eye}><Eye className={s.eyeIconReg1}/></a>
                  <Field className={s.login} type ={eye1 ? "text" : "password"} placeholder="Повторите пароль" validate={[required]} validate={[matchInput]} name={"password2"} component={InputText} inputText={"Повторите пароль"}/>
                  <a onClick={SetActivateEye1} className={s.eye}><Eye className={s.eyeIconReg2}/></a>
                </div>
            </form>
          </div>


}

const UserReduxForm = reduxForm({form: 'user'})(UserForm)

const User = () => {

  const history = useHistory()
  const dispatch = useDispatch();
  const [editUser] = useMutation(EDITUSER);
  const { loading, data, error } = useQuery(
    currentUser,
    {
      fetchPolicy: "network-only"
    }
  )

  if (loading) {
    return <p>...загрузка</p>;
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }


  const onSubmit = (formData) => {

    const id = data.currentUser.id;
    let firstName = formData.firstName;
    let secondName = formData.secondName;
    let email = formData.email;
    let password = formData.password;
    dispatch(setPasswordData(password));

    editUser({variables:{
      id,
      email,
      firstName,
      secondName,
      password
    }}).then(
      history.push("/process")
    )}

  
   return <din className={s.authReg}>
            <div className={s.authReg__form}>
              <div className={s.authReg__forma}>
                <UserReduxForm onSubmit={onSubmit} data={data}/>
              </div>
            </div>
         </din>
}

export default User;