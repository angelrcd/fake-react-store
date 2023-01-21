import React from 'react'

export default function SearchFilterBar() {
  return (
    <div className='navbar bg-base-200 border-b border-b-base-300'>
      <div className="ml-3 navbar-start gap-5">

      <div>
        <label className="label p-0">
          <span className="label-text text-xs">Sort by</span>
        </label>
          <select className="select select-bordered select-sm w-full max-w-xs">
            <option disabled>Pick one</option>
            <option>Rating</option>
            <option>Price</option>
          </select>
      </div>


      <div>
        <label className="label p-0">
          <span className="label-text text-xs">Filter by category</span>
        </label>
          <select className="select select-bordered select-sm w-full max-w-xs">
            <option disabled>Pick one</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
      </div>
      </div>

      <div className='navbar-end'>
        <div className="divider divider-horizontal"></div>
        <div className='btn-group'>
          <label className='cursor-pointer btn btn-primary' htmlFor="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill="currentColor" viewBox="0 0 512 512" stroke="currentColor"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
          </label>
          <input id="search-bar" type="search" placeholder='Search...' className='input rounded-l-none search-bar' />
        </div>
      </div>
    </div>
  )
}

