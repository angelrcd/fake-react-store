import React from 'react'

export default function StoreMainBody({ products }) {
  return (
    <ul>
      {products.map(product => {
        return <li key={product.id}>{product.title} {product.rating} ${product.price}</li>
      })}
    </ul>
  )
}
