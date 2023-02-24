import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './AddTask.css'
const Index = ({ closeBtn }) => {


  const handelSubmit = (event) => {
    event.preventDefault();

    if(localStorage.length === 0){
        localStorage.setItem("task", JSON.stringify([{title: event.target.title.value}]))
      }
      else{
        localStorage.setItem("task", JSON.stringify([...(JSON.parse(localStorage.getItem("task"))), {title: event.target.title.value}]))
    }
    
  }



  return (
    <div className='add-company-container z-50'>
      <div className="flex create-company-form-wrapper">
        <div className=" bg-white  rounded-xl">
          <div className="flex justify-around">
            <div className="">
              <h2 className='text-2xl ml-36 border-b-2 border-black my-2'>Add Task</h2>
            </div>
            <button className="ml-20 p-2" onClick={() => closeBtn(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="form px-24 py-12">
            <div className="">
              <form action="" className='flex flex-col justify-center items-center' onSubmit={handelSubmit}>
                <input type="text" name="title" id="" placeholder='Enter your task here' required className='outline px-4 py-2 rounded-xl' />
                <button type="submit" className='drop-shadow-xl bg-blue-800 px-8 py-2 my-4 text-white rounded-xl'>Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index