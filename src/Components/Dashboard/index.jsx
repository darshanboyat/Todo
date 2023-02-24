import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import style from './Dashboard.module.css'

const Index = () => {
  return (
    <>
        <Navbar  linkContent="See Task" link="/todo-list"/>
        <div className="flex flex-col my-4 overflow-hidden">
            <div className="dashboard">
                <h1 className={`flex justify-center text-7xl my-12 ${style.heading}`}>Dashboard</h1>
                <div className="flex justify-around items-center my-28 border-b">
                  <img data-aos="fade-right" src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGFza3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='rounded-xl' />
                  <p  data-aos="fade-left" className='flex flex-wrap text-3xl tracking-widest'>Setted Goals this month? <br /> No worries we're take care of them...</p>
                </div>
                
                <h1 className={`flex justify-center text-7xl ${style.heading}`}>What we do</h1>
                <div className="flex justify-around items-center">
                  <p  data-aos="fade-right" className='flex flex-wrap text-3xl tracking-widest'>We manage all of your vital task like a <br />  pro and provide personalized task management <br /> feature...</p>
                  <img data-aos="fade-left" src="https://images.unsplash.com/photo-1590402494610-2c378a9114c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRhc2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className='rounded-xl' />
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Index