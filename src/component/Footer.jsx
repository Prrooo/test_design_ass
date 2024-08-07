import React from 'react'

const Footer = ({nextPage, prevPage}) => {
  return (
    <div className='w-full h-[5vw] bg-gray-200 flex justify-between items-center px-[2vw]'>
        <button className='px-10 py-2 bg-blue-500 text-white rounded-md' onClick={prevPage}>
            back
        </button>
        <button className='px-10 py-2 bg-blue-500 text-white rounded-md' onClick={nextPage}>
            next
        </button>
    </div>
  )
}

export default Footer