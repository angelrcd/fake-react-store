import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingBody() {
  return (
    <div className='py-20 px-14 lg:px-44 flex flex-col'>
      <h1 className='font-bold text-4xl'>FAKE REACT STORE</h1>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-xl mb-3'>E-commerce front-end made using React, data from the <a className='link' target="_blank" href="https://dummyjson.com/">DummyJSON API</a></p>
          <p className='text-lg'>Frameworks utilized:</p>
          <ul className='list-disc'>
            <li className="link ml-6"><a target="_blank" href="https://reactjs.org/">React</a></li>
            <li className="link ml-6"><a target="_blank" href="https://tailwindcss.com/">TailwindCSS</a></li>
            <li className="link ml-6"><a target="_blank" href="https://daisyui.com/">DaisyUI</a></li>
          </ul>
        </div>
        <img className='max-w-2xl' src="/bg-image.png" alt="cartoon woman shopping" />
      </div>
      <Link to="/store/products">
        <button className='btn btn-primary w-fit btn-lg'>GET STARTED &#9658;</button>
      </Link>
    </div>
  )
}
