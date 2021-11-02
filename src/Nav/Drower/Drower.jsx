import React from "react";
import { NavLink } from "react-router-dom";
import Background from "../../UI/Background/Background";
import { MenuItems } from "../MenuItems/MenuItems";
import s from "./Drower.module.css";

const Drower = (props) => {

    return (
        <>
            <nav className={!props.isOpen ? [s.drower, s.close].join(' ') : s.drower}>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} onClick={props.onClose}>
                                <img src={item.src}/>
                                <NavLink className={s.link} to={item.path}>{item.title}</NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            {props.isOpen ? <Background onClick={props.onClose}/> : null}
        </>
    )
}
export default Drower;