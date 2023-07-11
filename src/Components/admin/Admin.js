import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <div className="admin">
                <div className='grid grid-cols-12'>
                    <div className="side col-span-2 relative">
                        <div className=" w-full absolute h-screen top-0">
                            <ul>
                                <li className=''><NavLink to='category'><p className='p-3 border-b full  '>Categories</p></NavLink></li>
                                <li className=''><NavLink to='subcategory'><p className='p-3 border-b full  '>Sub Categories</p></NavLink></li>
                                <li className=''><NavLink to='products'><p className='p-3 border-b full  '>Products</p></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content col-span-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin
