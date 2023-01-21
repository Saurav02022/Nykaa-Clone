import React from "react";
import {
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useState } from "react";

import { postdata } from "../../Redux/LogReducer/action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const UserSignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = React.useState(false);

  const handlePass = () => setShow(!show);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(postdata({ email, name, password, phone })).then((res) => {
      console.log("User Registered Successfully");
      navigate("/login");
    });
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
        type="text"
        borderColor={"black"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
      />

      <Input
        required={true}
        type="number"
        borderColor={"black"}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter Mobile Number"
      />

      <Input
        required={true}
        type="email"
        borderColor={"black"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email ID"
      />

      <Flex>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter password"
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
        <Text>Already a user ?</Text>
        <Link to="/user/login">
          <Text color="#FC2779">Sign in</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default UserSignUp;
