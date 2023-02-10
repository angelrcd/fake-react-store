import React, { useMemo, useState, useEffect } from 'react'
import { useGetProducts } from '../modules/useGetProducts'
import { Route, Routes } from 'react-router-dom'
import SearchFilterBar from './SearchFilterBar'
import StoreMainBody from './StoreMainBody'
import Cart from './Cart'
import sortBy from '../modules/sortProducts'

const store = window.localStorage
const initial = store["cart"] ?? "[]"
console.log(initial)


export default function Store() {
  const {products, isLoading, error} = useGetProducts()
  const [cart, setCart] = useState(JSON.parse(initial))
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
  
  const removeItemFromCart =(itemToRemove)=>{
    const updatedCart= structuredClone(cart)
    let indexToRemove = updatedCart.findIndex(item => item.id === itemToRemove.id)
    if (indexToRemove !== -1) {
      updatedCart.splice(indexToRemove, 1)
    }
    setCart(updatedCart)
  } 

  const increaseNumberOfItemInCart=(itemToIncrease)=>{
    const updatedCart= structuredClone(cart)
    let indexToRemove = updatedCart.findIndex(item => item.id === itemToIncrease.id)
    const itemToAdd = structuredClone(updatedCart[indexToRemove])
    updatedCart.push(itemToAdd)
    setCart(updatedCart)
  }

  const removeAllItemsOfOneId=(itemToRemove)=>{
    const updatedCart= structuredClone(cart)
    const indexes = []

    //get indexes positions to delete
    for(let i= 0; i<updatedCart.length;i++){
      if(updatedCart[i].id === itemToRemove.id){
        indexes.push(i)
      }
    }

    console.log(indexes);

    //remove the elements from indexes, starting from the last
    for (let i = 0; i < indexes.length; i++) {
      const indexToRemove = indexes.at(-i-1)
      console.log(indexToRemove);    
      updatedCart.splice(indexToRemove, 1)
    }

    setCart(updatedCart)
  }


  const emptyCart =()=> {
    setCart([])
  }


  useEffect(()=>{
    store.setItem("cart", JSON.stringify(cart))
  }, [cart])

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
            <Cart cartItems={cart} 
            emptyCart={emptyCart}
            removeItemFromCart={removeItemFromCart}
            increaseNumberOfItemInCart={increaseNumberOfItemInCart}
            removeAllItemsOfOneId={removeAllItemsOfOneId}
            />
          } />
        </Routes>
        
      </>
    )
  }
}
