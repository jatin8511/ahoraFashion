import React, { useContext, useState } from 'react'
import axios from 'axios'
import { MainContext } from '../../../Contexts/MainContext'

const AddCategory = () => {
    let [category, setCategory] = useState({
        category: '',
    })
    let { setAlertMessage, setOpen } = useContext(MainContext)

    const AddCategoryHandler = (e) => {
        setCategory({ category: e.target.value })
    }
    const CategoryHandler = async (e) => {
        e.preventDefault()
        let resp = await axios.post('http://localhost:8080/api/v1/admin/addcategory', category)
        if (resp.data.success) {
            setAlertMessage({ msg: resp.data.message, color: true })
            setOpen(true)
        } else {
            setAlertMessage({ msg: resp.data.message, color: false })
            setOpen(true)

        }
    }
    return (
        <>
            <div className='w-screen'>

                <form onSubmit={CategoryHandler} action="" className='bg-white shadow-lg p-5 w-2/6 mx-auto rounded-sm'>
                    <div className='my-2 text-center font-semibold'><h3>Add New Category</h3></div>
                    <div>
                        <input value={category.category} onChange={AddCategoryHandler} className='py-2 px-2 w-full border border-solid border-gray-400 my-2' type="text" placeholder='Add New Category' />
                    </div>
                    <div>
                        <input className='bg-black text-white w-full py-2 my-2' type="submit" value="Add Category" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddCategory
