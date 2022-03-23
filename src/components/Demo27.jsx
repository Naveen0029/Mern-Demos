//use callback 
//why memo does not work ?
//Ans:Every time a component re-renders, 
//its functions get recreated. Because of this,
// the addTodo function has actually changed

//After using useCallback the Todos component will
// only re-render when the todos prop changes.
import {useState,useCallback} from 'react';
import ReactDom from 'react-dom';
import Todos from './Todos.js'


const Demo27=()=>{
    const [count,setCount] = useState(0);
    const [todos,setTodos]= useState([]);

    let increment = ()=>{
        setCount((prev)=>prev+1);
    }
    console.log(todos);
    let addTodo = useCallback(()=>{
         setTodos((prev)=>[...prev,'New Task'])
    },[todos])

    return (
        <>
        <Todos todos={todos} addTodo={addTodo} />
           <hr />
           <div>
               {count}
               <button onClick={increment}>+</button>
           </div>
        </>
    )


}

export default Demo27