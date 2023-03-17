import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [auth, setAuth] = useState("");

  useEffect(() => {}, [auth]);
  console.log(auth);
  const onChangeData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await axios
      .post("https://fair-pear-salmon-suit.cyclic.app//admins/login", data)
      .then((res) => {
        if (res.data.msg === "Logged in !") {
          console.log(res.data);
          setAuth(res.data.token);
          localStorage.setItem("adminname", res.data.adminname);
          navigate("/admin/panel");
        } else {
          alert("Invalid cred !");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="lgnpg">
      <div className="suj-login">
        <p>For login:-</p>
        <p>email:darshan@gmail.com</p>
        <p>password:12345</p>
      </div>
      <Container
        w={"300px"}
        h="340px"
        bgColor={"white"}
        border={"5px solid grey"}
      >
        <form onSubmit={handleSubmit}>
          <br />
          <Center>
            <FormLabel fontSize={"20px"} color={"gray.600"}>
              Admin Login
            </FormLabel>{" "}
          </Center>
          <FormControl isRequired>
            <FormLabel color={"gray.700"}>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              size="l"
              onChange={onChangeData}
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel color={"gray.700"}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              size="l"
              name="password"
              onChange={onChangeData}
            />
          </FormControl>
          <Button
            variantcolor="teal"
            variant="outline"
            type="submit"
            width="auto"
            mt={4}
            backgroundColor="#FC2779"
            borderRadius={"none"}
            color={"white"}
            _hover={{ bg: "gray.700" }}
          >
            LOGIN
          </Button>
        </form>
        <br />
        <p>Having trouble logging in?</p>
      </Container>
    </div>
  );
};

export default Login;
