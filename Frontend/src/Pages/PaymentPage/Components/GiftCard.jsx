import React from "react";
import { Flex, Heading, Input, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const GiftCard = () => {
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
        Gift Card
      </Heading>
      <hr />
      <Input placeholder="Gift Card Number" type="number" isRequired={true} />
      <Flex gap="2">
        <Input
          placeholder="PIN"
          type="number"
          required
          width="40%"
          isRequired={true}
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
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default GiftCard;
