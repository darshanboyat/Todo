import React from 'react'
import {Link} from 'react-router-dom'

const Index = ({linkContent, link}) => {
  return (
    <>
        <div className="flex justify-between min-w-screen px-8 py-4 bg-blue-800 drop-shadow-2xl text-white sticky top-0 mb-4 z-10">
            <div className="text-2xl font-bold">Todo</div>
            <Link to={link} className="">{linkContent}</Link>
        </div>
    </>
  )
}

export default Index