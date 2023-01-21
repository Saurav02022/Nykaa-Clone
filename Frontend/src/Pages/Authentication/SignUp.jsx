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
  FormHelperText,
  FormErrorMessage,
  Box

} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {RotatingLines} from "react-loader-spinner";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { postdata, signupReq } from "../../Redux/LogReducer/action";
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

  const isErrorE = email === ''
  const isErrorP = phone=== ""
  const isErrorN = name === "" 
  const isErrorPa = password ==="";
const isLoading = useSelector((state)=> state.LogReducer.isAuthLoading);
 
const handleClick = () => {
  dispatch(signupReq());

    dispatch(postdata({ email, name, password, phone }))
    .then((res) => {
      console.log(res)
      console.log("Registered Successfully");
    //  console.log(res.payload);
      toast({
        // title: 'Login Successfull.',
        render: () => (
          <Box color="white" p={3} bg="pink.500">
            Registration Successfull.
          </Box>
        ),
      });
      navigate("/user/login");
    }).catch((err)=>
    console.log(err)
    );
  };

  if(isLoading){
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="1.75"
        width="96"
        visible={true}
      />
    </Box>
  );
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
<FormControl isInvalid={isErrorN}>
<Input
        required={true}
        type="text"
        borderColor={"black"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
      />
      {!isErrorN ? (
        <FormHelperText>
          Enter the Name.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Name is required.</FormErrorMessage>
      )}
</FormControl>
      {/* <Input
        required={true}
        type="text"
        borderColor={"black"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
      /> */}
<FormControl isInvalid={isErrorP}>
<Input
        required={true}
        type="number"
        borderColor={"black"}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter Mobile Number"
      />
{!isErrorP ? (
        <FormHelperText>
          Enter the Mobile Number.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Mobile number is required.</FormErrorMessage>
      )}
</FormControl>
     

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
<FormControl isInvalid={isErrorPa}>
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
{!isErrorPa ? (
        <FormHelperText>
          Enter the Password.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Password is required.</FormErrorMessage>
      )}
</FormControl>

      <Button
      isDisabled = {isLoading}
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
