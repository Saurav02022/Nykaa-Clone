import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
import { HamburgerIcon, CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Links = [
  "Categories",
  "Brands",
  "Luxe",
  "Nykaa Fashion",
  "Beauty Advice",
];

const NavLink = ({ children }) => (
  <Box
    fontSize="14px"
    fontFamily={"Inter,sans-serif"}
    fontWeight={500}
    _hover={{
      textDecoration: "underline",
      cursor: "pointer",
      color: "#fb94bc",
    }}
    textTransform="uppercase"
  >
    {children}
  </Box>
);

export default function MainNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <InputGroup
        display={{ md: "none" }}
        width={"md"}
        margin="auto"
        marginTop="3.5"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input type="tel" placeholder="Search on Nykaa" />
      </InputGroup>
      <Flex justifyContent="space-evenly" borderBottom={"1px solid grey"}>
        <Flex justifyContent="space-evenly" gap="5">
          <Box paddingTop="5">
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Box>

          <Box border={"0px solid blue"}>
            <Image
              src={
                "https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png"
              }
              alt="NykaaLogo"
              width={20}
              height=""
            />
          </Box>
          <Flex
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            alignItems={"center"}
            gap="3"
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Flex>
        </Flex>

        <Flex justifyContent={"space-evenly"} gap={5} alignItems="center">
          <InputGroup display={{ base: "none", xl: "flex", md: "flex" }}>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input type="tel" placeholder="Search on Nykaa" />
          </InputGroup>
          <Button backgroundColor={"#fc2779"} color="white">
            Signin
          </Button>
          <HiOutlineShoppingBag size={30} />
        </Flex>
      </Flex>
      {isOpen && (
        <Flex display={{ md: "none" }}>
          {Links.map((link) => (
            <Flex
              key={link}
              margin="auto"
              justifyContent={"center"}
              marginTop="5"
              fontSize="14px"
              fontFamily={"Inter,sans-serif"}
              textTransform="uppercase"
            >
              {link}
            </Flex>
          ))}
        </Flex>
      )}
    </>
  );
}
