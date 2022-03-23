import React,{useState} from 'react'
import './Demo3.css'

function Demo3(props){
    let [count,setCount] = useState(0);
    let [text,setText] = useState(true);
    let changeIt=()=>{
        setCount(count+1);
        setText(!text);
    }
    
    return (
        <>
        <div className='container'>
            <h1>{count}</h1>
            <button type="submit" onClick={changeIt} >Click Me!</button>
            {text&&<p>{props.fromDemo2}</p>}
        </div>
        </>
    )
}

export default Demo3;