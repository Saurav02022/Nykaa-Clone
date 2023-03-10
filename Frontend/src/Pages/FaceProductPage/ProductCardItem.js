import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductCartItem({
  _id,
  imgsrc,
  title,
  price,
  discountedprice,
  rating,
  discount,
}) {
  const { isAuth, userid } = useSelector(
    (state) => state.AuthenticationReducer
  );
  const toast = useToast();
  const navigate = useNavigate();
  const HandleAddtoBag = async () => {
    const payload = {
      _id,
      imgsrc,
      title,
      price,
      discountedprice,
      rating,
      discount,
    };
    if (isAuth) {
      await axios
        .post(
          `https://fair-pear-salmon-suit.cyclic.app/cart/${userid}`,
          payload
        )
        .then((res) =>
          toast({
            description: "Product added successfully",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
        )
        .catch((err) => {
          toast({
            description: err.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    } else {
      toast({
        description: "Please login first",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const HandleProduct = (id) => {
    const data = {
      _id,
      imgsrc,
      title,
      price,
      discountedprice,
      rating,
      discount,
    };
    localStorage.setItem("singleProduct", JSON.stringify(data));
    navigate("/singleproduct");
  };

  return (
    <Box
      key={_id}
      display={"flex"}
      flexDirection="column"
      justifyContent={"space-between"}
      gap="10px"
      bg={"white"}
      border="0px solid black"
      boxShadow={"md"}
      borderRadius="md"
    >
      <Box
        onClick={() => HandleProduct(_id)}
        _hover={{
          cursor: "pointer",
        }}
        border={"0px solid red"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Image src={imgsrc} margin="auto" />
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
          <Button
            color={"white"}
            backgroundColor="#FC2779"
            onClick={HandleAddtoBag}
          >
            Add to bag
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ProductCartItem;
