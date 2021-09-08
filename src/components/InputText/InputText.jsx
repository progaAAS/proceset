import React, {Component} from "react";
import s from "./InputText.module.css"


 const InputText = (props) => { 
     debugger 

         return (
        <>
            <div className={s.textBox}> 
                <span className={s.text}>{props.inputText}</span>
                <input {...props.input} 
                        type={props.type} 
                        placeholder={props.placeholder}
                        className={s.input}
                ></input>
            </div>         
        </>)}
   
export default InputText