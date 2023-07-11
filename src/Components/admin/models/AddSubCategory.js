import React, { useContext, useState } from 'react'
import axios from 'axios'
import { MainContext } from '../../../Contexts/MainContext'

const AddSubCategory = () => {
  let { allCategories } = useContext(MainContext)
  let [subcategory, setSubcategory] = useState({
    category: '', subcategory: ''
  })
  const AddValue = (e) => {
    setSubcategory({ ...subcategory, [e.target.name]: e.target.value })
  }
  const AddNewSubCategoryHandler = async (e) => {
    e.preventDefault()
    let resp = await axios.post('http://localhost:8080/api/v1/admin/addsubcategory', subcategory)
    alert(resp.data.message)
  }
  return (
    <>
      <div className='w-screen'>
        <form onSubmit={AddNewSubCategoryHandler} action="" className='bg-white shadow-lg p-5 w-2/6 mx-auto rounded-sm'>
          <div className='my-2 text-center font-semibold'><h3>Add New Sub Category</h3></div>
          <div>
            <select onChange={AddValue} name="category" id="" className='bbg-red-400 border border-solid border-gray-400 py-2 w-full'>
              <option className='py-2' value="Select Category">Select Category</option>
              {
                allCategories.map((category) => {
                  return <option className='py-2' value={category.category}>{category.category}</option>
                })
              }
            </select>
          </div>
          <div>
            <input name='subcategory' onChange={AddValue} value={subcategory.subcategory} className='py-2 px-2 w-full border border-solid border-gray-400 my-2' type="text" placeholder='Add New Category' />
          </div>
          <div>
            <input className='bg-black text-white w-full py-2 my-2' type="submit" value="Add Sub Category" />
          </div>
        </form>
      </div>
    </>
  )
}

export default AddSubCategory
