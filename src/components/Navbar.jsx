import React from 'react'
import ThemeButton from './ThemeButton'

export default function Navbar() {
  return (
    <nav className="navbar bg-base-200 border-b border-b-base-300">
      <div className="navbar-start">
        <h1 className='btn btn-ghost text-2xl'>Fake React Store</h1>
      </div>
      <div className="navbar-end">
        <ul className="flex items-center">
          <li className='btn btn-ghost normal-case text-lg'>About me</li>
          <div className="divider divider-horizontal"></div>
          <ThemeButton />
        </ul>
      </div>
    </nav>
  )
}
 