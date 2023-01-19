import React, { useEffect, useState } from 'react'
import "./Searchbar.css"

const Searchbar = ({queryHandler,optionHandler}) => {
    const [input,setInput] = useState('')
    const [option,setOption] = useState('')
    
    const handleInputChange=(e)=>{
        setInput(e.target.value)
    }
    const handleOptionChange=(e)=>{
        setOption(e.target.value)
    }
    useEffect(()=>{
        optionHandler(option)
        queryHandler(input)
    },[input,queryHandler,optionHandler,option])

  return (
    <div>
        <label>Search By title or ID :</label>
        <input type="text" value={input} onChange={handleInputChange} placeholder='Search here' />
        <select name="" onChange={handleOptionChange}>
            <option value="title">Title</option>
            <option value="_id">Id</option>
        </select>
    </div>
  )
}

export default Searchbar