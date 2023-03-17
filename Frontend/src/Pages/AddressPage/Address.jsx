import {
  SimpleGrid,
  Heading,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  FormLabel,
  Input,
  Stack,
  DrawerFooter,
  Switch,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddAddress } from "../../Redux/AddressPage/action";

const initialAddress = {
  pincode: "",
  Address: "",
  name: "",
  phone: "",
  email: "",
};

const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const { userid } = useSelector((state) => state.AuthenticationReducer);
  const { ItemCount, Totalprice, Totaldiscountprice } = useSelector(
    (state) => state.CartReducer
  );

  const { loading, success, error, Personaddress } = useSelector(
    (state) => state.AddressReducer
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const [screen, setScreen] = useState("");
  const [address, setAddress] = useState(initialAddress);

  // ******** Address *****************

  const handlePost = () => {
    if (
      address.email &&
      address.name &&
      address.phone &&
      address.pincode &&
      address.Address
    ) {
      if (address.phone.length !== 10) {
        toast({
          title: "invalid phone number",
          description: "phone number must be at least 10 characters",
          status: "info",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }
       if (address.pincode.length !== 6) {
         toast({
           title: "invalid pincode",
           description: "phone number must be at least 6 characters",
           status: "info",
           duration: 3000,
           isClosable: true,
           position: "top-right",
         });
         return;
      }
       if (!address.email.includes("@")) {
         toast({
           title: "invalid email address",
           description: "email address must be at least @ characters",
           status: "info",
           duration: 4000,
           isClosable: true,
           position: "top-right",
         });
         return;
       }
      dispatch(AddAddress(userid, address));
      toast({
        description: "address added successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
      navigate("/payment");
    } else {
      toast({
        description: "Please fill all the address detail",
        status: "info",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const screenSizefn = () => {
    const screenSize = window.outerWidth;
    if (screenSize >= 1440) {
      setScreen("lg");
    } else if (screenSize >= 768) {
      setScreen("md");
    } else {
      setScreen("sm");
    }
  };

  useEffect(() => {
    screenSizefn();
  }, []);

  window.addEventListener("resize", () => {
    screenSizefn();
  });

  const handleChange = (e) => {
    const Name = e.target.name;
    const value = e.target.value;
    setAddress((address) => {
      return { ...address, [Name]: value };
    });
  };

  return (
    <SimpleGrid
      w={screen === "sm" ? "90%" : screen === "md" ? "80%" : "60%"}
      margin="auto"
      mt="30px"
      mb="30px"
    >
      <SimpleGrid
        display={screen === "sm" ? "grid" : "flex"}
        gap="30px"
        justifyContent={screen === "sm" ? "center" : "space-between"}
      >
        <Box>
          <Heading as="h1" fontSize={"36px"}>
            Add Delivery Address
          </Heading>
          <Text fontSize="14px">
            Detailed address will help our delivery partner reach your doorstep
            quickly
          </Text>
        </Box>
        <Image
          margin="auto"
          width="300px"
          objectFit="cover"
          src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/header-address.svg"
          alt="Address"
        />
      </SimpleGrid>

      <SimpleGrid
        mt="30px"
        display={screen === "sm" ? "grid" : "flex"}
        gap="30px"
        justifyContent={screen === "sm" ? "center" : "space-between"}
      >
        <SimpleGrid
          onClick={onOpen}
          w="300px"
          justifyContent={"center"}
          h="148px"
          border="2px dashed rgba(0, 19, 37, 0.16)"
          borderRadius={"10px"}
        >
          <Image
            boxSize="18px"
            objectFit="cover"
            margin="auto"
            marginBottom="10px"
            src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/plus-icon.svg"
            alt="Address"
          />
          <Heading as="h1" fontSize={"16px"} color="#e80071">
            Add Delivery Address
          </Heading>

          {/* Drawer                 */}
          <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px" fontSize={"32px"}>
                Delivery Address
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing="24px">
                  <SimpleGrid gap={"8px"}>
                    <FormLabel htmlFor="username">Address</FormLabel>
                    <Input
                      ref={firstField}
                      id="username"
                      type={"number"}
                      placeholder="Pincode"
                      name="pincode"
                      value={address.pincode}
                      onChange={handleChange}
                    />
                    <Textarea
                      placeholder="Add Delivery Address"
                      onChange={handleChange}
                      name="Address"
                      value={address.Address}
                    />
                    <FormLabel htmlFor="username">Contact</FormLabel>
                    <Text>
                      Information provided here will be used to contact you for
                      delivery updates
                    </Text>
                    <Input
                      placeholder="Name"
                      name="name"
                      value={address.name}
                      onChange={handleChange}
                    />
                    <Input
                      placeholder="Phone"
                      name="phone"
                      value={address.phone}
                      onChange={handleChange}
                    />
                    <Input
                      placeholder="Email ID"
                      name="email"
                      value={address.email}
                      onChange={handleChange}
                    />
                  </SimpleGrid>
                </Stack>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                {/* <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                            </Button> */}
                {/* <Button w='100%' color={'white'} bg='#e80071'>Ship to this address</Button> */}

                <button
                  onClick={handlePost}
                  style={{
                    width: "100%",
                    color: "white",
                    backgroundColor: "#e80071",
                    padding: "18px",
                    fontSize: "18px",
                  }}
                >
                  Ship to this address
                </button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </SimpleGrid>

        <Box width="230px">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    textAlign="left"
                  >
                    <Heading as="h1" fontSize="16px">
                      Bag
                    </Heading>
                    {<Heading fontSize="14px">{ItemCount} Items</Heading>}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    textAlign="left"
                  >
                    <Heading as="h1" fontSize="16px">
                      Price Details
                    </Heading>
                    {<Heading fontSize="14px">₹{Totaldiscountprice}</Heading>}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Bag MRP ({ItemCount} items)</span>
                  <span>₹{Totalprice}</span>
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>After Discount</span>
                  <span>₹{Totaldiscountprice}</span>
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Saving At this Time</span>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#2de02d",
                    }}
                  >
                    {Totalprice - Totaldiscountprice}
                  </span>
                </Text>
                <Heading
                  display={"flex"}
                  justifyContent="space-between"
                  as="h1"
                  fontSize="16px"
                >
                  <span>You Pay</span> <span>₹{Totaldiscountprice}</span>{" "}
                </Heading>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box display="flex" gap="10px" mt="12px" p="12px 17px">
            <Text fontSize={"12px"}>
              Buy authentic products. Pay securely. Easy returns and exchange
            </Text>
            <Image
              w="39px"
              h="37px"
              src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png"
              alt="image"
            />
          </Box>
        </Box>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default Address;
