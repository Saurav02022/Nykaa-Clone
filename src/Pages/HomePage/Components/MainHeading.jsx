import { Heading } from "@chakra-ui/react";
import React from "react";

const MainHeading = ({ children }) => {
  return (
    <Heading
      as="h3"
      fontSize={"24px"}
      fontFamily="Inter"
      marginLeft="20"
      marginTop={"5"}
    >
      {children}
    </Heading>
  );
};

export default MainHeading;
