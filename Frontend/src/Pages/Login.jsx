import React from 'react'
import {Box, Heading, Input, Button, InputGroup, InputRightElement,   } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import {USER_LOGIN_SUCCESS} from "../Redux/LogReducer/actionType";
import { useDispatch } from 'react-redux';
import { login } from '../Redux/LogReducer/action';

export const Login = () => {
const [show, setShow] = React.useState(false)
const handlePass = () => setShow(!show)

   const dispatch = useDispatch()
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const toast = useToast();
const handleClick = (e)=>{
  
     
         dispatch(login({email, password}))
         .then((r)=>{
           if(r.type=== USER_LOGIN_SUCCESS){
            console.log("Login Success")
            toast({
              // title: 'Login Successfull.',
               render: () => (
                  <Box color='white' p={3} bg='pink.500'>
                    Login Successfull.
                  </Box>)
             })
             navigate("/")
           }
       }).catch((err)=>{
         toast({
            title: 'Login Successfull.',
            //description: "We've created your account for you.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
            console.log(err)
       })
      //  setEmail("")
      //  setPassword("");
      
   
    }

    return (
    <Box shadow={"md"} textAlign={"center"} height={"50%"} p="10px" border={"1px solid gray"} margin="auto" marginTop={"60px"} marginBottom={10} alignItems={"center"} width={"30%"}>
        <Box m={5}>
        <Heading fontSize={"18px"}>LOGIN / REGISTER</Heading>
        </Box>
         <Box m={5}>
            <Input type="text"   value={email}  onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email ID ' />
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
    </InputGroup> </Box>
         <Box m={5} >
            <button style={{color: "#FFFFFF", backgroundColor: "#FC2779", padding: "2px 20px", fontSize: "16px"}} onClick= {handleClick} >
                PROCEED
            </button>
         </Box>
         <Box mt="-5px">
          <Link to="/SignUp" color={"blue.500"}>If you don't have an account SIGNUP</Link>
         </Box>
    </Box>
  )
}
