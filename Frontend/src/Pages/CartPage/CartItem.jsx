import React from "react";
import { Flex, Box, Image, Heading, Select, Text } from "@chakra-ui/react";
import { MdOutlineDelete } from "react-icons/md";

const CartItem = ({ _id, imgsrc, title, price, discountedprice }) => {
  return (
    <Flex
      key={_id}
      width={"95%"}
      margin="auto"
      flexDirection="column"
      boxShadow={"md"}
      border={"1px solid gray"}
      borderRadius="10px"
      gap='5'
      padding='10px'
    >
      <Flex
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
        gap="5"
      >
        <Image src={imgsrc} alt={title} minWidth="min-content" />
        <Flex justifyContent="space-between" textAlign="center">
          <Heading
            fontSize="14px"
            color={"grey"}
            fontWeight="600"
            lineHeight={"1.1"}
            width="80%"
          >
            {title}
          </Heading>
          <Box>
            <MdOutlineDelete size={30} />
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent={"space-around"}>
        <Text fontSize={"16px"} fontWeight="550" textDecoration='line-through' >
          MRP Price :- {price}
        </Text>
        <Text fontSize={"16px"} fontWeight="550">
          discounted Price :- {discountedprice}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CartItem;
