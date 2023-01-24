import { Flex, Heading, Image } from "@chakra-ui/react";

const CardItem = ({
  src,
  h1Size,
  h1Weight,
  h1color,
  h1,
  h3Size,
  h3Weight,
  h3color,
  h3,
  paddingY,
}) => {
  return (
    <Flex
      direction={"column"}
      boxShadow={"md"}
      justifyContent="center"
      alignContent={"center"}
      borderRadius="md"
    >
      <Image src={src} alt={h1} width="" height="" />
      <Flex direction={"column"} gap="1" paddingY={paddingY} marginLeft="5">
        <Heading
          as={"h1"}
          fontSize={h1Size}
          fontWeight={h1Weight}
          color={h1color}
        >
          {h1}
        </Heading>
        <Heading
          as={"h3"}
          fontSize={h3Size}
          fontWeight={h3Weight}
          color={h3color}
        >
          {h3}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default CardItem;
