import React from 'react';
import {ReactComponent as ButSvg} from '../../img/Union.svg';
import s from './Menu.module.css'

const Menu = (props) => {

    return(
        <nav>
            <button onClick={props.onToggle} className={s.button}>
                <ButSvg className={s.iconBtn}/>
                <div className={s.textBtn}>Меню</div>
            </button>
        </nav>
    )
}

export default Menu;