import React from "react";
import { Heading, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        flexDirection="column"
        margin="auto"
        border={"0px solid red"}
        marginTop="20"
        marginBottom="20"
        gap="5"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h1"
          fontWeight={"500"}
          fontFamily="sans-serif"
          fontSize={"18px"}
        >
          Your Shopping Bag is Empty
        </Heading>
        <Button
          backgroundColor={"#FC2779"}
          color="#FFFFFF"
          _hover={{
            backgroundColor: "#FC2779",
            color: "#FFFFFF",
          }}
          borderRadius={"10px"}
          padding="inherit"
          fontSize={"16px"}
          w="44"
          fontWeight={"700"}
          onClick={() => navigate("/")}
        >
          Start Shopping
        </Button>
      </Flex>
    </>
  );
};

export default CartEmpty;
