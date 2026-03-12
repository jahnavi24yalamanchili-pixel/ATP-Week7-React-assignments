import React from 'react'

function TaskCount({tasks}) {
    let count=tasks.length
  return (
    <button >taskcount:{count}</button>
  )
}

export default TaskCount