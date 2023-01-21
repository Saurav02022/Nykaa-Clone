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
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { USER_LOGIN_SUCCESS } from "../../Redux/LogReducer/actionType";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/LogReducer/action";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handlePass = () => setShow(!show);

  const handleClick = () => {
    dispatch(login({ email, password }))
      .then((r) => {
        if (r.type === USER_LOGIN_SUCCESS) {
          console.log("Login Success");
          toast({
            // title: 'Login Successfull.',
            render: () => (
              <Box color="white" p={3} bg="pink.500">
                Login Successfull.
              </Box>
            ),
          });
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
      <Input
        required={true}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email ID "
      />

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

      <Button
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
