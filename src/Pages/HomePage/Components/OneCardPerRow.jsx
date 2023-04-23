import { Flex } from "@chakra-ui/react";
import React from "react";

const ONeCard = ({ children }) => {
  return (
    <Flex width="90%" margin={"auto"} marginTop="10px">
      {children}
    </Flex>
  );
};

export default ONeCard;
