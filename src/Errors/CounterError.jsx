import React from 'react'
import { Link } from 'react-router-dom'

const CounterError = () => {
  return (

    <div className=' text-white bg-bug bg-center h-screen bg-no-repeat bg-cover md:bg-top'>
    <div className='flex flex-col justify-center w-full  items-center h-full bg-black/50 '>
      <h1 className='text-2xl text-center '> We have a bug in the Counter.</h1>
      <h1 className='text-4xl text-center font-bold p-4'>Call the Exterminator !!!</h1>
      <Link to='/' className='border px-4 py-2 hover:bg-white hover:text-black'>Go Home</Link>
      
    </div>
    </div>
  )
}

export default CounterError
