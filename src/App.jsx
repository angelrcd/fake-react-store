import Navbar from './components/Navbar'
import Store from './components/Store'
import LandingBody from './components/LandingBody'
import { Routes, Route, Navigate } from 'react-router-dom'

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
