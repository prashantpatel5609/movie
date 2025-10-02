import React from 'react'
import gif from "/public/loader.gif"
const Loader = () => {
  return (
    <div className='w-full h-full bg-black flex items-center justify-center'>
      <img className='h-[50%] object-cover' src={gif} alt="" />
    </div>
  )
}

export default Loader
