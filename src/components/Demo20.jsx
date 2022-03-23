import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { incNumber } from '../action';
import { decNumber } from '../action';

const Demo20 = () => {
    const dispatch=useDispatch();
    const myState = useSelector((state)=>state.changeTheNumber)
  return (
    <div>
      <button onClick={()=>dispatch(incNumber())}>+</button>
      <h1>{myState}</h1>
      <button onClick={()=>dispatch(decNumber())}>-</button>
    </div>
  )
}

export default Demo20
