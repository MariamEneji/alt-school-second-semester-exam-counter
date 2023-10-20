import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Counter from './Counter'
import PageNotFound from './Errors/PageNotFound'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import ErrorBoundary from './Errors/ErrorBoundary'
import CounterError from './Errors/CounterError'

function App() {
  

  return (

   
    <BrowserRouter>
  <Routes>

    <Route path='/' element={
      <ErrorBoundary fallback={<CounterError />}>
        <Counter />
      </ErrorBoundary>
    
    } />
    
    
    <Route path='/*' element={<PageNotFound/>} />
 
  </Routes>
  </BrowserRouter>
  
  )
}

export default App
