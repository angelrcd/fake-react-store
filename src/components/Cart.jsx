import React, { useMemo } from 'react'
import groupsameCartItems from '../modules/groupSameCartItems'

function Cart( {cartItems} ) {

  const cart = useMemo(()=>{
    return groupsameCartItems(cartItems)
  }, [cartItems])

  const cartSize = cartItems.length

  return (
    <div className='py-10 px-16'>
      <h1 className='text-3xl font-bold mb-10'>Cart ({cartSize})</h1>
      <ul>
        {cart.map(item =>{
          return <li>{item.title+" "+item.ammount}</li>
        })}
      </ul>
    </div>
  )
}

export default Cart