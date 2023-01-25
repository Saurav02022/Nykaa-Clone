import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import CartItem from "./Components/CartItem";
import PriceDetail from "./Components/PriceDetail";
import CartEmpty from "./Components/CartEmpty";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getData } from "../../Redux/CartPage/action";

import Loading from "../Loading";

function CartPage() {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userid } = useSelector((state) => state.AuthenticationReducer);
  const { data, loading, error } = useSelector((state) => state.CartReducer);

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
    setTimeout(() => {
      dispatch(getData(userid));
    }, 1000);
  }, [change]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : data.length > 0 ? (
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
          flexWrap="wrap"
          gap="5"
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
            <PriceDetail />
          </Box>
        </Flex>
      ) : (
        <CartEmpty />
      )}
    </>
  );
}

export default CartPage;
