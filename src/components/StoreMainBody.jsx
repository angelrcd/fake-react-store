import React from 'react'
import ProductCard from './ProductCard'

export default function StoreMainBody({ products }) {
  return (
    <ul className='gallery my-10'>
      {products.map(product => {
        return <li key={product.id}><ProductCard product={product} /></li>
      })}
    </ul>
  )
}
