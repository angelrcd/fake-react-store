import React from 'react'

function Cart( {cartItems} ) {
  return (
    <>
      <h1>Your cart:</h1>
      <ul>
        {cartItems.map(item =>{
          return <li>{item.title}</li>
        })}
      </ul>
    </>
  )
}

export default Cart