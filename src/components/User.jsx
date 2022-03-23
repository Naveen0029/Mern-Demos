import React,{useState,createContext, useContext} from 'react'
import { AppContext } from './Demo8'

function User() {
    const {username} = useContext(AppContext);
  return (
     <h1>{username}</h1>
  )
}

export default User
