import React from 'react'
import { Link } from 'react-router-dom'

const ProductsAdmin = () => {
    return (
       <>
        <div className="header shadow-lg py-5">
                <div className="flex justify-between items-center px-8">
                    <div>
                        <Link to='/admin/adminmodel/product'><button className='bg-black text-white py-2 border border-solid border-black px-4'>Add Product</button></Link>
                    </div>
                    <div>
                        <h1 className='text-3xl'>Products</h1>
                    </div>
                    <div>
                        <form action="">
                            <input type="search" className='border border-solid border-black py-2' />
                            <input type="submit" value='Search' className='bg-black text-white py-2 border border-solid border-black px-4' />
                        </form>
                    </div>
                </div>
            </div>
       </>
    )
}

export default ProductsAdmin
