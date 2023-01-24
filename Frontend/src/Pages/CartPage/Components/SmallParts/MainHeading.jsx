import { Heading } from "@chakra-ui/react";
import React from "react";

const MainHeading = ({ children }) => {
  return (
    <Heading
      as="h1"
      fontSize={"16px"}
      fontWeight="550"
      fontFamily={"sans-serif"}
    >
      {children}
    </Heading>
  );
};

export default MainHeading;
