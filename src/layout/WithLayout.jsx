import React,  { Component } from "react"
import { Route } from "react-router"

function WithLayout ( {layout, component, ...rest}){
    return (
        <Route{...rest} render ={ (props)  => 
            React.createElement( layout, props, React.createElement(component, props))
    }/>
    );
}

export default WithLayout;