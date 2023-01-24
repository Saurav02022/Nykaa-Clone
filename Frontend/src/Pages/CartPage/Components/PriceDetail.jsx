import { Button, Flex, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MainHeading from "./SmallParts/MainHeading";
import UseFlex from "./SmallParts/UseFlex";
import FirstText from "./SmallParts/FirstText";
import SecondText from "./SmallParts/SecondText";

function PriceDetail() {
  const navigate = useNavigate();
  const toast = useToast();

  const { ItemCount, Totalprice, Totaldiscountprice } = useSelector(
    (state) => state.CartReducer
  );

  const handleProccessButton = () => {
    if (ItemCount > 0) {
      navigate("/address");
    } else {
      toast({
        position: "top",
        description: "Please add some products to your cart",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Flex
      flexDirection={"column"}
      boxShadow="xl"
      border="1px solid grey"
      borderRadius={"10px"}
      margin="auto"
      gap="3"
      padding={"10px"}
    >
      <MainHeading> Price Details</MainHeading>
      <Flex
        gap={"4"}
        flexDirection="column"
        padding={"10px"}
        border="0px solid red"
      >
        <UseFlex>
          <FirstText>Bag MRP ({ItemCount} items)</FirstText>
          <SecondText> ₹ {Totalprice}</SecondText>
        </UseFlex>
        <UseFlex>
          <FirstText>After Discount</FirstText>
          <SecondText>₹ {Totaldiscountprice}</SecondText>
        </UseFlex>
        <UseFlex>
          <FirstText>Saving at this time</FirstText>
          <SecondText>{Totalprice - Totaldiscountprice}</SecondText>
        </UseFlex>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <MainHeading>You Pay</MainHeading>
          <MainHeading>₹ {Totaldiscountprice}</MainHeading>
        </Flex>
        <Button
          backgroundColor="#E80071"
          color="white"
          fontSize={"18px"}
          fontFamily={"sans-serif"}
          _hover={{
            color: "black",
          }}
          onClick={handleProccessButton}
        >
          Process
        </Button>
      </Flex>
    </Flex>
  );
}

export default PriceDetail;
