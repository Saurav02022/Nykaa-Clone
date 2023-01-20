import React from 'react'
import {Box, Heading, Input, Button, InputGroup, InputRightElement,   } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
// import {app as firebase} from './firebase.js';
import { useState } from 'react';
import {postdata} from "../Redux/LogReducer/action";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const SignUp = () => {
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const navigate = useNavigate();
const [show, setShow] = React.useState(false)
  const handlePass = () => setShow(!show)
const dispatch = useDispatch();
const handleClick = (e)=>{
  
      dispatch(postdata({email, name, password, phone}))
      .then((res)=>{
         console.log("User Registered Successfully")
      // navigate("/login")
      })
        
    }


  return (
    <Box height={"50%"} textAlign={"center"} p="10px" border={"3px solid gray"} margin="auto" marginTop={"60px"} marginBottom={"20px"} alignItems={"center"} width={"30%"} >
        <Box m={5}>
        <Heading fontSize={"18px"}>LOGIN / REGISTER</Heading>
        </Box>
         <Box m={5}>
            <Input type="text" borderColor={"black"} value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter Your Name' />
         </Box>
         <Box m={5}>
            <Input type="number" borderColor={"black"} value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Enter Mobile Number' />
         </Box>
         <Box m={5}>
            <Input type="email" borderColor={"black"} value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email ID' />
         </Box> 
         <Box m={5}>
         <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handlePass}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
         </Box>
         <Box m={5} >
            <Button bg={'pink.600'} border={"2px solid"} borderColor={"black"} onClick= {handleClick} >
                PROCEED
            </Button>
         </Box>
         <Box>
          <Link to="/Login" color={"blue.500"}>Sign in</Link>
         </Box>
    </Box>
  )
}
