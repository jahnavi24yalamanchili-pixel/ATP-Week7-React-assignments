//Build a Task Manager application using React that allows users to 
// add tasks,
//  view tasks,
//  and see the total number of tasks.
import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskCount from './TaskCount'
import TaskList from './TaskList'

function TaskManager() {
    let[tasks,setTasks]=useState([])
    const addnewTask=(data)=>{
        setTasks([...tasks,data]) //storing tasks
    }
  return (
    <div>
        <AddTask addTask={addnewTask}/>
        <TaskCount tasks={tasks}/>
        <TaskList tasks={tasks}/>
    </div>
  )
}

export default TaskManager