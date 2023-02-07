import Navbar from './components/Navbar'
import Store from './components/Store'
import LandingBody from './components/LandingBody'
import About from './components/About'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingBody />} />
        <Route path='/store/*' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
