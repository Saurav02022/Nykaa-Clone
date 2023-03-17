import React, { useState } from "react";
import { Flex, Heading, Input, Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";
import { paymentSuccess } from "../../../Redux/CartPage/action";
const Paytm = () => {
  const dispatch = useDispatch();
  const { userid } = useSelector((store) => store.AuthenticationReducer);
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleBtn = () => {
    if (number.length !== 10) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }
    setLoading(true);

    toast({
      description: "Payment Successful",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
    dispatch(paymentSuccess(userid));
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <Flex
      gap="2"
      direction="column"
      border="px solid red"
      width={{
        base: "",
        sm: "",
        md: "",
        lg: "25.75rem",
        xl: "25.75rem",
        "2xl": "25.75rem",
      }}
    >
      <Heading as="h1" fontFamily="Inter" fontSize="20px" fontWeight="600">
        Paytm Wallet
      </Heading>
      <hr />
      <Input
        placeholder="Phone Number"
        type="number"
        isRequired={true}
        onChange={(event) => setNumber(event.target.value)}
      />
      <Button
        onClick={handleBtn}
        color="#FFFFFF"
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="600"
        height="49px"
        padding="12px 12px 12px 12px"
        backgroundColor="#E80071"
        _hover={{
          color: "#FFFFFF",
          backgroundColor: "#E80080",
        }}
      >
        Link
      </Button>
    </Flex>
  );
};

export default Paytm;
