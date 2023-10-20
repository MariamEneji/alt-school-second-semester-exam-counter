import React from 'react'
import { Link } from 'react-router-dom'


const PageNotFound = () => {
  return (
    <div className=' text-white bg-404 h-screen bg-no-repeat  bg-cover'>

        <div className='flex flex-col justify-center items-center w-full h-full bg-black/50'>
            <h1 className='text-[10rem] font-bold '>404</h1>
        <h1 className='text-4xl'>Sorry. I can't find this page</h1>
      <h1 className='text-xl p-4'> Like nobody can find my face online</h1>
       <Link to='/' className='border px-4 py-2 hover:bg-white hover:text-black'>Go Home</Link> 
        </div>
      
    </div>
  )
}

export default PageNotFound
