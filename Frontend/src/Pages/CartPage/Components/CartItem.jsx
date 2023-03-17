import React from "react";
import { Flex, Box, Image, Heading, Text, useToast } from "@chakra-ui/react";
import { MdOutlineDelete } from "react-icons/md";

import { DeleteData } from "../../../Redux/CartPage/action";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({
  _id,
  imgsrc,
  title,
  price,
  discountedprice,
  index,
  setChange,
  change,
}) => {
  const { userid } = useSelector((state) => state.AuthenticationReducer);

  const dispatch = useDispatch();
  const toast = useToast();

  const deleteitem = () => {
    dispatch(DeleteData(userid, index));
    setChange(!change);
    toast({
      description: "Product deleted successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Flex
      key={_id}
      width={"95%"}
      margin="auto"
      flexDirection="column"
      boxShadow={"md"}
      border={"1px solid gray"}
      borderRadius="10px"
      gap="5"
      padding="10px"
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
          <Box
            onClick={deleteitem}
            _hover={{
              cursor: "pointer",
            }}
          >
            <MdOutlineDelete size={30} />
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent={"space-around"}>
        <Text fontSize={"16px"} fontWeight="550" textDecoration="line-through">
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
