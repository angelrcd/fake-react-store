import React, { useMemo, useState } from 'react'
import { useGetProducts } from '../modules/useGetProducts'
import { Route, Routes } from 'react-router-dom'
import SearchFilterBar from './SearchFilterBar'
import StoreMainBody from './StoreMainBody'
import Cart from './Cart'
import sortBy from '../modules/sortProducts'


export default function Store() {
  const {products, isLoading, error} = useGetProducts()
  const [cart, setCart] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [categoryFilterValue, setCategoryFilterValue] = useState('none')
  const [sortType, setSortType] = useState('category')

  const filteredProduct = useMemo(()=>{
    if(!products) return;

    return products
    // Filtra por busqueda y categoría
    .filter(product => {
      const searchToCompare = product.title + product.brand + product.category;

      return searchToCompare.toUpperCase().includes(searchValue.toUpperCase()) &&  (categoryFilterValue==="none" || product.category === categoryFilterValue)     
    })
    .sort((a,b)=> (sortBy(sortType))(a,b))
  }, [products,searchValue, categoryFilterValue, sortType])

  const addItemToCart =(newItem)=>{
    const updatedCart = cart.slice()
    updatedCart.push(newItem)
    setCart(updatedCart)
  }

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
          cart={cart}
        />
        <Routes>
          <Route path="/products" element={
            <StoreMainBody 
            products={filteredProduct}
            addItemToCart={addItemToCart} />
          } />
          <Route path="/cart" element={
            <Cart cartItems={cart} />
          } />
        </Routes>
        
      </>
    )
  }
}
