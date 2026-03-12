import React from 'react'

function TaskList({tasks}) {
  return (
    <div>
      {tasks.length===0 ? ("empty") : (
        tasks.map((i,index)=>(<p key={index}>tasks:{i.taskName}</p>)))}

    </div>
  )
}

export default TaskList