import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import SingleUser from '../Components/SingleUser'
import "../css/users.css"

const Users = () => {
  const [data,setData] = useState([])
  const getprods = () => {
    return axios.get(`http://localhost:5000/users/`)
      .then((res) => setData(res.data))
      .then((err) => console.log(err))
  }
  useEffect(()=>{
    getprods()
  },[])
  console.log(data)

  return (
    <div>
      <Navbar />

      <div className='user-table'>
      <TableContainer>
  <Table size='l' width={'60%'} margin='auto'>
    <Thead>
      <Tr>
        <Th>Sr. No.</Th>
        <Th>Id</Th>
        <Th >User Name</Th>
        <Th >Block User</Th>
        <Th >Delete User</Th>
      </Tr>
    </Thead>
    <Tbody>
    {
        data.length>0&&
        data.map((el)=>{
          return(<SingleUser key={Math.random()*100}  {...el}/>)
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
{/* 
      <table className='user-table'>
        <thead>
        <tr>
        <td>No</td>
        <td>Id</td>
        <td>Name</td>
        <td>Block User</td>
        <td>Delete User</td>
      </tr>
        </thead>
        <tbody>
        {
        data.length>0&&
        data.map((el)=>{
          return(<SingleUser key={Math.random()*100}  {...el}/>)
        })
      }
        </tbody>
      </table> */}
      </div>
  )
}

export default Users