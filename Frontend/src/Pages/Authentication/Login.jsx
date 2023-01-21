import React from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Flex,
  Text,
  FormHelperText,
  FormErrorMessage,
  FormControl
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { USER_LOGIN_SUCCESS } from "../../Redux/LogReducer/actionType";
import { useDispatch, useSelector } from "react-redux";
import { login, loginRequest } from "../../Redux/LogReducer/action";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const isErrorE = email === ''
  const isErrorPa = password ==="";
const isLoading = useSelector((state)=> state.LogReducer.isAuthLoading);

  const handlePass = () => setShow(!show);

  const handleClick = () => {
    dispatch(loginRequest())
    
    dispatch(login({ email, password }))
      .then((r) => {
        toast({
          // title: 'Login Successfull.',
          render: () => (
            <Box color="white" p={3} bg="pink.500">
              Login Successfull.
            </Box>
          ),
        });
        if (r.type === USER_LOGIN_SUCCESS) {
          // console.log("Login Success");
         const user = r.payload;
         console.log(r.payload)
         localStorage.setItem("user", JSON.stringify(user));
         console.log(user, "user token");
          navigate("/");
        }
      })
      .catch((err) => {
        toast({
          title: "Login Successfull.",
          //description: "We've created your account for you.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        console.log(err);
      });
    //  setEmail("")
    //  setPassword("");
  };

  return (
    <Flex
      maxWidth={"md"}
      margin="auto"
      direction={"column"}
      border={"1px solid gray"}
      boxShadow="md"
      borderRadius="10px"
      marginTop={"5"}
      marginBottom={"5"}
      padding="15px"
      gap="5"
    >
      <Heading fontSize={"18px"}>LOGIN / REGISTER</Heading>
      <FormControl isInvalid={isErrorE}>
<Input
        required={true}
        type="email"
        borderColor={"black"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email ID"
      />
{!isErrorE ? (
        <FormHelperText>
          Enter the Email.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
</FormControl>
     <FormControl isInvalid ={isErrorPa}>
     <InputGroup size="md">
        <Input
          required={true}
          type={show ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button
            size="sm"
            backgroundColor={"#FC2779"}
            color="#FFFFFF"
            _hover={{
              backgroundColor: "#FC2779",
              color: "#FFFFFF",
            }}
            onClick={handlePass}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      {!isErrorPa ? (
        <FormHelperText>
          Enter the Password.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Password is required.</FormErrorMessage>
      )}
     </FormControl>
      

      <Button
      isDisabled={isLoading}
        backgroundColor={"#FC2779"}
        color="#FFFFFF"
        _hover={{
          backgroundColor: "#FC2779",
          color: "#FFFFFF",
        }}
        onClick={handleClick}
      >
        PROCEED
      </Button>

      <Flex gap="1" justifyContent="center">
        <Text>If you don't have an account</Text>
        <Link to="/user/signup">
          <Text color="#FC2779">Signup</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default UserLogin;
