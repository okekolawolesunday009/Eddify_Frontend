import React, { useState } from 'react'
import Input from './Input'

export default function Searchs() {

    const handleChange = (e) =>{
        setFormData((prev) =>({
          ...prev,
          [e.target.id] : e.target.value
        }))
      }
      const [formData, setFormData] = useState({
        search: ""
   })
   const {search} = formData
  return (
    <div>
          <div className="hidden lg:flex">
           <Input
            type="text" 
            // icon= {<img src={user} alt="email"/>} 
            placeholder="Search Course" 
            id="search" 
            value={search} 
            name="search"
            onChanged ={handleChange} />
           </div>
      
    </div>
  )
}
