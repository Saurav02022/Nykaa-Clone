/* eslint-disable no-mixed-operators */
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
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Signup } from "../../Redux/LogReducer/action";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RESET } from "../../Redux/LogReducer/actionType";

const UserSignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();
  const [show, setShow] = React.useState(false);

  const handlePass = () => setShow(!show);
  const dispatch = useDispatch();

  const { signupLoading, signupSuccess, signupError } = useSelector(
    (store) => store.AuthenticationReducer
  );

  const signupBtnHandle = () => {
    if (!name) {
      toast({
        title: "invalid name",
        description: "Please Enter Your Name",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    if (!phone) {
      toast({
        title: "invalid phone Number",
        description: "Please Enter Your Phone Number",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    if (phone.length !== 10) {
      toast({
        title: "invalid phone",
        description: "phone number should be 10 digit number",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
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
        description: "Please include @ in your email address",
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
    if (password.length >= 8 === false) {
      toast({
        title: "invalid password",
        description: "password length should be greater than eight characters",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    const data = {
      name,
      email,
      phone,
      password,
    };
    dispatch(Signup(data));
  };

  if (signupSuccess) {
    toast({
      description: signupSuccess,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    dispatch({ type: RESET });
    setTimeout(() => {
      navigate("/user/login");
    }, 1500);
  }

  if (signupError) {
    toast({
      description: signupError,
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
          type="text"
          borderColor={"black"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
      </FormControl>
      <FormControl>
        <Input
          required={true}
          type="number"
          borderColor={"black"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Mobile Number"
        />
      </FormControl>

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
        <Flex>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter password"
              borderColor={"black"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                size="md"
                onClick={handlePass}
                backgroundColor={"#FC2779"}
                color="#FFFFFF"
                _hover={{
                  backgroundColor: "#FC2779",
                  color: "#FFFFFF",
                }}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </FormControl>

      <Button
        backgroundColor={"#FC2779"}
        color="#FFFFFF"
        _hover={{
          backgroundColor: "#FC2779",
          color: "#FFFFFF",
        }}
        isLoading={signupLoading}
        loadingText="Submitting"
        onClick={signupBtnHandle}
      >
        PROCEED
      </Button>

      <Flex gap="1" justifyContent="center">
        <Text>Already a user ?</Text>
        <Link to="/user/login">
          <Text color="#FC2779">Sign in</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default UserSignUp;
