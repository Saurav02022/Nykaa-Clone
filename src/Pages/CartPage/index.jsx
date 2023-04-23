import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import CartItem from "./Components/CartItem";
import PriceDetail from "./Components/PriceDetail";
import CartEmpty from "./Components/CartEmpty";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getData } from "../../Redux/CartPage/action";

import Loading from "../Loading";
import { getAddress } from "../../Redux/AddressPage/action";

function CartPage() {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userid } = useSelector((state) => state.AuthenticationReducer);
  const { data, loading, error } = useSelector((state) => state.CartReducer);
 
  useEffect(() => {
    dispatch(getAddress(userid));
    if (error) {
      navigate("/error");
    }
    setTimeout(() => {
      dispatch(getData(userid));
    }, 1000);
  }, [change, dispatch, error, navigate, userid]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : data.length > 0 ? (
        <Flex
          flexDirection={"column"}
          justifyContent="space-around"
          width="75%"
          margin="auto"
          marginTop="5"
          marginBottom="5"
          border="0px solid black"
          flexWrap="wrap"
          gap="5"
        >
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
            }}
            gap="5"
            border="0px solid red"
          >
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
          </Box>
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
