//react-redux
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incNumber } from '../action';
import { decNumber } from '../action';

const Demo28 = () => {

    const dispatch= useDispatch();
    const count= useSelector((state)=>state.changeIt)

  return (
    <div>
        <button onClick={()=>dispatch(incNumber())}>-</button>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(decNumber())}>+</button>

    </div>
  )
}

export default Demo28




