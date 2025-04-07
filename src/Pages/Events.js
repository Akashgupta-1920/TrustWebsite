import CommonBanner from "../Components/Common";
import gallery_banner from "../Assests/event_banner.png";
import "../Components/header.css";
import "../Components/epilo.css";
import line from "../Assests/line.png";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import img1 from "../Assests/Final_Events/1.JPG";
import img2 from "../Assests/Final_Events/2.jpeg";
import img3 from "../Assests/Final_Events/3.jpeg";
import img4 from "../Assests/Final_Events/4.JPG";
import img41 from "../Assests/Final_Events/4A.JPG";
import img42 from "../Assests/Final_Events/4B.JPG";
import img5 from "../Assests/Final_Events/5.jpg";
import img6 from "../Assests/Final_Events/6.JPG";
import img61 from "../Assests/Final_Events/6A.JPG";
import img62 from "../Assests/Final_Events/6B.JPG";
import img63 from "../Assests/Final_Events/6C.jpeg";
import img7 from "../Assests/Final_Events/7.jpg";
import img8 from "../Assests/Final_Events/8.jpeg";
import img9 from "../Assests/Final_Events/9.jpeg";
import img10 from "../Assests/Final_Events/10.JPG";
import img11 from "../Assests/Final_Events/11.JPG";
import img111 from "../Assests/Final_Events/11A.JPG";
import img112 from "../Assests/Final_Events/11B.JPG";
import img113 from "../Assests/Final_Events/11C.JPG";
import img12 from "../Assests/Final_Events/12.JPG";
import img121 from "../Assests/Final_Events/12A.JPG";
import img122 from "../Assests/Final_Events/12B.JPG";
import img123 from "../Assests/Final_Events/12C.JPG";
import img13 from "../Assests/Final_Events/13.jpeg";
import img14 from "../Assests/Final_Events/14.jpeg";
import img15 from "../Assests/Final_Events/15.jpg";
import img16 from "../Assests/Final_Events/16.jpeg";
import img17 from "../Assests/Final_Events/17.JPG";
import img171 from "../Assests/Final_Events/17A.JPG";
import img172 from "../Assests/Final_Events/17B.JPG";
import img173 from "../Assests/Final_Events/17C.JPG";
import img174 from "../Assests/Final_Events/17D.JPG";
import img18 from "../Assests/Final_Events/18.jpg";
import img19 from "../Assests/Final_Events/19.jpeg";
import img20 from "../Assests/Final_Events/20.jpeg";
import img22 from "../Assests/Final_Events/22.jpeg";
import img23 from "../Assests/Final_Events/23.jpeg";
import img231 from "../Assests/Final_Events/23A.jpeg";
import img24 from "../Assests/Final_Events/24.jpeg";
import img25 from "../Assests/Final_Events/25.jpeg";
import img251 from "../Assests/Final_Events/25A.jpeg";
import img26 from "../Assests/Final_Events/26.jpeg";
import img27 from "../Assests/Final_Events/27.jpg";
import img28 from "../Assests/Final_Events/28.jpeg";

const Events = () => {
  const Events = [
    img1,
    img2,
    img3,
    img4,
    img41,
    img42,
    img5,
    img6,
    img61,
    img62,
    img63,
    img7,
    img8,
    img9,
    img10,
    img11,
    img111,
    img112,
    img113,
  ];

  const Events1 = [
    img12,
    img121,
    img122,
    img123,
    img13,
    img14,
    img15,
    img16,
    img17,
    img171,
    img172,
    img173,
    img174,
    img18,
    img19,
    img20,
    img22,
    img23,
    img231,
    img24,
    img25,
    img251,
    img26,
    img27,
    img28,
  ];

  return (
    <>
      <CommonBanner image={gallery_banner} />
 
        <Flex
          width={{ base: "100%", lg: "80%" }}
          margin={"auto"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          py={4}
          mt={4}
        >
          <Text
            textAlign={"center"}
            className="epilogue-bold"
            color={"#F56A02"}
            fontSize={{ base: "1.6rem", lg: "2.8rem" }}
          >
            Events
          </Text>
          <Box display={{ base: "none", lg: "flex" }} width={"6%"}>
            <Image width={"100%"} height={"100%"} src={line} alt="line" />
          </Box>
        </Flex>

      <Flex flexDirection={"column"} gap={2}>
        <Text
          margin={"auto"}
          textAlign={"center"}
          fontFamily={"EkMukta"}
          fontSize={{ base: "1rem", lg: "1.8rem" }}
          fontWeight={700}
          color={"black"}
        >
          वर्ष 2022 - 2023
        </Text>
        <Flex width={"100%"}>
          <Grid
            margin={"auto"}
            width={{ base: "90%", lg: "80%" }}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            py={12}
            gap={{ base: 6, lg: 6 }}
          >
            {Events.map((image, index) => (
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
                  cursor="pointer"
                >
                  <LazyLoad height={200} once>
                    <Image
                      src={image}
                      alt={`media ${index + 1}`}
                      width={"100%"}
                      height={{ base: "140px", lg: "250px" }}
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
          color={"black"}
        >
          वर्ष 2023 - 2024
        </Text>
        <Flex width={"100%"}>
          <Grid
            margin={"auto"}
            width={{ base: "90%", lg: "80%" }}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            py={12}
            gap={{ base: 6, lg: 6 }}
          >
            {Events1.map((image, index) => (
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
                  cursor="pointer"
                >
                  <LazyLoad height={200} once>
                    <Image
                      src={image}
                      alt={`media ${index + 1}`}
                      width={"100%"}
                      height={{ base: "140px", lg: "250px" }}
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

export default Events;
