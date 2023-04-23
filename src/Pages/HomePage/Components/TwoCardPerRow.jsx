import { Flex } from "@chakra-ui/react";
import React from "react";

const TwoCard = ({ children }) => {
  return (
    <Flex
      gap={1}
      width="90%"
      margin={"auto"}
      mt="-10"
      flexDirection={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
    >
      {children}
    </Flex>
  );
};

export default TwoCard;
