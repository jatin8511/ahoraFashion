import React, { useContext, useState } from 'react'
import { MainContext } from '../../../Contexts/MainContext'
import axios from 'axios'
const AddProduct = () => {
  let { allCategories, allSubCategories } = useContext(MainContext)
  const [images, setImages] = useState({
    img1: 'https://pic.onlinewebfonts.com/svg/img_98811.png',
    img2: 'https://pic.onlinewebfonts.com/svg/img_98811.png',
    img3: 'https://pic.onlinewebfonts.com/svg/img_98811.png',
    img4: 'https://pic.onlinewebfonts.com/svg/img_98811.png',
    img5: 'https://pic.onlinewebfonts.com/svg/img_98811.png'
  })
  const [product, setProduct] = useState({
    category: '',
    subcategory: '',
    title: '',
    description: '',
    price: '',
    availability: '',
    quantity: '',
    review: '',
    discount: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    img5: '',
    additional: '',
    colors: '',
    sizes: '',
  })


  const AddProductVal = (e) => {
    setProduct({
      ...product, [e.target.name]: e.target.value
    })
  }
  const AddProductImg = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.files[0] })

    setImages({
      ...images, [e.target.name]: URL.createObjectURL(e.target.files[0])
    })
  }
  const AddNewProduct = (e) => {
    e.preventDefault()
    let ProductData = new FormData()
    ProductData.append('category', product.category)
    ProductData.append('subcategory', product.subcategory)
    ProductData.append('title', product.title)
    ProductData.append('description', product.description)
    ProductData.append('price', product.price)
    ProductData.append('availability', product.availability)
    ProductData.append('quantity', product.quantity)
    ProductData.append('review', product.review)
    ProductData.append('discount', product.discount)
    ProductData.append('img1', product.img1)
    ProductData.append('img2', product.img2)
    ProductData.append('img3', product.img3)
    ProductData.append('img4', product.img4)
    ProductData.append('img5', product.img5)
    ProductData.append('additional', product.additional)
    ProductData.append('colors', product.colors)
    ProductData.append('sizes', product.sizes)
    let resp = axios.post('http://localhost:8080/api/v1/admin/addproduct', product)
    console.log(resp)
  }
  return (
    <>
      <div className='w-screen '>

        <form onSubmit={AddNewProduct} className=' h-[200vh] overflow-auto bg-white shadow-lg p-5 w-3/6 mx-auto rounded-sm'>
          <div className='my-2 text-center font-semibold'><h3>Add New Sub Category</h3></div>
          <div className='grid grid-cols-12'>
            <div className='col-span-6 pr-1'>
              <select onChange={AddProductVal} name="category" id="" className='bbg-red-400 border border-solid border-gray-400 py-2 w-full'>
                <option className='py-2' value="Select Category">Select Category</option>
                {
                  allCategories.map((category) => {
                    return <option className='py-2' value={category.category}>{category.category}</option>
                  })
                }
              </select>
            </div>
            <div className='col-span-6 pl-1'>
              <select onChange={AddProductVal} name="subcategory" id="" className='bbg-red-400 border border-solid border-gray-400 py-2 w-full'>
                <option className='py-2' value="Select Category">Select Category</option>
                {
                  allSubCategories.map((subcategory) => {
                    if (product.category == subcategory.category) {
                      return <option className='py-2' value={subcategory.subcategory}>{subcategory.subcategory}</option>
                    }
                  })
                }
              </select>
            </div>
          </div>
          <div>
            <input onChange={AddProductVal} name='title' className='py-2 px-2 w-full border border-solid border-gray-400 my-2' type="text" placeholder='Product Title' />
          </div>
          <div className='grid grid-cols-12 gap-2'>
            <div className="col-span-6">
              <input onChange={AddProductVal} name='description' className='py-2 px-2 w-full border border-solid border-gray-400 my-2' type="text" placeholder='Product Description' />
            </div>
            <div className="col-span-6">
              <input onChange={AddProductVal} name='price' className='py-2 px-2 w-full border border-solid border-gray-400 my-2' type="number" placeholder='Price' />
            </div>
          </div>
          <div className='grid grid-cols-12 gap-2'>
            <div className="col-span-6">
              <div>
                <input onChange={AddProductVal} id='availYes' name='availability' className='py-2 px-2 border border-solid border-gray-400 my-2' type="radio" placeholder='Availability' />
                <label htmlFor="availYes">Yes</label>
              </div>
              <div>
                <input onChange={AddProductVal} id='availNo' name='availability' className='py-2 px-2 border border-solid border-gray-400 my-2' type="radio" placeholder='Availability' />
                <label htmlFor="availNo">No</label>
              </div>
            </div>
            <div className="col-span-6">
              <input onChange={AddProductVal} name='quantity' className='py-2 px-2 w-full border border-solid border-gray-400 my-2' type="number" placeholder='Quantity' />
            </div>
          </div>
          <div className='grid grid-cols-12 gap-2'>
            <div className="col-span-6">
              <input onChange={AddProductVal} name='review' className='py-2 px-2 w-full border border-solid border-gray-400 my-2' type="text" placeholder='Product Reviews' />
            </div>
            <div className="col-span-6">
              <input onChange={AddProductVal} name='discount' className='py-2 px-2 w-full border border-solid border-gray-400 my-2' type="number" placeholder='discount' />
            </div>
          </div>
          <h3 className='text-center mt-5 mb-2'>Select Images</h3>
          <div className='grid grid-cols-10'>
            <div className='col-span-2 p-1'>
              <label htmlFor="img1">
                <img className='w-full h-full' src={images.img1} alt="" />
              </label>
              <input onChange={AddProductImg} name='img1' className='hidden' type="file" id="img1" />
            </div>

            <div className='col-span-2 p-1'>
              <label htmlFor="img2">
                <img className='w-full h-full' src={images.img2} alt="" />
              </label>
              <input onChange={AddProductImg} name='img2' className='hidden' type="file" id="img2" />
            </div>
            <div className='col-span-2 p-1'>
              <label htmlFor="img3">
                <img className='w-full h-full' src={images.img3} alt="" />
              </label>
              <input onChange={AddProductImg} name='img3' className='hidden' type="file" id="img3" />
            </div>
            <div className='col-span-2 p-1'>
              <label htmlFor="img4">
                <img className='w-full h-full' src={images.img4} alt="" />
              </label>
              <input onChange={AddProductImg} name='img4' className='hidden' type="file" id="img4" />
            </div>
            <div className='col-span-2 p-1'>
              <label htmlFor="img5">
                <img className='w-full h-full' src={images.img5} alt="" />
              </label>
              <input onChange={AddProductImg} name='img5' className='hidden' type="file" id="img5" />
            </div>

          </div>
          <div>
            <input onChange={AddProductVal} name='additional' className='py-2 px-2 w-full border border-solid border-gray-400 my-2' type="text" placeholder='Additional Information Separat by Commas' />
          </div>
          <div>
            <input onChange={AddProductVal} name='colors' className='py-2 px-2 w-full border border-solid border-gray-400 my-2' type="text" placeholder='Available Colors Separat by Commas' />
          </div>
          <div>
            <input onChange={AddProductVal} name='sizes' className='py-2 px-2 w-full border border-solid border-gray-400 my-2' type="text" placeholder='Available Sizes Separat by Commas' />
          </div>
          <div>
            <input className='bg-black text-white w-full py-2 my-2' type="submit" value="Add Sub Category" />
          </div>
        </form>
      </div>
    </>
  )
}

export default AddProduct
