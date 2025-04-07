import CommonBanner from "../Components/Common";
import gallery_banner from "../Assests/certificate_banner.png";
import "../Components/header.css";
import "../Components/epilo.css";
import line from "../Assests/line.png";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import img1 from "../Assests/Certificates/c1.jpg";
import img2 from "../Assests/Certificates/c2.jpeg";
import img3 from "../Assests/Certificates/c3.jpeg";
import img4 from "../Assests/Certificates/c4.jpeg";
import img5 from "../Assests/Certificates/c5.jpeg";
import img6 from "../Assests/Certificates/c6.jpeg";
import img7 from "../Assests/Certificates/c7.jpeg";
import img8 from "../Assests/Certificates/c8.jpeg";
import img9 from "../Assests/Certificates/c9.jpeg";
import img10 from "../Assests/Certificates/c10.jpeg";
import img11 from "../Assests/Certificates/c11.jpeg";
import img12 from "../Assests/Certificates/c12.jpeg";
import img13 from "../Assests/Certificates/c13.jpeg";
import img14 from "../Assests/Certificates/c14.jpeg";
import img15 from "../Assests/Certificates/c15.jpeg";
import img16 from "../Assests/Certificates/c16.jpeg";
import img17 from "../Assests/Certificates/c17.jpeg";
import img18 from "../Assests/Certificates/c18.jpeg";
import img19 from "../Assests/Certificates/c19.jpeg";
import img20 from "../Assests/Certificates/c20.jpeg";
import img21 from "../Assests/Certificates/c21.jpg";

const Certification  = () => {
  const images = [
    img1,
    img2,
    img21,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
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
        mt={{ base: 5, lg: 6 }}>
        <Text
          textAlign={"center"}
          className="epilogue-bold"
          color={"#F56A02"}
          fontSize={{ base: "1.6rem", lg: "2.8rem" }}>
          Certification 
        </Text>
        <Box display={{ base: "none", lg: "flex" }} width={"6%"}>
          <Image width={"100%"} height={"100%"} src={line} alt="line" />
        </Box>
      </Flex>

      <Flex flexDirection={"column"} pb={6}>
        <Flex width={"100%"} >
          <Grid
            margin={"auto"}
            width={{ base: "90%", lg: "80%" }}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            py={12}
            gap={{ base: 6, lg: 6 }}>
            {images.map((image, index) => (
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

export default Certification ;
