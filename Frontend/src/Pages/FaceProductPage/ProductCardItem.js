import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";

function ProductCartItem({imgsrc,title,price,discountedprice,rating,discount}) {

  return (
    <Box display={"flex"} flexDirection="column" justifyContent={"space-between"} gap="10px" bg={"white"} border="0px solid black" boxShadow={"md"} borderRadius="md">
      <Box border={'0px solid red'} justifyContent='center' alignItems={'center'}>
        <Image src={imgsrc} margin='auto' />
      </Box>
      <Flex
        direction={"column"}
        gap="2"
        textAlign="center"
        paddingBottom={"20px"}
      >
        <Heading
          as={"p"}
          fontSize="14px"
          fontWeight={500}
          letterSpacing="-0.1px"
          lineHeight={"20px"}
          fontFamily={"Inter,Roboto,Arial,sans-serif"}
          mt="1.5"
        >
          {title}
        </Heading>
        <Flex gap={"2"} justifyContent="center">
          <Heading
            as={"p"}
            fontSize="14px"
            lineHeight={"20px"}
            fontWeight="normal"
          >
            MRP :{" "}
          </Heading>
          <Heading
            as={"p"}
            fontSize="14px"
            lineHeight={"20px"}
            fontWeight="normal"
            textDecoration={"line-through"}
          >
            {price}
          </Heading>
          <Text fontSize="14px" lineHeight={"20px"} fontWeight="bold">
            {discountedprice}
          </Text>
          <Heading
            as={"p"}
            fontSize="14px"
            lineHeight={"20px"}
            fontWeight="500"
            color={"#008945"}
          >
            {discount}
          </Heading>
        </Flex>
        <Heading
          as={"p"}
          fontSize="14px"
          lineHeight={"20px"}
          color="#FC2779"
          fontWeight={"500"}
        >
          Get Free Product
        </Heading>
        <Flex justifyContent={"center"} gap="1">
          <StarIcon fontSize={"14px"} />
          <StarIcon fontSize={"14px"} />
          <StarIcon fontSize={"14px"} />
          <StarIcon fontSize={"14px"} />

          <Heading
            as={"p"}
            fontSize="12px"
            lineHeight={"18px"}
            fontWeight="500"
            color={"#657786"}
          >
            {rating}
          </Heading>
        </Flex>
        <Flex gap="2" justifyContent={"center"}>
          <Button color={"white"} backgroundColor="#FC2779">
            <AiOutlineHeart />
          </Button>
          <Button color={"white"} backgroundColor="#FC2779">
            Add to bag
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ProductCartItem;
