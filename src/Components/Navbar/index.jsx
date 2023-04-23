import MainNavbar from "./MainNavbar";
import HeaderNavbar from "./HeaderNavbar";
import BottomNavbar from "./BottomNavbar";
import { Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <HeaderNavbar />
      <MainNavbar />
      <BottomNavbar />
    </Box>
  );
};

export default Navbar;
