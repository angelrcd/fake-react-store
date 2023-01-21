import React from 'react'
import Rating from './Rating'

export default function ProductCard( {product} ) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={product.thumbnail} alt="Shoes" /></figure>
      <div className="card-body gap-0">
        <p className='text-xs'>{product.category}</p>
        <div className='flex w-full justify-between items-center'>
          <h2 className="card-title">{product.title}</h2>
          <p className='text-end text-xl'>${product.price}</p>
        </div>
        <div className="card-actions mt-3 items-end justify-between">
          <div>
            <p><Rating product={product} /></p>
            <div className='btn btn-link text-[#5ECBF9] p-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p>More info</p>
            </div>
          </div>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
