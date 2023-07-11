import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const mainModal = () => {
    return (
        <>
            <div className="min-h-screen overflow-auto w-full bg-black/25 fixed top-0 left-0 flex justify-center items-center">
                <div className='absolute top-3 right-3'><Link to='/admin'><AiOutlineClose className='text-3xl' /></Link></div>
                <div className="">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default mainModal
