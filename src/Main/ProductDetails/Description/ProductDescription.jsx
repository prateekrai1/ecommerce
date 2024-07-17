import React from 'react'

const ProductDescription = () => {
  return (
    <div>
        <div className='flex flex-col justify-evenly'>
            <h1 className='text-xl font-bold p-2'>Description</h1>
            <h2 className='text-lg text-red-500 p-2'>Category</h2>
            <p className='text-lg p-2'>Regular-fit jacket in coated, woven fabric with a comfortable, classic silhouette. Collar, zipper at front, welt front pockets, and an inner pocket with snap fastener. Long sleeves and wide ribbing at cuffs and hem.</p>
            <p className='text-lg p-2'><span className='font-bold pr-2'>Model size:</span>The model is 186cm/6'1" and wears a size M</p>
            <p className='text-lg p-2'><span className='font-bold pr-2'>Length:</span>Regular Length</p>
            <p className='text-lg p-2'><span className='font-bold pr-2'>Fit:</span>Regular Fit</p>
        </div>
    </div>
  )
}

export default ProductDescription