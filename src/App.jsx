import Navbar from './components/Navbar'
import Store from './components/Store'
import LandingBody from './components/LandingBody'
import { Routes, Route, Navigate } from 'react-router-dom'

const example={
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
};

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingBody />} />
        <Route path='/store' element={<Store />} />
      </Routes>
    </>
  )
}

export default App
