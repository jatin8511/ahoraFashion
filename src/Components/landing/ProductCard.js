import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    return (
        <>
            <div className='col-span-3'>
                <Link>
                    <div className="img">
                        <img className='h-full ww-full' src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2033-02-M8_360x.jpg?v=1687286460" alt="" />
                    </div>
                    <h3>Title</h3>
                    <p>rs.<del>9999</del>rs.<span>999</span></p>
                </Link>
            </div>
        </>
    )
}

export default ProductCard
