import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css"

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
import line from "../Assests/line.png";
import "./epilo.css";
const images = [
  [img1, img2, img3, img4],
  [img5, img6, img7, img8],
  [img9, img10, img11, img12],
  [img13, img14, img15, img16],
];
export default function Certification () {
  return (
    <Flex background={"#FFFAE1"} flexDirection={"column"} py={6} mb={10}>
      <Box width={"80%"} margin={"auto"} mb={10}>
        <Flex justifyContent={"space-between"} padding={4}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            width={{ base: "100%", lg: "90%" }}
            paddingLeft={{ base: 0, lg: 20 }}>
            <Text
              color={"#F56A02"}
              className="epilogue-bold"
              fontSize={{ base: "1.8rem", lg: "3rem" }}
              fontWeight={800}>
              Our Certificates
            </Text>
            <Box display={{ base: "none", lg: "flex" }} mt={2}>
              <Image width={"100%"} height={"100%"} src={line} alt="line" />
            </Box>
          </Flex>
          <Flex
            width={"10%"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            display={{ base: "none", lg: "flex" }}>
            <Box className="swiper-pagination" />
          </Flex>
        </Flex>

        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          {images.map((slideImages, index) => (
            <SwiperSlide key={index} style={{ background: "transparent" }}>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                gap={6}
                width="100%">
                {slideImages.map((img, imgIndex) => (
                  <Box
                    key={imgIndex}
                    width={{ base: "100%", lg: "25%" }}
                    background="#FFFFFF"
                    border="1px solid #d9dcde"
                    rounded="md"
                    py={2}
                    px={2}
                    boxShadow="md"
                    height={330}>
                    <Image
                      src={img}
                      alt={`img${imgIndex + 1}`}
                      width="100%"
                      height="auto"
                    />
                  </Box>
                ))}
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
}
