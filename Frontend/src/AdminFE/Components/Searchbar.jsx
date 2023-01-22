import React, { useEffect, useState } from 'react'
import "./Searchbar.css"

const Searchbar = ({queryHandler,optionHandler}) => {
    const [input,setInput] = useState('')
    const [option,setOption] = useState('title')
    
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
    <div className='searchbarcomp'>
        <label className='head-titles'>Search By title or ID: </label>
        <div><input style={{border:"2px solid grey",borderRadius:"4px"}} type="text" value={input} onChange={handleInputChange} placeholder='Search here' /></div>
        <div>
        <select style={{border:"2px solid grey",borderRadius:"4px"}} name="" onChange={handleOptionChange}>
            <option value="title">Title</option>
            <option value="_id">Id</option>
        </select>
        </div>
    </div>
  )
}

export default Searchbar