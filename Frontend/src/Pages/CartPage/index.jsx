import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";
import axios from "axios";

function CartPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  let { id } = JSON.parse(localStorage.getItem("user"));

  const getData = async () => {
    return await axios.get(
      `https://fair-pear-salmon-suit.cyclic.app/cart/${id}`
    );
  };

  useEffect(() => {
    setLoading(true);
    getData()
      .then((res) => {
        console.log(res.data.cartdata);
        setData(res.data.cartdata);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);
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
        {data.map((el) => (
          <CartItem key={el._id} {...el} />
        ))}
      </Flex>
      <Box border="0px solid blue">
        <PriceDetail />
      </Box>
    </Flex>
  );
}

export default CartPage;
