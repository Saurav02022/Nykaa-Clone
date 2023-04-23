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
  useToast,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Logout } from "../../Redux/LogReducer/actionType";

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
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.AuthenticationReducer);

  const handleLogout = () => {
    dispatch({ type: Logout });
    toast({
      description: "logout successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    navigate("/");
    return;
  };
  return (
    <>
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
            <Link to={"/"}>
              <Image
                src={
                  "https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png"
                }
                alt="NykaaLogo"
                width={20}
                height=""
              />
            </Link>
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
          {isAuth ? (
            <Button
              backgroundColor={"#fc2779"}
              color="white"
              _hover={{
                backgroundColor: "#FC2779",
                color: "#FFFFFF",
              }}
              onClick={handleLogout}
            >
              Sign out
            </Button>
          ) : (
            <Link to="/user/login">
              <Button
                backgroundColor={"#fc2779"}
                color="white"
                _hover={{
                  backgroundColor: "#FC2779",
                  color: "#FFFFFF",
                }}
              >
                Signin
              </Button>
            </Link>
          )}
          <Link to={"/cart"}>
            {" "}
            <HiOutlineShoppingBag size={30} />
          </Link>
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
