import React from "react";
import { Box, Heading, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import {app as firebase} from './firebase.js';
import { useState } from "react";

 const UserLogin = () => {
  const [num, setNum] = useState("");

  const handleClick = (e) => {};
  console.log(num);
  return (
    <Box
      height={"50%"}
      textAlign={"center"}
      p="10px"
      border={"3px solid gray"}
      margin="auto"
      marginTop={"60px"}
      alignItems={"center"}
      width={"40%"}
    >
      <Box m={5}>
        <Heading>LOGIN / REGISTER</Heading>
      </Box>
      <Box m={5}>
        <Input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter Email ID "
        />
      </Box>
      <Box m={5}>
        <Input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter Password"
        />
      </Box>
      <Box m={5}>
        <Button bg={"pink.600"} onClick={handleClick}>
          PROCEED
        </Button>
      </Box>
      <Box>
        <Link to="/SignUp" color={"blue.500"}>
          Sign Up
        </Link>
      </Box>
    </Box>
  );
};

export default UserLogin