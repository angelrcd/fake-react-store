import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from './ProductCard'

export default function StoreMainBody({ products }) {
  const [currentPage, setCurrentPage] = useState(0)

  const separateByPages =(products)=>{
    if(products.length===0) return [[]]

    const chunks = [];

    for (let i = 0; i < products.length; i += 10) {
      chunks.push(products.slice(i, i + 10));
    }

    return chunks;
  }

    
  //true moves to next page, false to previous
  const handlePageChange=(movesToNext)=>{
    if(movesToNext){
      return currentPage === productsInPage.length-1 ? null : setCurrentPage(currentPage+1)
    }
    if(!movesToNext){
      return currentPage === 0 ? null : setCurrentPage(currentPage-1)
    }
  }

  useEffect(()=>{
    setCurrentPage(0)
  }, [products])

  const productsInPage = useMemo(()=>{
    return separateByPages(products)[currentPage]
  }, [products, currentPage])

  return (
    <>
      <ul className='gallery my-10'>
        {productsInPage.map(product => {
          return <li key={product.id}><ProductCard product={product} /></li>
        })}
      </ul>

      <div className='flex justify-center mb-5'>
        <div class="btn-group w-fit">
          <button onClick={()=> handlePageChange(false)} class="btn">«</button>
          <button class="btn">Page {currentPage + 1}</button>
          <button onClick={()=>handlePageChange(true)} class="btn">»</button>
        </div>
      </div>
    </>

  )
}
