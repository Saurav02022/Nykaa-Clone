import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import CarouselSlider from "./Carousel";
import { after_Carousel_images } from "./Data/afterCarouselImages";
import { TopBrands_Images } from "./Data/TopBrandsImages";
import CardItem from "./Components/Card";
import { afterTopBrands } from "./Data/afterTopBrands";
import { OnlyAtNykaa } from "./Data/OnlyAtNykaa";
import TransParentCard from "./Components/TransparentCard";
import { afterOnlyatNaykaa } from "./Data/afterOnlyatNaykaa.js";
import { FeaturedBrands, afterFeatureBrand } from "./Data/FeaturedBrand";
import { BeautyAdvice } from "./Data/BeautyAdvice";

const HomePage = () => {
  return (
    <>
      <Box border={"0px solid red"} marginTop="5">
        <Box border={"0px solid blue"}>
          <Heading as="h3" fontSize={"24px"} fontFamily="Inter" marginLeft="20">
            Best In Beauty
          </Heading>
        </Box>
        <Box mt={"15px"}>
          <CarouselSlider />
        </Box>
      </Box>
      <Flex
        gap={1}
        width="90%"
        margin={"auto"}
        mt="-10"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        {after_Carousel_images.map((image) => (
          <Box>
            <Image src={image} />
          </Box>
        ))}
      </Flex>
      <Flex width="90%" margin={"auto"}>
        <Image
          src="https://images-static.nykaa.com/uploads/2030f573-1d09-432d-aacb-24672ba9a0e1.jpg?tr=w-2400,cm-pad_resize"
          marginTop={"20px"}
        />
      </Flex>
      <Heading
        as="h3"
        fontSize={"24px"}
        fontFamily="Inter"
        marginLeft="20"
        marginTop={"5"}
      >
        Top Brands
      </Heading>
      <Flex
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(3,1fr)",
        }}
        width="90%"
        margin="auto"
        gap={5}
        marginTop="20px"
      >
        {TopBrands_Images.map(({ src, pink, grey }) => (
          <CardItem
            src={src}
            h1Size={"20px"}
            h1Weight={"600"}
            h1color={"#E80071"}
            h1={pink}
            h3Size={"16px"}
            h3Weight={"500"}
            h3color={"#5C6873"}
            h3={grey}
            paddingY={"20px"}
          />
        ))}
      </Flex>
      <Flex
        gap={1}
        width="90%"
        margin={"auto"}
        mt={5}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        {afterTopBrands.map((image) => (
          <Box>
            <Image src={image} />
          </Box>
        ))}
      </Flex>
      <Box border={"0px solid red"} marginTop="5">
        <Heading as="h3" fontSize={"24px"} fontFamily="Inter" marginLeft="20">
          Only At Nykaa
        </Heading>
        <Flex
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(3,1fr)",
          }}
          width="90%"
          margin="auto"
          gap={5}
          marginTop="20px"
        >
          {OnlyAtNykaa.map(({ src, h1, h3 }) => (
            <CardItem
              src={src}
              h1Size={"20px"}
              h1Weight={"600"}
              h1color={"black"}
              h1={h1}
              h3Size={"16px"}
              h3Weight={"500"}
              h3color={"#5C6873"}
              h3={h3}
              paddingY={"20px"}
            />
          ))}
        </Flex>
        <Flex direction={"column"} mt="5" gap={"3"}>
          <Heading as="h3" fontSize={"24px"} fontFamily="Inter" marginLeft="20">
            Discover Our Favourites
          </Heading>
          <Image
            src="https://images-static.nykaa.com/uploads/82eed1ab-64b2-4cb9-818b-9b39cd9284ec.jpg?tr=w-2400,cm-pad_resize"
            width={"90%"}
            margin="auto"
          />
        </Flex>
        <Flex
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(5,1fr)",
            xl: "repeat(5,1fr)",
          }}
          width="90%"
          margin="auto"
          gap={5}
          marginTop="20px"
        >
          {afterOnlyatNaykaa.map(({ src, text }) => (
            <TransParentCard src={src} text={text} />
          ))}
        </Flex>
        <Heading
          as="h3"
          fontSize={"24px"}
          fontFamily="Inter"
          marginLeft="20"
          marginTop={"5"}
        >
          Featured Brands
        </Heading>
        <Flex
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(5,1fr)",
            xl: "repeat(5,1fr)",
          }}
          width="90%"
          margin="auto"
          gap={5}
          marginTop="20px"
        >
          {FeaturedBrands.map(({ src, text, disc }) => (
            <CardItem
              src={src}
              h1Size={"20px"}
              h1Weight={"600"}
              h1color={"black"}
              h1={text}
              h3Size={"16px"}
              h3Weight={"500"}
              h3color={"#5C6873"}
              h3={disc}
              paddingY={"20px"}
            />
          ))}
        </Flex>
        <Flex
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(3,1fr)",
          }}
          width="90%"
          margin="auto"
          gap={5}
          marginTop="20px"
        >
          {afterFeatureBrand.map(({ src, text, disc }) => (
            <CardItem
              src={src}
              h1Size={"20px"}
              h1Weight={"600"}
              h1color={"black"}
              h1={text}
              h3Size={"16px"}
              h3Weight={"500"}
              h3color={"#5C6873"}
              h3={disc}
              paddingY={"20px"}
            />
          ))}
        </Flex>
        <Heading
          as="h3"
          fontSize={"24px"}
          fontFamily="Inter"
          marginLeft="20"
          marginTop={"5"}
        >
          Categories In Focus
        </Heading>
        <Flex
          gap={5}
          width="90%"
          margin={"auto"}
          mt={5}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
        >
          <Box>
            <Image
              src={
                "https://images-static.nykaa.com/uploads/b12f48bb-aeca-41e9-82fe-790877b62384.jpg?tr=w-1200,cm-pad_resize"
              }
            />
          </Box>
          <Box>
            <Image src="https://images-static.nykaa.com/uploads/b6e3595f-34bd-4b39-8873-4900fbce8504.gif?tr=w-1200,cm-pad_resize" />
          </Box>
        </Flex>
        <Flex marginLeft="20" marginTop={"5"} direction="column">
          <Heading as="h3" fontSize={"24px"} fontFamily="Inter">
            Beauty Advice
          </Heading>
          <Heading as="h3" fontSize={"18px"} fontFamily="Inter" color="grey">
            Discover Latest Tips & Tricks
          </Heading>
        </Flex>
        <Flex
          gap={5}
          width="90%"
          margin={"auto"}
          mt={5}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          marginBottom="12"
        >
          {BeautyAdvice.map(({ src, text, disc }) => (
            <CardItem
              h1Size={"16px"}
              h1Weight={"600"}
              h1color="black"
              h1={text}
              h3={disc}
              h3Size={"16px"}
              h3Weight="500"
              h3color={"#E80071"}
              src={src}
              paddingY={"20px"}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
};
export default HomePage;
