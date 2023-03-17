// eslint-disable-next-line no-unused-vars
import { Box, Flex, Heading } from "@chakra-ui/react";
import { IoIosApps, IoMdGift } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { MdAdminPanelSettings } from "react-icons/md";

const HeaderNavbar = () => {
  return (
    <Flex
      backgroundColor={"#FC2779"}
      justifyContent="space-around"
      flexDirection={{
        base: "column",
        sm: "column",
        md: "row",
        xl: "row",
        "2xl": "row",
      }}
    >
      <Box>
        <Heading
          as={"p"}
          fontSize="sm"
          textAlign={{ sm: "center", base: "center" }}
          marginBottom="3"
          marginTop={2}
          color="#FFFFFF"
        >
          BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals
        </Heading>
      </Box>
      <Flex
        flexWrap="wrap"
        justifyContent={"space-around"}
        gap={5}
        marginTop={2}
        marginBottom="3"
      >
        <Flex
          gap={1}
          _hover={{
            color: " #FFFFFF",
            cursor: "pointer",
          }}
        >
          <IoIosApps size={20} />
          <Heading as={"p"} fontSize="sm" fontWeight={"normal"}>
            {" "}
            Get App
          </Heading>
        </Flex>
        <Flex
          gap={1}
          _hover={{
            color: " #FFFFFF",
            cursor: "pointer",
          }}
        >
          {" "}
          <GrLocation size={20} />
          <Heading as={"p"} fontSize="sm" fontWeight={"normal"}>
            {" "}
            Store & Events
          </Heading>
        </Flex>
        <Flex
          gap={1}
          _hover={{
            color: " #FFFFFF",
            cursor: "pointer",
          }}
        >
          <IoMdGift size={20} />
          <Heading as={"p"} fontSize="sm" fontWeight={"normal"}>
            {" "}
            Gift Card
          </Heading>
        </Flex>

        <Flex
          gap={1}
          _hover={{
            color: " #FFFFFF",
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = "/admin/login")}
        >
          {" "}
          <MdAdminPanelSettings size={20} />
          Admin
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderNavbar;
