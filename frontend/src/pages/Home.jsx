import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Customers from '../pages/Customers'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Home() {

  const [supermarket, setMarket] =  useState([])

  const getAllCustomers =() => {
      axios.get("http://localhost:4000/supermarket/get").then((response)=>{
        setMarket(response.data)
      }).catch((error) => console.log(error))
  }

  useEffect(() =>{
    getAllCustomers()
  document.body.style.backgroundColor = ''
},[])

// delete
const deleteNote = (id) => {
  axios.delete(`http://localhost:4000/supermarket/delete/${id}`).then(()=>{
    alert(id+ " Customer has been deleted successfully")
    getAllCustomers()
  }).catch((error) => console.log(error))
  }



  return (
    <div>
      <Header/>
    <div className='h-screen grid grid-cols-[300px_300px_300px_300px] justify-evenly '>
  {
    supermarket.map((items) =>{
      return <Customers       
      handleDelete={()=> deleteNote(items._id)}
      id={items._id}  
      Name={items.Name} 
      Tell={items.Tell} 
      items={items.items}
      price={items.price}
      />
    })
  }
  


    </div>
    </div>
  )
}

export default Home
