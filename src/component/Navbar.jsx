import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-2 text-white mx-auto justify-center pt-[2vw] px-[2vw]'>
        <div className='bg-blue-600 px-6 py-4 rounded-md text-xl'>1 General Information</div>
        <div className='bg-blue-600 px-6 py-4 rounded-md text-xl '>2 Service Details</div>
        <div className='bg-blue-600 px-6 py-4 rounded-md text-xl '>3 Get Quote</div>
    </div>
  )
}

export default Navbar