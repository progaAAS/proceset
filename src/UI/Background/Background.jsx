import React from 'react'
import blackout from './Background.module.css'

const Background = props => <div className={blackout.blackout} onClick={props.onClick}/>

export default Background