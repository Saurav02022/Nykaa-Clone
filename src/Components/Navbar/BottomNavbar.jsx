import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Links = ["Make up", "Skin", "Hair", "Bath & Body", "Natural"];

const links = [
  "Mom & Baby",
  "Health & Wellness",
  "Men",
  "Fragrance",
  "Pop Ups",
];

const NavLink = ({ children }) => (
  <Flex
    justifyContent="space-around"
    width={{ lg: "80%", "2xl": "80%", base: "100%", sm: "100%" }}
    margin="auto"
    textAlign={"center"}
    fontSize="14px"
    fontFamily={"Inter,sans-serif"}
    color="grey"
  >
    {children}
  </Flex>
);

const BottomNavbar = () => {
  return (
    <Box paddingY="3" shadow={"lg"}>
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          "2xl": "row",
        }}
        width="75%"
        margin={"auto"}
      >
        <NavLink>
          {Links.map((link) => (
            <Link
              key={link}
              to={
                link === "Make up" ? "/face" : link === "Skin" ? "/skin" : "/"
              }
            >
              <Flex
                key={link}
                _hover={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#fb94bc",
                }}
              >
                {link}
              </Flex>
            </Link>
          ))}
        </NavLink>
        <NavLink>
          {links.map((link) => (
            <Flex
              key={link}
              _hover={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "#fb94bc",
              }}
            >
              {link}
            </Flex>
          ))}
        </NavLink>
      </Flex>
    </Box>
  );
};
export default BottomNavbar;
