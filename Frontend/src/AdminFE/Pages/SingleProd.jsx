import { Button, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../css/Singleprod.css"

export const SingleProd = (el) => {
  const [change, setChange] = useState(false)
  const toast = useToast()

  useEffect(()=>{
    setChange(change)
  },[change])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/face/delete/${id}`)
      .then((res) => {
        setChange(!change)
        toast({
          title: 'Product Deleted !',
          description: "Delete product from backend.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      })
      .catch((err) => {
        toast({
          title: "error while Deleting product",
          description: err.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }

  return (
    <div className='sing-prod'>
      <div><h1>Prod. ID: {el._id}</h1></div>
      <div><img src={el.imgsrc} style={{ width: "130px" }} alt="" /></div>
      <div>
        <p>{el.title}</p>
      </div>
      <div className='prod-btn'>
        <Button style={{ marginRight: "7px" }}
          backgroundColor="orange"
          borderRadius={'none'}
          color={'white'}
        >Update</Button>
        <Button
          backgroundColor="red.600"
          borderRadius={'none'}
          color={'white'}
          style={{ border: "1px solid grey" }}
          onClick={() => handleDelete(el._id)}
        >Delete</Button>
      </div>
    </div>
  )
}
