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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addToBag, getData } from "../Redux/CartPage/action";

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
  const { data } = useSelector((state) => state.CartReducer);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const payload = {
    _id,
    imgsrc,
    title,
    price,
    discountedprice,
    rating,
    discount,
  };
  const alreadyinData = data.filter((item) => item._id === _id);
  const HandleAddtoBag = () => {
    if (isAuth) {
      if (alreadyinData.length > 0) {
        setAlreadyAdded(true);
        toast({
          description: "already in cart",
          status: "info",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }
      dispatch(addToBag(userid, payload));
      dispatch(getData(userid));
      setAlreadyAdded(true);
      toast({
        description: "Product added successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        description: "Please login",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const HandleProduct = () => {
    localStorage.setItem("singleProduct", JSON.stringify(payload));
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
        onClick={HandleProduct}
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
        {alreadyAdded && (
          <Text color="red">Product Item added in the cart</Text>
        )}
        <Flex gap="2" justifyContent={"center"}>
          <Button
            color={"white"}
            backgroundColor="#FC2779"
            onClick={HandleAddtoBag}
            isDisabled={alreadyAdded}
          >
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ProductCartItem;
