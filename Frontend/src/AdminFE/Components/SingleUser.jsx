import { Button, Td, Tr } from '@chakra-ui/react'
import React from 'react'

const SingleUser = (el) => {
    console.log(el)
  return (
    <Tr>
    <Td>1</Td>
    <Td>{el._id}</Td>
    <Td >{el.name}</Td>
    <Td ><Button>Block</Button></Td>
    <Td ><Button>Delete</Button></Td>
  </Tr>
  )
}

export default SingleUser