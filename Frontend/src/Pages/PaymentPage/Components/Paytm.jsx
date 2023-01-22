import React from "react";
import { Flex, Heading, Input, Button } from "@chakra-ui/react";
const Paytm = ({ Totaldiscountprice }) => {
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
      <Input placeholder="Phone Number" type="number" required />
      <Button
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
