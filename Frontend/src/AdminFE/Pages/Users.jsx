import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import "../css/users.css"
import Singleuser from './Singleuser'

const Users = () => {
  const [data,setData]= useState([])
  const [change,setChange] = useState(false)

  const getusers = () => {
    return axios.get(`https://fair-pear-salmon-suit.cyclic.app/users`)
      .then((res) => setData(res.data))
      .then((err) => console.log(err))
  }
  useEffect(()=>{
    getusers()
  },[change])

  const changingpage=()=>{
    setChange(!change)
  }


  return (
    <div>
      <Navbar />Users
      <div className='user-table'>
      <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
      <Th>sr.no.</Th>
        <Th>id</Th>
        <Th>name</Th>
        <Th>block user</Th>
        <Th>delete user</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        data.length>0&&
        data.map((el)=>{
          return<Singleuser key={Math.random()*100+Date.now()} {...el}  changingpage={changingpage} />
        })
      }
     
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
      </div>
      </div>
  )
}

export default Users