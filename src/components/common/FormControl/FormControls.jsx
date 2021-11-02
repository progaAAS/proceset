import React from "react";
import s from "./FormControls.module.css";

export const Input  = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <input {...input} {...props}/>
            {hasError && <span className={s.form_error}>{meta.error}</span>}
        </div>
    )
}
