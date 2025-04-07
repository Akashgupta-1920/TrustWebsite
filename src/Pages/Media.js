import CommonBanner from "../Components/Common";
import gallery_banner from "../Assests/gallery.png";
import "../Components/header.css";
import "../Components/epilo.css";
import line from "../Assests/line.png";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import img1 from "../Assests/Media/img1.webp";
import img2 from "../Assests/Media/img2.webp";
import img3 from "../Assests/Media/img3.webp";
import img4 from "../Assests/Media/img4.webp";
import img5 from "../Assests/Media/img5.jpeg";
import img6 from "../Assests/Media/img6.jpeg";
import img7 from "../Assests/Media/img7.jpeg";
import img8 from "../Assests/Media/img8.jpeg";
const Media = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <>
      <CommonBanner image={gallery_banner} />

      <Flex
        width={{ base: "100%", lg: "80%" }}
        margin={"auto"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={{ base: 5, lg: 6 }}
      >
        <Text
          textAlign={"center"}
          className="epilogue-bold"
          color={"#F56A02"}
          fontSize={{ base: "1.6rem", lg: "2.8rem" }}
        >
          Media
        </Text>
        <Box display={{ base: "none", lg: "flex" }} width={"6%"}>
          <Image width={"100%"} height={"100%"} src={line} alt="line" />
        </Box>
      </Flex>

      <Flex flexDirection={"column"} py={6}>
        <Flex width={"100%"}>
          <Grid
            margin={"auto"}
            width={{ base: "90%", lg: "80%" }}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
            py={12}
            gap={{ base: 6, lg: 10 }}
          >
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
                  cursor="pointer"
                >
                  <LazyLoad height={200} once>
                    <Image
                      src={image}
                      alt={`media ${index + 1}`}
                      width={"100%"}
                      height={"300px"}
                    />
                  </LazyLoad>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>

      <Flex alignItems={"center"} justifyContent={"center"} py={6}>
        <Box
          width="100%"
          maxW="800px"
          mx="auto"
          p={2}
          border="2px solid #ccc"
          borderRadius="md"
        >
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/kCO25UMFgOU?si=MIBf8SiyYLx5OLQg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Box>
      </Flex>
    </>
  );
};

export default Media;
