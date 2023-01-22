import { Button, Td, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Singleuser = (el) => {
  const [change,setChange] = useState(false)
  console.log(el)
  useEffect(()=>{

  },[change])
const deleteuser=(id)=>{
  axios.delete(`https://fair-pear-salmon-suit.cyclic.app/users/delete/${id}`)
  .then((res)=>{
    setChange(!change)
    console.log(res.data)})
  .then((err)=>console.log(err))
}
const blockUser = (id) => {
  axios.delete(`https://fair-pear-salmon-suit.cyclic.app/admins/${id}`)
  .then((res)=>{
    setChange(!change)
    console.log(res.data)})
  .then((err)=>console.log(err))
}
console.log(change)
  return (
      <Tr>
        <Td>{el.index+1}</Td>  
        <Td>{el._id}</Td>
        <Td>{el.name}</Td>
        <Td><Button onClick={()=>blockUser(el._id)}>Block</Button></Td>
        <Td><Button onClick={()=>deleteuser(el._id)}>Delete</Button></Td>
      </Tr>
  )
}

export default Singleuser