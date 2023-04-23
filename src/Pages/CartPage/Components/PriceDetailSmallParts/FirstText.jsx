import { Heading } from "@chakra-ui/react";
import React from "react";

const FirstText = ({ children }) => {
  return (
    <Heading as="p" fontSize={"18px"} fontWeight="500" fontFamily={"Inter"}>
      {children}
    </Heading>
  );
};

export default FirstText;
