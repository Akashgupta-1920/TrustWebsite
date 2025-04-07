import CommonBanner from "../Components/Common";
import gallery_banner from "../Assests/gallery_banner.png";
import "../Components/header.css";
import "../Components/epilo.css";
import line from "../Assests/line.png";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import img1 from "../Assests/Final_Galley/1.JPG";
import img2 from "../Assests/Final_Galley/2.JPG";
import img3 from "../Assests/Final_Galley/3.JPG";
import img4 from "../Assests/Final_Galley/4.JPG";
import img5 from "../Assests/Final_Galley/5.JPG";
import img6 from "../Assests/Final_Galley/6.JPG";
import img7 from "../Assests/Final_Galley/7.JPG";
import img8 from "../Assests/Final_Galley/8.JPG";
import img9 from "../Assests/Final_Galley/9.JPG";
import img10 from "../Assests/Final_Galley/10.JPG";
import img12 from "../Assests/Final_Galley/12.JPG";
import img13 from "../Assests/Final_Galley/13.JPG";
import img14 from "../Assests/Final_Galley/14.JPG";
import img15 from "../Assests/Final_Galley/15.JPG";
import img16 from "../Assests/Final_Galley/16.JPG";
import img17 from "../Assests/Final_Galley/17.JPG";
import img18 from "../Assests/Final_Galley/18.JPG";
import img19 from "../Assests/Final_Galley/19.JPG";
import img20 from "../Assests/Final_Galley/20.JPG";
import img21 from "../Assests/Final_Galley/21.JPG";
import img22 from "../Assests/Final_Galley/22.JPG";
import img24 from "../Assests/Final_Galley/24.JPG";
import img25 from "../Assests/Final_Galley/25.JPG";
import img26 from "../Assests/Final_Galley/26.JPG";
import img27 from "../Assests/Final_Galley/27.JPG";
import img28 from "../Assests/Final_Galley/28.JPG";
import img29 from "../Assests/Final_Galley/29.JPG";
import img30 from "../Assests/Final_Galley/30.JPG";
import img31 from "../Assests/Final_Galley/31.JPG";
import img32 from "../Assests/Final_Galley/32.JPG";
import img33 from "../Assests/Final_Galley/33.JPG";
import img34 from "../Assests/Final_Galley/34.jpeg";
import img35 from "../Assests/Final_Galley/35.jpeg";
import img36 from "../Assests/Final_Galley/36.jpeg";
import img37 from "../Assests/Final_Galley/37.jpeg";
import img38 from "../Assests/Final_Galley/38.jpeg";
import img39 from "../Assests/Final_Galley/39.jpeg";
import img40 from "../Assests/Final_Galley/40.jpeg";

const Galary = () => {
  const gallery = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];

  const gallery1 = [
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
  ];

  return (
    <>
      <CommonBanner image={gallery_banner} />

        <Flex
          width={{ base: "100%", lg: "80%" }}
          margin={"auto"}
          flexDirection={"row"}
          alignItems={"center"}
          py={4}
          mt={4}
          justifyContent={"center"}>
          <Text
            textAlign={"center"}
            className="epilogue-bold"
            color={"#F56A02"}
            fontSize={{ base: "1.6rem", lg: "2.8rem" }}>
            Gallery
          </Text>
          <Box display={{ base: "none", lg: "flex" }} width={"6%"}>
            <Image width={"100%"} height={"100%"} src={line} alt="line" />
          </Box>
        </Flex>

      <Flex flexDirection={"column"} gap={5}>
        <Text
          textAlign={"center"}
          fontFamily={"EkMukta"}
          fontSize={{ base: "1rem", lg: "1.8rem" }}
          fontWeight={700}
          color={"black"}>
          वर्ष 2022 - 2023
        </Text>
        <Flex width={"100%"} >
          <Grid
            margin={"auto"}
            width={{ base: "90%", lg: "80%" }}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            py={12}
            gap={{ base: 6, lg: 6 }}>
            {gallery.map((image, index) => (
              <GridItem key={index} bg={"white"} borderRadius="md">
                <Box
                  width={"100%"}
                  _hover={{
                    boxShadow: "0px 5px 10px 0px black",
                    transform: "scale(1.1)",
                  }}
                  border="1px solid #ccc"
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="sm"
                  p={2}
                  height={"100%"}
                  bg="white"
                  cursor="pointer">
                  <LazyLoad height={200} once>
                    <Image
                      src={image}
                      alt={`media ${index + 1}`}
                      width={"100%"}
                      height={{base:"140px",lg:"250px"}}

                    />
                  </LazyLoad>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>

      <Flex flexDirection={"column"} gap={5} pt={10}>
        <Text
          textAlign={"center"}
          fontFamily={"EkMukta"}
          fontSize={{ base: "1rem", lg: "1.8rem" }}
          fontWeight={700}
          color={"black"}>
          वर्ष 2023 - 2024
        </Text>
        <Flex width={"100%"} >
          <Grid
            margin={"auto"}
            width={{ base: "90%", lg: "80%" }}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            py={12}
            gap={{ base: 6, lg: 6 }}>
            {gallery1.map((image, index) => (
              <GridItem key={index} bg={"white"} borderRadius="md">
                <Box
                  width={"100%"}
                  _hover={{
                    boxShadow: "0px 5px 10px 0px black",
                    transform: "scale(1.1)",
                  }}
                  border="1px solid #ccc"
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="sm"
                  p={2}
                  height={"100%"}
                  bg="white"
                  cursor="pointer">
                  <LazyLoad height={200} once>
                    <Image
                      src={image}
                      alt={`media ${index + 1}`}
                      width={"100%"}
                      height={{base:"140px",lg:"250px"}}

                    />
                  </LazyLoad>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default Galary;
