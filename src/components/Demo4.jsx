//Example of Passing Data from child to parent
import React, { useState } from "react"
import Demo2 from './Demo2'
import Demo3 from './Demo3'

function Demo4(){
    let [text,setText] = useState('My name is naveen');
    let changeIt = (inputText)=>{
        setText(inputText);
        console.log(text);
    }
    return (
        <>
        <Demo2 parentCallback={changeIt}/>
        <Demo3 fromDemo2={text}/>
        </>
    )
}

export default Demo4;