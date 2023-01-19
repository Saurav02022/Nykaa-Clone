import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Container,
} from "@chakra-ui/react";
import PriceDetail from "../CartPage/PriceDetail";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsArrowRightCircle, BsCashCoin, BsGift } from "react-icons/bs";
import { SiPaytm } from "react-icons/si";
import { MdOutlineQrCode2 } from "react-icons/md";

function PaymentPage() {
  return (
    <Flex
      direction="row"
      border="0px solid black"
      width="90%"
      margin="auto"
      justifyContent="space-between"
      marginTop="20px"
      marginBottom="20px"
      padding="10px"
    >
      <Flex direction="column" gap="10" border="0px solid red" width="60%">
        <Flex direction="column">
          <Heading
            as="h1"
            fontSize="36px"
            fontWeight="600"
            fontFamily="Inter,sans-serif"
          >
            Choose payment method
          </Heading>
          <Text fontSize="14px" fontFamily="Inter,sans-serif">
            Choose the Payment method you prefer
          </Text>
        </Flex>
        <Flex direction="column" gap="3">
          <Text fontSize="20px" fontWeight="600" fontFamily="sans-serif">
            Payment Method Options
          </Text>
          <Flex direction="row" border="0px solid green" gap="10">
            <Flex
              direction="column"
              gap="0.5"
              border="0px solid blue"
              marginLeft="10px"
            >
              <Flex
                border="1px solid grey"
                padding="2"
                boxShadow="md"
                borderRadius="10px"
              >
                <Box border="0px solid red">
                  <AiOutlineCreditCard size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Credit/Debit Card
                  </Heading>
                  <Text color="grey">Visa,Mastercard,Rupay & more</Text>
                </Flex>
                <Box border="0px solid red" margin="auto">
                  <BsArrowRightCircle size="25" />
                </Box>
              </Flex>
              <Flex
                gap="1"
                border="1px solid grey"
                padding="2"
                boxShadow="md"
                borderRadius="10px"
              >
                <Box border="0px solid red">
                  <BsCashCoin size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Cash on delivery
                  </Heading>
                  <Text color="grey">Pay at your doorstep</Text>
                </Flex>
                <Box border="0px solid red" margin="auto">
                  <BsArrowRightCircle size="25" />
                </Box>
              </Flex>
              <Flex
                gap="1"
                border="1px solid grey"
                padding="2"
                boxShadow="md"
                borderRadius="10px"
              >
                <Box border="0px solid red">
                  <BsGift size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Gift card
                  </Heading>
                  <Text color="grey">One card for all Nykaa apps</Text>
                </Flex>
                <Box border="0px solid red" margin="auto">
                  <BsArrowRightCircle size="25" />
                </Box>
              </Flex>
              <Flex
                gap="1"
                border="1px solid grey"
                padding="2"
                boxShadow="md"
                borderRadius="10px"
              >
                <Box border="0px solid red">
                  <SiPaytm size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Paytm Wallet
                  </Heading>
                  <Text color="grey">Link your Paytm wallet and pay</Text>
                </Flex>
                <Box border="0px solid red" margin="auto">
                  <BsArrowRightCircle size="25" />
                </Box>
              </Flex>
              <Flex
                gap="1"
                border="1px solid grey"
                padding="2"
                boxShadow="md"
                borderRadius="10px"
              >
                <Box border="0px solid red">
                  <MdOutlineQrCode2 size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    UPI
                  </Heading>
                  <Text color="grey"> Google Pay, PhonePe, Paytm & more</Text>
                </Flex>
                <Box border="0px solid red" margin="auto">
                  <BsArrowRightCircle size="25" />
                </Box>
              </Flex>
            </Flex>
            <Box border="0px solid black">
              {" "}
              <PriceDetail />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" border="0px solid yellow">
        <PriceDetail />
      </Flex>
    </Flex>
  );
}

export default PaymentPage;
