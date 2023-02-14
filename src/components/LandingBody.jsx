import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingBody() {
  return (
    <div className='py-20 px-14 lg:px-44 flex flex-col gap-6'>
      <h1 className='font-bold text-4xl'>FAKE REACT STORE</h1>
      <img className='max-w-2xl' src="/bg-image.png" alt="cartoon woman shopping" />
      <p className='text-lg'>E-commerce front-end made using React, data from the <a className='link' target="_blank" href="https://dummyjson.com/">DummyJSON API</a></p>
      <p className='text-lg'>Frameworks utilized:</p>
      <ul>
        <li className="link"><a target="_blank" href="https://reactjs.org/">React</a></li>
        <li className="link"><a target="_blank" href="https://tailwindcss.com/">TailwindCSS</a></li>
        <li className="link"><a target="_blank" href="https://daisyui.com/">DaisyUI</a></li>
      </ul>
      <Link to="/store/products">
        <button className='btn btn-primary w-fit btn-lg'>GET STARTED &#9658;</button>
      </Link>
    </div>
  )
}
