import { useEffect, useState } from 'react'

export function useGetProducts () {
  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100&skip=0')
      .then(res => res.json())
      .then(products => {
        console.log(products)
        return setProducts(products.products)
      }
      )
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    products,
    isLoading,
    error
  }
}
