import React from 'react'
import {Routes, Route} from "react-router-dom";
import { Login } from './Login';
import { SignUp } from './SignUp';

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route />

    </Routes>
  )
}
