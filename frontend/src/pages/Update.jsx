import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
function Update() {

    const [name,setName] = useState("")
    const [tell, setTell] = useState("")
    const [items, setItems] = useState("")
    const [price, setPrice] = useState("")
    const navigate = useNavigate()
    const params = useParams()



    const SinglegetData =() =>{
        axios.get(`http://localhost:4000/supermarket/find/${params.id}`).then((response)=>{
         
        setName(response.data[0].Name)
          setTell(response.data[0].Tell)
          setItems(response.data[0].items)
          setPrice(response.data[0].price)
      }).catch((error) => console.log(error))
  }

  const handleUpdateNote = (event) => {
    event.preventDefault()
    axios.put(`http://localhost:4000/supermarket/update/${params.id}`, {
        "Name" : name,
        "Tell" : tell,
        "items" : items,
        "price" : price
    }).then(()=>{
        alert("Customer has been updated successfully")
        navigate("/")
    }).catch((error) => console.log(error))

}
useEffect(() =>{
    document.body.style.backgroundColor = '#FFE7C1'
    SinglegetData()
  },[]);

  return (
    <div>
      
      <div>
         <h1 className='text-3xl mt-20 text-black font-bold text-center'>Update your Info</h1>

  <div class="shadow-xl shadow-gray bg-pink-400 w-[350px] h-[230px] absolute left-[600px] top-[130px]">
   
      <div class="p-10">
        <form>
          <input value={name} onChange={(e) =>setName(e.target.value)}
           className="" type="text" placeholder="Enter name" />
          <br />
          <br />
    <input value={tell} onChange={(e) =>setTell(e.target.value)}
     className="" type="text" placeholder="Enter tell" />
        <br />
          <br />
          <input value={items} onChange={(e) =>setItems(e.target.value)}
     className="" type="text" placeholder="Enter items" />
       <br />
          <br />
          <input value={price} onChange={(e) =>setPrice(e.target.value)}
     className="" type="text" placeholder="Enter price" />
        </form>
        <div class="flex justify-between mt-8">
    <button onClick={handleUpdateNote}  class="border-2 bg-white border-black rounded text-black px-3">Update</button>    
          </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Update
