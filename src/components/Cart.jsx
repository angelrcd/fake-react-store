import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import CartItemCard from './CartItemCard'
import groupsameCartItems from '../modules/groupSameCartItems'
import { list } from 'postcss'

function Cart( { cartItems,emptyCart, removeItemFromCart, increaseNumberOfItemInCart, removeAllItemsOfOneId } ) {

  const cart = useMemo(()=>{
    const itemsGrouped = groupsameCartItems(cartItems)
    return itemsGrouped.sort((a,b)=> a.id- b.id)
  }, [cartItems])

  const cartSize = cartItems.length
  const totalPrice = cartItems.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue.price
  }, 0)

  const cartItemsList = (
    <ul>
      {cart.map(item => <li><CartItemCard item={item} removeItemFromCart={removeItemFromCart}
       increaseNumberOfItemInCart={increaseNumberOfItemInCart} removeAllItemsOfOneId={removeAllItemsOfOneId} /></li>)}
    </ul>
  )

  const emptyCartMessage = (
    <>
      <p>It seems your cart is empty</p>
        <Link to="/store/products">
          <span className='btn btn-link normal-case px-0'>Buy products here</span>
        </Link>
    </>
    
  )

  return (
    <>
      <div className='py-10 px-16 '>
        <h2 className='text-3xl font-bold mb-4'>Cesta ({cartSize})</h2>
        <button onClick={emptyCart} class="btn btn-error">Borrar todo</button>
      </div>

      <div className='flex gap-5'>
        <div className='ml-10 py-10 px-16 w-2/3 bg-base-300'>
          {cartSize===0 ? emptyCartMessage : cartItemsList}
        </div>

        <div className='mx-10 py-10 px-16 w-1/3 h-fit bg-base-300'>
          <span className='text-2xl'>Resumen del pedido</span>
          <p>Subtotal: {cartSize} artículo(s)</p>
          <div className='flex justify-between'>
            <p>Total: </p>
            <p className='text-xl font-semibold'>Precio: ${totalPrice}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart