import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MainContext } from '../../Contexts/MainContext'

const Categories = () => {
    // useEffect(() => {
    //     GetAllCategories()
    //     // setCategories(allCategories)
    //     // setCategories(GetAllCategories())
    //     // GetAllCategories().then((e) => setCategories(e))
    //     // console.log(GetAllCategories())
    // }, [])
    const { allCategories, GetAllCategories } = useContext(MainContext)
    const DeleteCategory = async (id) => {
        let resp = await axios.delete(`http://localhost:8080/api/v1/admin/deletecategory/${id}`)
        if (resp.data.success) {
            GetAllCategories()
        }
    }
    return (
        <>
            <div className="header shadow-lg py-5">
                <div className="flex justify-between items-center px-8">
                    <div>
                        <Link to='/admin/adminmodel/category'><button className='bg-black text-white py-2 border border-solid border-black px-4'>Add Category</button></Link>
                    </div>
                    <div>
                        <h1 className='text-3xl'>Categories</h1>
                    </div>
                    <div>
                        <form action="">
                            <input type="search" className='border border-solid border-black py-2' />
                            <input type="submit" value='Search' className='bg-black text-white py-2 border border-solid border-black px-4' />
                        </form>
                    </div>
                </div>
            </div>
            <ul className='p-16'>
                <li className='flex justify-between bg-black text-white px-3 py-4'><h3>Category name </h3><h3 className='me-16'>Options</h3></li>
                {
                    allCategories.map((item) => {
                        return <li className='flex justify-between my-2 shadow py-2 items-center px-3'>
                            <p>{item.category}</p>
                            <div>
                                <button className='bg-black rounded-sm py-3 px-6 text-xl text-white mx-3'><AiFillEdit /></button>
                                <button onClick={() => DeleteCategory(item._id)} className='bg-red-600 rounded-sm py-3 px-6 text-xl text-white mx-3'><AiFillDelete /></button>
                            </div>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default Categories
