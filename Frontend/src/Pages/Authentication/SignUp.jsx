import React from "react";
import { Box, Heading, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import {app as firebase} from './firebase.js';
import { useState } from "react";

 const UserSignUp = () => {
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
          borderColor={"black"}
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter Your Name"
        />
      </Box>
      <Box m={5}>
        <Input
          type="number"
          borderColor={"black"}
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter Mobile Number"
        />
      </Box>
      <Box m={5}>
        <Input
          type="email"
          borderColor={"black"}
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter Email ID"
        />
      </Box>
      <Box m={5}>
        <Input
          type="password"
          borderColor={"black"}
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter Password"
        />
      </Box>
      <Box m={5}>
        <Button
          bg={"pink.600"}
          border={"2px solid"}
          borderColor={"black"}
          onClick={handleClick}
        >
          PROCEED
        </Button>
      </Box>
      <Box>
        <Link to="/Login" color={"blue.500"}>
          Sign in
        </Link>
      </Box>
    </Box>
  );
};

export default UserSignUp