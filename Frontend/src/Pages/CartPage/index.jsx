import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";
import axios from "axios";

function CartPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const [totalprice, setTotalprice] = useState(0);
  const [totaldiscountprice, setTotaldiscountprice] = useState(0);

  let { id } = JSON.parse(localStorage.getItem("user"));

  const getData = async () => {
    return await axios.get(
      `https://fair-pear-salmon-suit.cyclic.app/cart/${id}`
    );
  };

  const amount = (array) => {
    array.map(({ price, discountedprice }) => {
      if (price !== "" && discountedprice !== "") {
        setTotalprice((pre) => pre + price);
        setTotaldiscountprice((pre) => pre + discountedprice);
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    getData()
      .then((res) => {
        setData(res.data.cartdata);
        amount(res.data.cartdata);
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
      justifyContent="space-around"
      width="75%"
      margin="auto"
      marginTop="5"
      marginBottom="5"
      border="0px solid black"
    >
      <Flex flexDirection="column" gap="5" border="0px solid red">
        {data.map((el) => (
          <CartItem key={el._id} {...el} />
        ))}
      </Flex>
      <Box border="0px solid blue">
        <PriceDetail
          price={totalprice}
          discountprice={totaldiscountprice}
          length={data.length}
        />
      </Box>
    </Flex>
  );
}

export default CartPage;
