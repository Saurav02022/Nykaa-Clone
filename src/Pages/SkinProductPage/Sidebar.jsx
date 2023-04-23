import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
function Sidebar() {
  return (
    <>
      
        <Box
          width={"100%"}
          m="auto"
          h="auto"
        //   border={"1px solid black"}
          fontSize={"15px"}
        >
          {/* <Text mb={"10px"} fontWeight="bold" >Browse by:</Text> */}
          <hr />
          <Text paddingBottom={"10px"} pt="10px" fontWeight={"bold"}>
            Filter By:
          </Text>
          <hr />
          {/* category */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Category
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      overflow="scroll"
                      h={"400px"}
                      overflowX={"hidden"}
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Blush (709)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Foundation (586)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Highlighter (499)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Concealer (392)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Face Primer (363)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Compact (280)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Makeup Remover (175)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Spray (134)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Bronzer (95)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Loose Powder (90)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Contour (81)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Sindoor (8)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Tinted Moisturizer (5)</Text>
                      </Box>
                    
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>

          {/* Brand */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Brands
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Maybelline New York</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Lakme</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>NYC</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>PAC</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>SUGAR</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Half N Half</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
           {/* price */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Price
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Rs. 0  -  Rs. 499   (1000)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Rs. 500  -  Rs. 999   (990) (151)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Rs. 1000  -  Rs. 1999   (670)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Rs. 2000  -  Rs. 2999  (780)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Rs. 3000  -  Rs. 4999 (415)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>More than Rs. 5000 (118)</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
          {/* discount */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Discount
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>60% and above (42)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>50% and above(251)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>40% and above (470)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>30% and above (1580)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>20% and above (915)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>10% and above (1008)</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
          {/* rating */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Avg. Customer Rating
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>4 stars and above (2552)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>3 stars and above(1400)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                   <Text>2 stars and above (200)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                      <Text>1 stars and above(100)</Text>
                      </Box>
                   
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>

          {/* Preference */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Preference
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Paraben Free</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Oil Free</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Natural</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Vitamin E</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Herbal</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Organic</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
          {/* Color */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Color
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Nude</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Brown</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Pink</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Multi-color</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Gold</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Beige</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
          {/* pack size */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Pack Size
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Single (336)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Pack  (255)</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
          {/* others */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Formulation
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Single (336)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Pack  (255)</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
          {/* other 1 */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Finish
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Single (336)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Pack  (255)</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>

          {/* other2 */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                        Coverage
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Single (336)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Pack  (255)</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
          {/* {others3} */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem bg="white">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          SPF
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Single (336)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Pack  (255)</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>

    </>
  )
}

export default Sidebar