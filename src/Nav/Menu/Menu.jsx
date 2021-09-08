import React, { Component } from 'react';
import {ReactComponent as ButSvg} from '../../img/Union.svg';
import menu from './Menu.module.css'

const Menu = (props) => {
        return(
            <nav>
             <button 
             onClick={props.onToggle}
             className={menu.button}
                >
                    <ButSvg className={menu.iconBtn}/>
                    <div className={menu.textBtn}>Меню</div>
              </button>
            </nav>
        )
    }
export default Menu;