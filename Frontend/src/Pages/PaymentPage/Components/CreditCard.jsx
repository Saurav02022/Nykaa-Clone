import React from "react";
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
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

import { useSelector } from "react-redux";

import { CardImages } from "./Data/CardImages";

const CreditCard = () => {
  const { Totaldiscountprice } = useSelector((state) => state.CartReducer);
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
      <Input placeholder="Card Number" type="number" isRequired={true} />
      <Flex gap="2">
        <Input placeholder="Expiry (MM/YY)" type="text" isRequired={true} />
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<InfoIcon color="gray.300" />}
          />
          <Input type="text" placeholder="CVV" isRequired={true} />
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
      >
        Pay ₹ {Totaldiscountprice}
      </Button>
    </Flex>
  );
};

export default CreditCard;
