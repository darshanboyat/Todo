import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';

const Index = () => {
    return (
        <div className='flex justify-between w-full bg-blue-700 text-white'>
            <div className="">
                <p className='font-semibold text-xl py-2 px-24'>Home</p>
                <p className='font-semibold text-xl py-2 px-24'>See Task</p>
                <p className='font-semibold text-xl py-2 px-24'>Add Task</p>
            </div>
            <div className="flex flex-col mr-24 mt-2">
                <LanguageIcon/>
                <FacebookIcon/>
            </div>
        </div>
    )
}

export default Index