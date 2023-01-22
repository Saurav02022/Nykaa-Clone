import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";

import { useSelector, useDispatch } from "react-redux";

import { getData } from "../../Redux/CartPage/action";

import Loading from "../Loading";
import ErrorPage from "./NotFound";

function CartPage() {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();

  const { userid } = useSelector((state) => state.AuthenticationReducer);
  const { data, loading, error, ItemCount, Totalprice, Totaldiscountprice } =
    useSelector((state) => state.CartReducer);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getData(userid));
    }, 1000);
  }, [change]);
  return (
    <>
      {error ? (
        <ErrorPage />
      ) : loading ? (
        <Loading />
      ) : (
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
            {data.map((el, index) => (
              <CartItem
                key={el._id}
                imgsrc={el.imgsrc}
                title={el.title}
                price={el.price}
                discountedprice={el.discountedprice}
                index={index}
                setChange={setChange}
                change={change}
              />
            ))}
          </Flex>
          <Box border="0px solid blue">
            <PriceDetail
              price={Totalprice}
              discountprice={Totaldiscountprice}
              length={ItemCount}
            />
          </Box>
        </Flex>
      )}
    </>
  );
}

export default CartPage;
