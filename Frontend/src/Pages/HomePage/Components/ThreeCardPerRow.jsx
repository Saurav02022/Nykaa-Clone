import { Flex } from "@chakra-ui/react";
import React from "react";

const ThreeCard = ({ children }) => {
  return (
    <Flex
      display={"grid"}
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
        md: "repeat(3,1fr)",
        lg: "repeat(3,1fr)",
        xl: "repeat(3,1fr)",
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

export default ThreeCard;
