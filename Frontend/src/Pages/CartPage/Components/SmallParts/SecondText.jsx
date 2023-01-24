import { Heading } from '@chakra-ui/react';
import React from 'react'

const SecondText = ({children}) => {
  return (
    <Heading
      as="p"
      fontSize={"16px"}
      fontWeight="500"
      fontFamily={"Inter"}
      justifyContent="flex-end"
    >
     {children}
    </Heading>
  );
}

export default SecondText