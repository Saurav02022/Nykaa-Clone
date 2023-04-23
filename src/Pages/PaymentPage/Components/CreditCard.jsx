import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Image,
  Button,
  Checkbox,
  Text,
  HStack,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

import { useDispatch, useSelector } from "react-redux";

import { CardImages } from "./Data/CardImages";

import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";
import { paymentSuccess } from "../../../Redux/CartPage/action";

const CreditCard = () => {
  const { userid } = useSelector((store) => store.AuthenticationReducer);
  const dispatch = useDispatch();
  const toast = useToast();
  const [cardNumber, setcardNumber] = useState("");
  const [expiry, setExipry] = useState("");
  const [cvv, setcvv] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBtn = () => {
    if (cardNumber.length !== 16) {
      alert("card number should be 16 digits without any spaces");
      return;
    }
    if (!expiry.includes("/")) {
      alert("Expiry should be a valid number");
      return;
    }

    if (cvv.length !== 3 && typeof Number(cvv) !== Number) {
      alert("invalid cvv number");
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
        Credit/Debit Card
      </Heading>
      <hr />
      <Flex gap="2">
        <Text
          ontFamily="Inter"
          fontSize="10px"
          fontWeight="600"
          color="gray.500"
        >
          WE ACCEPT
        </Text>
        <HStack spacing="2">
          {CardImages.map(({ id, src, alt }) => (
            <Image key={id} src={src} width="" height="" alt={alt} />
          ))}
        </HStack>
      </Flex>
      <Input
        placeholder="Card Number"
        type="number"
        isRequired={true}
        onChange={(e) => setcardNumber(e.target.value)}
      />
      <Flex gap="2">
        <Input
          placeholder="Expiry (MM/YY)"
          type="text"
          isRequired={true}
          onChange={(e) => setExipry(e.target.value)}
        />
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<InfoIcon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="CVV"
            isRequired={true}
            onChange={(e) => setcvv(e.target.value)}
          />
        </InputGroup>
      </Flex>
      <Flex gap="1">
        <Checkbox colorScheme="pink" isRequired={true}>
          Save this card securely for future
        </Checkbox>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="500"
          color="#388DFF"
          marginTop="1"
        >
          Know more
        </Text>
      </Flex>
      <Button
        color="#FFFFFF"
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="600"
        height="49px"
        padding="12px 12px 12px 12px"
        backgroundColor="#E80071"
        _hover={{
          color: "white",
          backgroundColor: "#E80080",
        }}
        onClick={handleBtn}
      >
        Pay ₹ {Totaldiscountprice}
      </Button>
    </Flex>
  );
};

export default CreditCard;
