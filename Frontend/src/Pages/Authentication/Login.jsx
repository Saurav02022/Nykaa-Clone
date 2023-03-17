import React from "react";
import {
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Flex,
  Text,
  FormControl,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/LogReducer/action";
import { RESET } from "../../Redux/LogReducer/actionType";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const { loginLoading, loginSuccess, loginError } = useSelector(
    (state) => state.AuthenticationReducer
  );

  const handlePass = () => setShow(!show);

  const handleClick = () => {
    if (!email) {
      toast({
        title: "invalid email",
        description: "Please Enter Your email address",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    if (!email.includes("@")) {
      toast({
        title: "invalid email",
        description: "Please include @ in Your email address",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    if (!password) {
      toast({
        title: "invalid password",
        description: "Please Enter the password",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    const payload = {
      email,
      password,
    };
    dispatch(login(payload));
  };

  if (loginSuccess === "Wrong Password") {
    toast({
      description: "Wrong Password",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    dispatch({ type: RESET });
    return;
  }

  if (loginSuccess === "Email Address not found") {
    toast({
      description: "Email Address not found",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    dispatch({ type: RESET });
    setTimeout(() => {
      navigate("/user/signup");
    }, 1500);
    return;
  }

  if (loginSuccess === "Login successfully") {
    toast({
      description: "Login successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    setTimeout(() => {
      navigate("/face");
    }, 1500);
    return;
  }

  if (loginError) {
    toast({
      description: loginError,
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    return;
  }

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
      <FormControl>
        <Input
          required={true}
          type="email"
          borderColor={"black"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email ID"
        />
      </FormControl>
      <FormControl>
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
      </FormControl>
      <Button
        isLoading={loginLoading}
        loadingText="Loading"
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
