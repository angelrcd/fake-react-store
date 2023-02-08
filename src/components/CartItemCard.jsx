import React from 'react'

function CartItemCard({item}) {
  return (
    <div className='w-full h-24 bg-base-200 my-3 flex justify-between items-center'>
      <div>
        <img className='p-3 w-20' src={item.thumbnail} alt="" />
        <p className='self-auto'>{item.title}</p>
      </div>
      <div className='flex items-center'>
        <div className='flex flex-col items-center'>
          <p>${item.price}</p>
          <div className='flex items-center'>
            <span className="btn btn-ghost text-xl">-</span><p className='text-xl'>{item.ammount}</p><span className="btn btn-ghost text-xl">+</span>
          </div>
        </div>
        <button className='btn btn-ghost'>Delete</button>
      </div>
    </div>
  )
}

export default CartItemCard