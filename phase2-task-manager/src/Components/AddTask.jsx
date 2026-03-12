import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
function AddTask({addTask}) {
     const{
        register,
        handleSubmit,
    formState:{errors}}=useForm();
    const onFormSubmit=(data)=>{
        addTask(data) //collecting data from form and giving to tasks array to store 
        //data is like:
        //tasks=[{taskname(see register field):" "},..] tasks arrray converted to arrayof objs
    }
  return (
    <div>
       <form onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text"  {...register("taskName")} placeholder="New task name"  />
        <button>add</button>  
        {/* button inside form excecutes fucntion onsubmit whenever clicked and on submit executes onformsubmit and onfofrm submit will store tasks */}
       </form>
    </div>
  )
}

export default AddTask