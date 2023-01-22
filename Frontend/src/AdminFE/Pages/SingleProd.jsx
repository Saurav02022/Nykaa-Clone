import { Button, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../css/Singleprod.css"

export const SingleProd = (el) => {
  const [change, setChange] = useState(false)
  const toast = useToast()

  // useEffect(()=>{
  //   setChange(change)
  // },[change])

  // const handleDelete = (id) => {
  //   axios.delete(`https://fair-pear-salmon-suit.cyclic.app/face/delete/${id}`)
  //     .then((res) => {
  //       setChange(!change)
  //       toast({
  //         title: 'Product Deleted !',
  //         description: "Delete product from backend.",
  //         status: 'success',
  //         duration: 5000,
  //         isClosable: true,
  //       })
  //     })
  //     .catch((err) => {
  //       toast({
  //         title: "error while Deleting product",
  //         description: err.message,
  //         status: 'error',
  //         duration: 5000,
  //         isClosable: true,
  //       })
  //     })
  // }
  // console.log(el)
  const handle=(id)=>{
    el.handleDelete(id)
  }

  return (
    <div className='sing-prod'>
      <div><h1>Prod. ID: {el._id}</h1></div>
      <div><img src={el.imgsrc} className='prod-img-single' alt="" /></div>
      <div className='single-prod-title'>
        <p>{el.title}</p>
      </div>
      <div className='prod-btn'>
        <button className='single-prod-update' style={{ marginRight: "7px" }}
          backgroundColor="orange"
          borderRadius={'none'}
          color={'white'}
        >Update</button>
        <button
           className='single-prod-delete'
          onClick={() => handle(el._id)}
        >Delete</button>
      </div>
    </div>
  )
}
