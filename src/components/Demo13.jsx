//useCallback
import React from 'react'
import {useState,useCallback} from 'react'

function Demo13() {
    const [tasks,setTasks] = useState([]);

    const addTask = useCallback(()=>{
        setTasks((prevState)=>[...prevState,'Some Task'])
    },[setTasks])

  return (
    <div>
        <Button addTask={addTask}/>
        {
            tasks.map((task,index)=>(
            <p key={index}>{task}</p>
            ))
        }
    </div>
  )
}

const Button = React.memo(({addTask})=>{
    console.log('Button rendered');
    return <div>
        <button onClick={addTask}>Add Task</button>
    
    </div>
})

export default Demo13
