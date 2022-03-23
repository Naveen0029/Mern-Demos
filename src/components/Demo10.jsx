//useRef
import React,{useRef} from 'react'

function Demo10() {
  const inputRef = useRef();
  let onSubmit = (e) =>{
      e.preventDefault();//it must be used when we are using form
      console.log(e);
      console.log(inputRef.current.value);
      inputRef.current.style.backgroundColor = 'red';
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
          <input type='text' placeholder='Type here...' ref={inputRef}/>
          <button type='submit'>Click Me!</button>
      </form>
    </div>  
  )
}

export default Demo10
