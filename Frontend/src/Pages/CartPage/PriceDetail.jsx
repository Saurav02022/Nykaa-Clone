import { Button, Flex, Heading } from "@chakra-ui/react";
function PriceDetail({ price, discountprice, length }) {
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
      <Heading
        as="h1"
        fontSize={"16px"}
        fontWeight="550"
        fontFamily={"sans-serif"}
      >
        Price Details
      </Heading>
      <Flex
        gap={"4"}
        flexDirection="column"
        padding={"10px"}
        border="0px solid red"
      >
        <Flex
          gap="50px"
          border="0px solid green"
          justifyContent="space-between"
        >
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Bag MRP ({length} items)
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ {price}
          </Heading>
        </Flex>
        <Flex gap="50px" border="0px solid blue" justifyContent="space-between">
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Bag Discount
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ {discountprice}
          </Heading>
        </Flex>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Shipping
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
            color="green.900"
          >
            Free
          </Heading>
        </Flex>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="600"
            fontFamily={"Inter"}
          >
            You Pay
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="600"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ {price - discountprice}
          </Heading>
        </Flex>
        <Button
          backgroundColor="#E80071"
          color="white"
          fontSize={"18px"}
          fontFamily={"sans-serif"}
          _hover={{
            color: "black",
          }}
        >
          Process
        </Button>
      </Flex>
    </Flex>
  );
}

export default PriceDetail;
