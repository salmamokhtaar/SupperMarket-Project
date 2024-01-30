import React from 'react'
import {Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-yellow-700 w-full text-white flex justify-between p-5 '>
      <Link to={"/"} className='text-3xl font-semibold'>Sara Market</Link >
      <Link to="/"  className='hover:cursor-pointer text-2xl hover:underline' >Home</Link>
      <Link to="/"  className='hover:cursor-pointer text-2xl hover:underline' >About</Link>
<Link to="/customers" className='hover:cursor-pointer text-2xl hover:underline' >Customers</Link>
<Link to="/AddCustomer" className='hover:cursor-pointer text-2xl hover:underline' >NewCustomer</Link>
<div>
    <button className='border-2 text-2xl border-white px-5 py-2  mr-4' >SignUp</button>
<button className='boder-2 border-white text-2xl bg-yellow-600 px-5 py-3'>Login</button>
</div>
    
    </div>
  )
}

export default Header
