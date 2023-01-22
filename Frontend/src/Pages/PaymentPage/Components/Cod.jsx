import React from "react";
import { Flex, Heading, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Cod = ({ Totaldiscountprice }) => {
  const toast = useToast()
  const navigate = useNavigate()
  const HandleClick = () => {
    if (Totaldiscountprice > 0) {
      toast({
        description: "Payment Successful",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/")
    }
  }
  return (
    <Flex
      gap="2"
      direction="column"
      border="0px solid red"
      width={{
        base: "",
        sm: "",
        md: "20.75rem",
        lg: "18rem",
        xl: "25.75rem",
        "2xl": "25.75rem",
      }}
    >
      <Heading as="h1" fontFamily="Inter" fontSize="20px" fontWeight="600">
        Cash On Delivery
      </Heading>
      <hr />
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
        onClick={HandleClick}
      >
        Place order
      </Button>
    </Flex>
  );
};

export default Cod;
