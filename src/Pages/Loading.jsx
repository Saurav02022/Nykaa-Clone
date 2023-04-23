import { VStack } from "@chakra-ui/react";
import React from "react";
import ReactLoading from "react-loading";

export default function Loading(){

    return (
        <VStack maxW="full" justifyContent="center" h="full" p={10}>
          <ReactLoading type={"spin"} color={"#FC2779"} height={100} width={100} />
        </VStack>
    )
}