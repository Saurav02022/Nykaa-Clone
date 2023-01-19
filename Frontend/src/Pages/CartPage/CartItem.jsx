import React from "react";
import { Flex, Box, Image, Heading, Select, Text } from "@chakra-ui/react";
import { MdOutlineDelete } from "react-icons/md";

const CartItem = () => {
  return (
    <Flex
      border={"1px solid gray"}
      flexDirection="column"
      boxShadow={"md"}
      borderRadius="10px"
      width={"90%"}
      margin="auto"
      padding="10px"
    >
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justifyContent={{ sm: "center", base: "center" }}
        alignItems={{
          sm: "center",
          md: "normal",
          lg: "normal",
          xl: "normal",
          "2xl": "normal",
        }}
        gap={{ sm: "8px", base: "7px" }}
      >
        <Flex
          flexDirection="column"
          border={"0px solid blue"}
          justifyContent="center"
          alignItems={"center"}
          gap="2"
        >
          <Box>
            <Image
              src={
                "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/4/7/47aa49227568_H_8901030902321.jpg"
              }
              alt={"template"}
              width="200px"
            />
          </Box>
        </Flex>
        <Flex
          flexDirection={"column"}
          textAlign={{
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
          justifyContent="center"
          alignContent={"center"}
        >
          <Flex
            gap="1"
            paddingX="10px"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Heading
              fontSize="14px"
              color={"grey"}
              fontWeight="600"
              lineHeight={"1.1"}
            >
              {
                "Simple Protect N Glow Vitamin C Moisturising Glow Gel Simple Protect N Glow Vitamin C Moisturising Glow Gel"
              }
            </Heading>
            <Box margin={"auto"}>
              <MdOutlineDelete size={30} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        borderTop={"1px solid rgb(224, 224, 225)"}
        background="transparent"
        textAlign={"center"}
      >
        <Flex width={"49%"} margin="auto" gap={2}>
          <Heading as={"p"} fontSize="14px" fontWeight={"550"}>
            Quantity :
          </Heading>
          <Select size={"sm"} width="40%">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
        </Flex>
        <Flex width={"49%"} justifyContent="flex-end">
          <Text fontSize={"12px"} fontWeight="550" marginRight={"10px"}>
            ₹764
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
