import React from "react";
import {ReactComponent as LogoSvg} from "../../img/Vector.svg";
import s from "./public.module.css";

const Public = ({ children }) => {

  return (
    <div className={s.head_logo}>
        <div className={s.logo}><LogoSvg/></div>
        {children}
    </div>
  )
};

export default Public;
