import { Box, Image, Text } from "@chakra-ui/react";

function TransParentCard({ src, text }) {
  return (
    <Box position="relative" borderRadius="md" boxShadow={"md"}>
      <Image src={src} />
      <Text
        fontSize="2xl"
        color="black"
        position="absolute"
        bottom="0"
        backgroundColor={"#F3F2F9"}
        width="100%"
        textAlign={"center"}
      >
        {text}
      </Text>
    </Box>
  );
}

export default TransParentCard;
