import { Flex } from "@chakra-ui/react";
import React from "react";

const FiveCard = ({ children }) => {
  return (
    <Flex
      display={"grid"}
      gridTemplateColumns={{
        base: "repeat(2,1fr)",
        sm: "repeat(3,1fr)",
        md: "repeat(4,1fr)",
        lg: "repeat(5,1fr)",
        xl: "repeat(5,1fr)",
      }}
      width="90%"
      margin="auto"
      gap={5}
      marginTop="20px"
    >
      {children}
    </Flex>
  );
};

export default FiveCard;
