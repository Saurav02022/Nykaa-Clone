import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Panel from '../Pages/Panel'
import Products from '../Pages/Products'
import Users from '../Pages/Users'

const Allroutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/panel' element={<Panel />} />
        <Route path='/products' element={<Products />} />
        <Route path='/users' element={<Users />} />
        </Routes>
    </div>
  )
}

export default Allroutes