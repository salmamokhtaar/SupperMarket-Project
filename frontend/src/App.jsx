import React from 'react'
import Home from './pages/Home'
import Customers from './pages/Customers'
import {Route , Routes} from 'react-router-dom'
import AddCustomer from './pages/AddCustomer'
import Update from './pages/Update'
function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/customers' element={<Customers/>} />
    <Route path='/AddCustomer' element={<AddCustomer/>} />
    <Route path='/update/:id' element={<Update/>} />

    </Routes>
  )
}

export default App
