
import { Link } from 'react-router-dom'
import useCounter from './hooks/useCounter'
import {BiReset} from 'react-icons/bi'
const Counter = () => {

const [counter, increment, decrement, reset, setValue, inputRef] = useCounter(0)

  return (
    <div  className='h-screen bg-purple-200 flex  justify-center items-center flex-col p-10'>

      <div className='flex gap-8 text-white justify-between items-center'>
        <Link to='*' className='bg-purple-400 px-4 py-2 hover:bg-purple-200 border border-purple-400 hover:text-purple-400 '>Not Found</Link>
        <Link to='/bug' className='bg-purple-400 px-4 py-2 hover:bg-purple-200 border border-purple-400 hover:text-purple-400 '>Got a bug</Link>

      </div>

<h2 className='text-[10rem] text-white font-bold p-10'>{counter}</h2>

        <div className='shadow-xl bg-purple-400 shadow-3xl w-full h-20 rounded-3xl px-10 flex justify-between items-center'> 
        

<button className='border w-16 md:w-20 text-4xl flex justify-center items-center h-10 p-2 text-white hover:text-purple-400 hover:bg-white' onClick={increment}>+</button>
<button className='border w-16 md:w-20 text-4xl flex justify-center items-center h-10 p-2 text-white hover:text-purple-400 hover:bg-white' onClick={decrement}>-</button>
<button className='border w-16 md:w-20 text-2xl flex justify-center items-center h-10 p-2 text-white hover:text-purple-400 hover:bg-white' onClick={reset}><BiReset /></button>
        </div>

        <div className='p-4 '>



            <input className='p-2 rounded-l-xl shadow-xl' ref={inputRef}  type="number" placeholder='Set a value'  />

            <button className='border p-2 shadow-xl bg-purple-400 text-white px-3 rounded-r-xl' onClick={setValue}>Set</button>
        </div>
      
    </div>
  )
}

export default Counter
