import { Flex } from "@chakra-ui/react";
import { products } from "./product";
import ProductCartItem from "./ProductCardItem";

function FaceProductPage() {
  return (
    <Flex
      display={"grid"}
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
        xl: "repeat(4,1fr)",
      }}
      width="90%"
      margin="auto"
      gap={5}
      marginTop="20px"
      marginBottom={"20px"}
    >
      {products.map(
        ({ imgsrc, title, price, discountedprice, discount, rating }) => (
          <ProductCartItem
            imgsrc={imgsrc}
            title={title}
            price={price}
            discount={discount}
            discountPrice={discountedprice}
            rating={rating}
          />
        )
      )}
    </Flex>
  );
}

export default FaceProductPage;
