import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import AddTaskForm from './AddTask'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ToastContainer, toast } from 'react-toastify';
import style from './List.module.css'

const Index = () => {

    const [editable, setEditable] = useState(false)
    const [addTask, setAddTask] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("task")))
    }, [localStorage.getItem("task")])

    const deleteTask = (index) => {
        data.splice(index, 1);
        localStorage.setItem("task", JSON.stringify(data))
        toast.success('Task deleted successfully...', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(()=>{
            window.location.reload();
        }, 500)
    }

    const changeTitle = (index, event) => {
        event.preventDefault();
        data[index].title = event.target.newTitle.value

        localStorage.setItem("task", JSON.stringify(data))

        setEditable(false);
        toast.success('Title changed successfully...', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }


    return (
        <>
            <ToastContainer />
            {addTask && <AddTaskForm closeBtn={setAddTask} />}
            <Navbar link="/" linkContent="Dashboard" />
            <h1 className={`flex justify-center text-7xl my-8 ${style.heading}`}>Todo List</h1>

            <div className=" flex flex-col mx-48 my-4 px-24 py-8 drop-shadow-2xl bg-slate-200 rounded-xl">
                <div className="flex justify-end py-4">
                    <button className='bg-blue-800 px-6 py-2 rounded-xl text-white' onClick={() => setAddTask(!addTask)}>Add new task</button>
                </div>

                {
                    data && data.length > 0 ? data.map((task, index) => (
                        <div className="flex items-center w-full">
                            <input type="checkbox" className='w-8 h-8 mb-8 mr-2' onClick={() => deleteTask(index)} />
                            {editable ? <form className='flex w-full' onSubmit={e => changeTitle(index, e)}>
                                <input type="text" name="newTitle" id="" className=' w-full mb-8 py-2 px-2 rounded bg-white font-semibold' defaultValue={task.title} />
                                <button type="submit" className='mb-8 px-2 text-white bg-blue-700 rounded-r'>Save</button>
                            </form> : <div className='flex w-full'>
                                <p className=' w-full mb-8 py-2 px-2 rounded bg-white' onDoubleClick={() => setEditable(true)}>{task.title}</p>
                                <button className='mb-8 px-2 text-white bg-red-700 rounded-r' onClick={() => deleteTask(index)}><DeleteOutlineIcon /></button>
                            </div>}
                        </div>
                    )) : <div className='flex justify-center'>No task added to the Todo list</div>
                }

            </div>
        </>
    )
}

export default Index