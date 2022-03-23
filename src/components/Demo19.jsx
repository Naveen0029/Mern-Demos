import React from 'react'
import {useState} from 'react'
import useLocalStorage from './useLocalStorage';

function Demo19() {
    const [task,setTask] = useLocalStorage('task','');

    return (
        <form>
            <div>
                <label>Task</label>
                <input type='text' value={task} 
                onChange={(e)=>setTask(e.target.value)}/>
            </div>
        </form>
    )
}

export default Demo19
