import { Box, Flex } from "@chakra-ui/react";
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";

function CartPage() {
  return (
    <Flex
      flexDirection={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
      }}
      gap="5"
      width="90%"
      margin="auto"
      marginTop="5"
      marginBottom="5"
    >
      <Flex flexDirection="column" gap="5" border="0px solid red">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </Flex>
      <Box border="0px solid blue">
        <PriceDetail />
      </Box>
    </Flex>
  );
}

export default CartPage;
