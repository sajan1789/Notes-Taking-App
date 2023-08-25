
import { LOGIN_SUCCESS,LOGOUT_SUCCESS } from "./actionType";
import React from 'react'
const initialState={
    isLoading:false,
    user:null
}
export const reducer = (state=initialState,{type,payload}) => {
 switch (type) {
    case  LOGIN_SUCCESS:
        return {...state,user:payload}
    case LOGOUT_SUCCESS:
        return {...state,user:null}    
    default:
    return state
 }
}
