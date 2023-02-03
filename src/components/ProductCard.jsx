import React from 'react'
import Rating from './Rating'

export default function ProductCard( {product, addItemToCart} ) {
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <figure><img className='max-h-72' src={product.thumbnail} alt={product.title} /></figure>
      <div className="card-body gap-0">
        <p className='text-xs'>{product.category}</p>
        <div className='flex w-full justify-between items-center'>
          <h2 className="card-title max-w-[200px]">{product.title}</h2>
          <p className='text-end text-xl'>${product.price}</p>
        </div>
        <div className="card-actions mt-3 items-end justify-between">
          <div>
            <p><Rating product={product} /></p>
            <label htmlFor={`my-modal-${product.id}`} className='btn btn-link text-[#5ECBF9] p-0'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p>More info</p>
            </label>
          </div>
          <button onClick={()=> addItemToCart(product)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>

      <input type="checkbox" id={`my-modal-${product.id}`} className="modal-toggle" />

        <label htmlFor={`my-modal-${product.id}`} className="modal cursor-pointer">
          <label className="modal-box relative p-0" htmlFor="">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure><img className='h-full' src={product.thumbnail} alt="Album"/></figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-between items-center">
                  <p className='text-xl'>${product.price}</p>
                  <button className="btn btn-primary">BUY NOW</button>
                </div>
              </div>
            </div>
          </label>
        </label>
    </div>
  )
}
