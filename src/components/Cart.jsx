import React, { useMemo } from 'react'
import CartItemCard from './CartItemCard'
import groupsameCartItems from '../modules/groupSameCartItems'
import { list } from 'postcss'

function Cart( { cartItems,emptyCart, removeItemFromCart } ) {

  const cart = useMemo(()=>{
    return groupsameCartItems(cartItems)
  }, [cartItems])

  const cartSize = cartItems.length

  return (
    <>
      <div className='py-10 px-16 '>
        <h2 className='text-3xl font-bold mb-4'>Cesta ({cartSize})</h2>
        <button onClick={emptyCart} class="btn btn-error">Borrar todo</button>
      </div>

      <div className='flex gap-5'>
        <div className='ml-10 py-10 px-16 w-2/3 bg-base-300'>
          <ul>
            {cart.map(item => <li><CartItemCard item={item} removeItemFromCart={removeItemFromCart} /></li>)}
          </ul>
        </div>

        <div className='mx-10 py-10 px-16 w-1/3 h-fit bg-base-300'>
          <span className='text-2xl'>Resumen del pedido</span>
          <p>Subtotal: {cartSize} artículo(s)</p>
          <div className='flex justify-between'>
            <p>Total: </p>
            <p className='text-xl font-semibold'>Precio</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart