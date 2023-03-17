import React, { useState } from "react";
import { Flex, Heading, Input, Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";
import { paymentSuccess } from "../../../Redux/CartPage/action";
const GiftCard = () => {
  const dispatch = useDispatch();
  const { userid } = useSelector((store) => store.AuthenticationReducer);
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cardNumber, setcardNumber] = useState(0);
  const [pin, setPin] = useState(0);

  const handlebtn = () => {
    if (cardNumber.length !== 11) {
      alert("Please enter a vaild 11 digit card number");
      return;
    }
    if (pin.length !== 4) {
      alert("Please enter a valid 4 digit pin number");
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

  const { Totaldiscountprice } = useSelector((state) => state.CartReducer);

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
        Gift Card
      </Heading>
      <hr />
      <Input
        placeholder="Gift Card Number"
        type="number"
        isRequired={true}
        onChange={(event) => setcardNumber(event.target.value)}
      />
      <Flex gap="2">
        <Input
          placeholder="PIN"
          type="number"
          required
          width="40%"
          isRequired={true}
          onChange={(event) => setPin(event.target.value)}
        />
        <Button
          width="60%"
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
          onClick={handlebtn}
        >
          Pay ₹{Totaldiscountprice}
        </Button>
      </Flex>
    </Flex>
  );
};

export default GiftCard;
