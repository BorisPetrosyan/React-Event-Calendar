import React from "react";
import Login from "../page/Login";
import Event from "../page/Event";


export interface  IRoute {

    path:string;
    component:React.ComponentType;
    exact?:boolean
}

export enum RouteNames{
    LOGIN='/login',
    EVENT='/'
}

export const publicRouters : IRoute[]=[
    {path:RouteNames.LOGIN,exact:true,component:Login}
]


export const privateRouters : IRoute[]=[
    {path:RouteNames.EVENT,exact:true,component:Event}
]