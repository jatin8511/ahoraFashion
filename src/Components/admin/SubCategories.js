import React from 'react'
import { Link } from 'react-router-dom'
import SubCategoriesWrapperAccordion from './CategoriesWrapper'

const SubCategories = () => {
    return (
        <>
            <div className="header shadow-lg py-5">
                <div className="flex justify-between items-center px-8">
                    <div>
                        <Link to='/admin/adminmodel/subcategory'><button className='bg-black text-white py-2 border border-solid border-black px-4'>Add Sub Category</button></Link>
                    </div>
                    <div>
                        <h1 className='text-3xl'>Sub Categories</h1>
                    </div>
                    <div>
                        <form action="">
                            <input type="search" className='border border-solid border-black py-2' />
                            <input type="submit" value='Search' className='bg-black text-white py-2 border border-solid border-black px-4' />
                        </form>
                    </div>
                </div>
            </div>
            <div className="subcategoriesWrapper p-8">

                <SubCategoriesWrapperAccordion />
            </div>
        </>
    )
}

export default SubCategories
