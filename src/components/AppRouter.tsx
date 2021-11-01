import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRouters, publicRouters, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/userTypedSelector";


const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.auth)
    return (
        isAuth
        ?
           <Switch>
               {
                   privateRouters.map(route=>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}

                    />
                   )
               }
               <Redirect to={RouteNames.EVENT}/>
           </Switch>
           :
           <Switch>
               {
                   publicRouters.map(route=>
                       <Route
                           path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}
                       />
                   )
               }
               <Redirect to={RouteNames.LOGIN}/>
           </Switch>
    );
};

export default AppRouter;