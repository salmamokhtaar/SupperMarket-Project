import React from 'react'
import Header from '../Components/Header'
import {Link} from 'react-router-dom'

function Customers(props) {
  return (
    <div>
      
        <div className='w-[300px] text-white pt-5 px-9 h-[220px] bg-yellow-600 mt-3 rounded border-2 border-gray-300'>
      <p className='text-2xl '> Name: {props.Name}</p>
      <p className='text-2xl '>Tell:   {props.Tell}</p>
      <p className='text-2xl '>Items : {props.items}</p>
      <p className='text-2xl '>Price :  {props.price}</p>
        
      <Link to={`/update/${props.id}`}>

<i class="fa-solid  text-2xl hover:cursor-pointer text-black ml-[220px]   fa-pen"></i>
</Link>

      <i onClick={props.handleDelete} class="fa-solid   text-2xl hover:cursor-pointer text-black ml-[220px]   fa-trash"></i>
       
       
      <button className=''> </button>

      </div>
    </div>
  )
}

export default Customers
