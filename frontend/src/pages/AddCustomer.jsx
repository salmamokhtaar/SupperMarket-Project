import React from 'react'
import Header from '../Components/Header'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function AddCustomer() {


  const [Name,setName] = useState("")
const [Tell, setTell] = useState("")
const [items, setItems] = useState("")
const [price, setPrice] = useState("")
const navigate = useNavigate()

const handleRegisteredCustomer =(e)=>{
  axios.post("http://localhost:4000/supermarket/post", {
    "Name" : Name,
    "Tell" : Tell,
    "items" : items,
    "price" : price
  }).then((response)=>{
    alert("Customer has been Registered")
    navigate("/")
  }).catch((error) => console.log(error))
}

useEffect(() =>{
  document.body.style.backgroundColor = '#FFE7C1'
})



  return (
    <div>
        <Header/>
      <div class="shadow-xl shadow-gray bg-yellow-700 w-[400px] h-[330px] absolute left-[600px] top-[130px]">
      
      <div class="p-10">
        <form>
          <input  value={Name} onChange={(e)=>setName(e.target.value)}
           className="" type="text" placeholder="Enter Name" />
          <br />
          <br />
    <input  value={Tell} onChange={(e) => setTell(e.target.value)}
     className="" type="text" placeholder="Enter Tell" />
    <br />
          <br />
    <input  value={items} onChange={(e) => setItems(e.target.value)}
    className="" type="text" placeholder="Enter Item" />
    <br />
          <br />
    <input  value={price} onChange={(e) => setPrice(e.target.value)}
      className="" type="text" placeholder="Enter Price" />
    
        </form>
        <div class="flex justify-between mt-8">
          <button onClick={handleRegisteredCustomer}
          class="bg-yellow-600 rounded-full text-white px-3">Save</button>
          </div>

</div>
    </div>
    </div>
  )
}

export default AddCustomer
