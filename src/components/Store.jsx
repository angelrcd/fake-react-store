import React, { useMemo, useState } from 'react'
import { useGetProducts } from '../modules/useGetProducts'
import SearchFilterBar from './SearchFilterBar'
import StoreMainBody from './StoreMainBody'
import sortBy from '../modules/sortProducts'


export default function Store() {
  const {products, isLoading, error} = useGetProducts()
  const [searchValue, setSearchValue] = useState('')
  const [categoryFilterValue, setCategoryFilterValue] = useState('none')
  const [sortType, setSortType] = useState('category')

  const filteredProduct = useMemo(()=>{
    if(!products) return;

    return products.filter(product => {
      const searchToCompare = product.title + product.brand + product.category;

      return searchToCompare.toUpperCase().includes(searchValue.toUpperCase()) &&  (categoryFilterValue==="none" || product.category === categoryFilterValue)     
    }).sort((a,b)=> (sortBy(sortType))(a,b))
  }, [products,searchValue, categoryFilterValue, sortType])

  if(isLoading){
    return <p>Cargando</p>
  }

  if (products){
    return (
      <>
        <SearchFilterBar 
          searchValue={searchValue}
          onSearchTextChange={setSearchValue}
          categoryFilterValue={categoryFilterValue}
          onCategoryFilterChange={setCategoryFilterValue}
          sortType={sortType}
          onSortTypeChange={setSortType}
        />
        <StoreMainBody products={filteredProduct} />
      </>
    )
  }
}
