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

  const handleClick = () => {
    const data = {
      name,
      phone,
      email,
      password,
    };
    if (name && phone && email) {
      if (password.length > 8) {
        dispatch(Signup(data));
      } else {
        toast({
          description: "password length should be greater than 8 characters",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        description: "Please fill all details",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  if (signupSuccess !== "") {
    toast({
      description: signupSuccess,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/user/login");
  }

  if (signupError !== "") {
    toast({
      description: signupError,
      status: "error",
      duration: 4000,
      isClosable: true,
    });
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
        onClick={handleClick}
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
