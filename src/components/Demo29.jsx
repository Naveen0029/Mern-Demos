//use useRef for focus on initial render
import React from 'react'
import {useRef,useEffect} from 'react'

const Demo29 = () => {
    const inputText= useRef();
    useEffect(()=>{
        inputText.current.focus();
    },[]);
  return (
    <div>
      <input type='text' ref={inputText} />
    </div>
  )
}

export default Demo29
