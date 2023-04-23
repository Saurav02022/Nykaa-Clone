import { Flex } from "@chakra-ui/react";
import React from "react";

const UseFlex = ({ children }) => {
  return (
    <Flex gap="50px" border="0px solid green" justifyContent="space-between">
      {children}
    </Flex>
  );
};

export default UseFlex;
