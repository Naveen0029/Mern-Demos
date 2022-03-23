//Watching when useEffect runs
import React from 'react'
import {useState,useRef,useEffect} from 'react'

function Demo11() {
    console.log('I am at start');
    const [name,setState] = useState('');
    const renders=useRef(0);
    const prev = useRef('');

    let changeIt = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        setState(e.target.value);
        name?console.log(name):console.log('name is empty')
    }



    console.log('i am in middle');
    name?console.log(name):console.log('name is empty')



    useEffect(()=>{
        renders.current =renders.current+1;
        prev.current = name;
        console.log('i am useEffect');
        console.log(renders.current);
    })
  return (
      
    <div>
        {console.log('i am first')}
        {name?console.log(name):console.log('name is empty')}
       <h1>{renders.current}</h1>
       <h2>Prev:{prev.current}</h2>
       <input type='text' onChange={changeIt} value={name}/>
    </div>
  )
}

export default Demo11
