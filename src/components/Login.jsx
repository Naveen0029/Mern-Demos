import React,{useState,createContext, useContext} from 'react'
import { AppContext } from './Demo8'

function Login() {
    const {setUsername} = useContext(AppContext);
    let changeIt = (e)=>{
        setUsername(e.target.value);
    }
    
  return (
    <div>
      <input type="text" placeholder='type something....' 
      onChange={changeIt}/>
    </div>
  )
}

export default Login
