import React from 'react'
import {useContext} from 'react'
import { AppContext } from './Demo30';

const Demo31 = () => {
    const {input,setInput} = useContext(AppContext);

    let changeIt = (e)=>{
        setInput(e.target.value);
    }
  return (
    <div>
      <input type='text' onChange={changeIt}/>
      <h1>{input}</h1>
    </div>
  )
}

export default Demo31
