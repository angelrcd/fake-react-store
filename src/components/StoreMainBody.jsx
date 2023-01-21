import React from 'react'
import ProductCard from './ProductCard'

export default function StoreMainBody({ products }) {
  return (
    <ul>
      {products.map(product => {
        return <li key={product.id}><ProductCard product={product} /></li>
      })}
    </ul>
  )
}
