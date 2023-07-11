import React, { useContext } from 'react'
import { AiOutlineUser, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { MainContext } from '../../Contexts/MainContext'
const Header = () => {
    let { user,LogOutHandler,login } = useContext(MainContext)
    console.log(user)
    return (
        <>
            <div className="header flex justify-between items-center h-[90px] bg-gray-100 px-16">
                <div>
                    <div className='flex flex-col gap-1'>
                        <span className='h-[3px] w-6 block bg-black'></span>
                        <span className='h-[3px] w-4 block bg-black'></span>
                        <span className='h-[3px] w-6 block bg-black'></span>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl font-bold'><NavLink to='/'>Kharidlo</NavLink></h1>
                </div>
                <div className='flex gap-2 text-2xl'>
                    <div className='relative'>
                        {
                            login ? <div className='LogoutHover'>
                                <AiOutlineUser />
                                <div onClick={LogOutHandler} className="LogoutBtn absolute text-sm w-[100px] m-0 py-2 px-4 text-center top-100 bg-white shadow">
                                    Log Out
                                </div>
                            </div> : <NavLink to='/login'><AiOutlineUser /></NavLink>
                        }

                    </div>
                    <NavLink to='/login'><AiOutlineHeart /></NavLink>
                    <NavLink to='/login'><AiOutlineSearch /></NavLink>
                    <NavLink to='/login'><HiOutlineShoppingBag /></NavLink>

                </div>
            </div>
        </>
    )
}

export default Header
