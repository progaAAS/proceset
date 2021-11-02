import React from 'react'
import s from './Background.module.css'

const Background = props => <div className={s.blackout} onClick={props.onClick}/>

export default Background