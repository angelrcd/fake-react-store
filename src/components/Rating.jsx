import React from 'react'

export default function Rating( {product} ) {
  const arr = Array(10).fill(0)
  const position = Math.floor(product.rating*100/500*10)
  arr[position-1] = 1

  return (
    <div className='flex items-center gap-1'>
      <div className="rating rating-sm rating-half px-0">
        <input type="radio" name={"rating-"+product.id} className="rating-hidden" />
        {arr.map((element, index) => {
          if(arr[index]){
            return <input key={product.id + index} type="radio" defaultChecked name={"rating-"+product.id} className={`bg-primary mask mask-star-2 ${index % 2 === 0 ? 'mask-half-1': 'mask-half-2'}`} />
          }
          return <input key={product.id + index} type="radio" name={"rating-"+product.id} className={`bg-primary mask mask-star-2 ${index % 2 === 0 ? 'mask-half-1': 'mask-half-2'}`} />
        })}
      </div>
      <p className='text-sm'>({product.rating})</p>
    </div>
  )
}
