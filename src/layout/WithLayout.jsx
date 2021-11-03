import React from "react"
import { Route } from "react-router"

function WithLayout ({ Layout, AuthComponent, ...rest }){

    return (
        <Route { ...rest }>
            <Layout>
                <AuthComponent/>
            </Layout>
        </Route>
    );
}

export default WithLayout;