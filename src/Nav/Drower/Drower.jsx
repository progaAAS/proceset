import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import Background from '../../UI/Background/Background';
import drower from './Drower.module.css'
import {ReactComponent as Union} from '../../img/menu_union.svg';
import {ReactComponent as People} from '../../img/menu_people.svg';
import {ReactComponent as Procces} from '../../img/menu_process.svg';


const cls = [drower.drower]

const Drower = (props) => {


        const cls = [drower.drower]

        if(!props.isOpen){
            cls.push(drower.close)
        }

        return (
            
            <>
            <nav className={cls.join(' ')}>
               <ul>
                   <li>
                       <Union className={drower.icon} />
                       <Link 
                            path to={'/'} 
                            className={drower.link}
                        >proceses
                        </Link>
                    </li>
                   <li>
                       <People className={drower.icon}/>
                        <Link 
                            path to={'/setting'} 
                            className={drower.link}>
                            Username
                        </Link>
                    </li>
                   <li>
                       <Procces className={drower.icon}/>
                       <Link path to={'/process'} className={drower.link}>Список процессов</Link>
                    </li>
                 
               </ul>
            </nav>
            {props.isOpen ? <Background onClick={props.onClose}/> : null}
            </>
            
        )
    }
export default Drower;