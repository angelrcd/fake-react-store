import React from 'react'
import ThemeButton from './ThemeButton'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar bg-base-200 border-b border-b-base-300">
      <div className="navbar-start">
        <Link to="/">
          <h1 className='hidden md:flex btn btn-ghost text-2xl'>Fake <strong className='text-primary'> &nbsp;React&nbsp; </strong> Store</h1>
          <h1 className='md:hidden btn btn-ghost text-lg normal-case'>Home</h1>
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="flex items-center">
          <Link to="/about">
            <li className='btn btn-ghost normal-case text-lg'>About me</li>
          </Link>
          <Link to="/store">
            <li className='btn btn-ghost normal-case text-lg'>Products</li>          
          </Link>
          <div className="divider divider-horizontal"></div>
          <ThemeButton />
        </ul>
      </div>
    </nav>
  )
}
 