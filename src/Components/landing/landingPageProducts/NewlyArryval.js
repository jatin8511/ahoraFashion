import React from 'react'
import ProductCard from '../ProductCard'

const NewlyArryval = () => {
    return (
        <>
<div>
    <h1 className='text-center my-8 text-3xl'>
        NEWLY ARRIVALS
    </h1>
    <div className="grid grid-cols-12 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
</div>
        </>
    )
}

export default NewlyArryval
