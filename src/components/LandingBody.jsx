import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingBody() {
  return (
    <div className='py-20 px-14 lg:px-44 flex flex-col gap-6'>
      <h1 className='font-bold text-4xl'>FAKE REACT STORE</h1>
      <img className='max-w-2xl' src="/bg-image.png" alt="cartoon woman shopping" />
      <p className='text-lg'>E-commerce front end made using React, data from ñsadfjasf API</p>
      <Link to="/store">
        <button className='btn btn-primary w-fit btn-lg'>GET STARTED &#9658;</button>
      </Link>
    </div>
  )
}
