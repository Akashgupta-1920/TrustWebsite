import CommonBanner from "./Common";
import about from "../Assests/about.png";
import about1 from "../Assests/about1.png";
import about2 from "../Assests/about2.png";
import slide1 from "../Assests/aboutSlider/slide1.png";
import slide2 from "../Assests/aboutSlider/slide2.png";
import slide3 from "../Assests/aboutSlider/slide3.png";
import slide4 from "../Assests/aboutSlider/slide4.png";
import slide5 from "../Assests/aboutSlider/slide5.png";
import slide6 from "../Assests/aboutSlider/slide6.png";
import slide7 from "../Assests/aboutSlider/slide7.png";
import slide8 from "../Assests/aboutSlider/slide8.png";
import slide9 from "../Assests/aboutSlider/slide9.png";
import slide10 from "../Assests/aboutSlider/slide10.png";
import slide11 from "../Assests/aboutSlider/slide11.png";
import slide12 from "../Assests/aboutSlider/slide12.png";
import slide13 from "../Assests/aboutSlider/slide13.png";
import slide14 from "../Assests/aboutSlider/slide14.png";
import slide15 from "../Assests/aboutSlider/slide15.png";
import slide16 from "../Assests/aboutSlider/slide16.png";
import slide17 from "../Assests/aboutSlider/slide17.png";
import slide18 from "../Assests/aboutSlider/slide18.png";
import about_banner2 from "../Assests/about_banner2.png";
import about_banner3 from "../Assests/about_banner3.png";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./header.css";
import "./epilo.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { useTranslation } from "react-i18next";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import b1 from "../Assests/Members/b1.jpg";
import a1 from "../Assests/Members/a1.jpeg";
import { t } from "i18next";

const About = () => {
  const { t } = useTranslation();

  const advocate = [
    {
      id: "1",
      name: "Advocate Naveen Kumar Raheja",
      title: "(Legal Advisor)",
      img: a1,
    },
  ];

  const activem = [
    { id: "1", name: " Subodh Kumar Singh" },
    { id: "2", name: "Sandeep Kumar" },
    { id: "3", name: "Mukesh Kumar" },
    { id: "4", name: "Ashutosh Kumar Gupta" },
    { id: "5", name: "Harish Kumar" },
    { id: "6", name: "Gautam Kumar" },
  ];
  const navigation = useNavigate();
  return (
    <>
      <CommonBanner image={about} />
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        width={{ base: "90%", lg: "80%" }}
        margin={"auto"}
        pb={10}
        pt={4}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex
          width={{ base: "100%", lg: "50%" }}
          flexDirection={"column"}
          gap={4}
        >
          <Text
            width={{ base: "100%", lg: "80%" }}
            className="epilogue-bold"
            fontWeight={"bold"}
            color={"#F56A02"}
            textAlign={{ base: "center", lg: "start" }}
            fontSize={{ base: "2rem", lg: "2.2rem" }}
          >
            {t("a1")}
          </Text>
          <Text
            width={"100%"}
            fontFamily={"EkMukta"}
            fontWeight={400}
            textAlign={{ base: "center", lg: "start" }}
            color={"black"}
            fontSize={{ base: "1rem", lg: "1rem" }}
          >
            {t("a2")}
          </Text>
          <Text
            width={"100%"}
            fontFamily={"EkMukta"}
            fontWeight={400}
            textAlign={{ base: "center", lg: "start" }}
            color={"black"}
            fontSize={{ base: "1rem", lg: "1rem" }}
          >
            {t("a3")}
          </Text>
          <Button
            borderRadius={"full"}
            p={6}
            color={"white"}
            background={"#F56A02"}
            width={{ base: "50%", lg: "27%" }}
            margin={{ base: "auto", lg: 0 }}
            onClick={() => navigation("/whydonation")}
            fontSize={"1rem"}
            _hover={{ background: "black" }}
          >
            {t("a4")}
          </Button>
        </Flex>
        <Box
          width={{ base: "100%", lg: "50%" }}
          display={{ base: "none", lg: "block" }}
        >
          <Image height={"100%"} width={"100%"} src={about1} alt="about1" />
        </Box>
      </Flex>

      <Flex
        display={{ base: "flex", lg: "flex" }}
        position="relative"
        width="100%"
        bgImage={about_banner2}
        bgSize="cover"
        bgPosition={{ base: "right", lg: "center" }}
        alignItems="center"
        flexDirection={"row"}
        justifyContent="center"
        py={10}
        margin={"auto"}
        mb={10}
      >
        <Flex
          width={{ base: "90%", lg: "80%" }}
          margin={"auto"}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: 5, lg: 0 }}
        >
          <Flex width={{ base: "100%", lg: "50%" }} alignItems={"center"}>
            <Image
              height={{ base: "100%", lg: "90%" }}
              width={{ base: "100%", lg: "80%" }}
              src={about2}
              alt="about2"
            />
          </Flex>
          <Flex
            width={{ base: "100%", lg: "50%" }}
            flexDirection={"column"}
            gap={5}
            alignItems={"flex-end"}
            justifyContent={"center"}
          >
            <Text
              width={{ base: "100%", lg: "80%" }}
              className="epilogue-bold"
              fontWeight={"bold"}
              color={"#F56A02"}
              textAlign={{ base: "center", lg: "end" }}
              fontSize={{ base: "1.6rem", lg: "2rem" }}
            >
              {t("a5")}
            </Text>
            <Text
              width={"100%"}
              fontFamily={"EkMukta"}
              fontWeight={400}
              textAlign={{ base: "center", lg: "end" }}
              color={"black"}
              fontSize={{ base: "1rem", lg: "1rem" }}
            >
              {t("a6")}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* hehe */}

      <Text
        width={"100%"}
        fontFamily={"EkMukta"}
        textAlign={{ base: "center", lg: "end" }}
        fontWeight={400}
        color={"black"}
        fontSize={{ base: "1rem", lg: "1rem" }}
      >
        {t("a7")}
      </Text>

      <Flex
        borderTop={"1px solid #999999"}
        borderBottom={"1px solid #999999"}
        display={{ base: "flex", lg: "flex" }}
        position="relative"
        width="100%"
        bgImage={about_banner3}
        bgSize="cover"
        bgPosition={{ base: "start", lg: "center" }}
        alignItems="center"
        backgroundRepeat={"no-repeat"}
        flexDirection={"column"}
        py={10}
        margin={"auto"}
      >
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
          className="mySwiper"
        >
          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin="auto"
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent="space-between"
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection="column"
                gap={5}
                justifyContent="center"
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight="bold"
                  color="#F56A02"
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a8")}
                </Text>

                <Text
                  width="100%"
                  fontFamily="EkMukta"
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color="black"
                  fontSize="1rem"
                >
                  {t("a9")}
                </Text>
              </Flex>

              <Flex width={{ base: "100%", lg: "40%" }} alignItems="center">
                <Image margin="auto" src={slide1} alt="about1" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin="auto"
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent="space-between"
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection="column"
                gap={5}
                justifyContent="center"
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight="bold"
                  color="#F56A02"
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a10")}
                </Text>

                <Text
                  width="100%"
                  fontFamily="EkMukta"
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color="black"
                  fontSize="1rem"
                >
                  {t("a11")}
                </Text>
              </Flex>

              <Flex width={{ base: "100%", lg: "30%" }} alignItems="center">
                <Image margin="auto" src={slide2} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin="auto"
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent="space-between"
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection="column"
                gap={5}
                justifyContent="center"
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight="bold"
                  color="#F56A02"
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a12")}
                </Text>

                <Text
                  width="100%"
                  fontFamily="EkMukta"
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color="black"
                  fontSize="1rem"
                >
                  {t("a13")}
                </Text>
              </Flex>

              <Flex width={{ base: "100%", lg: "30%" }} alignItems="center">
                <Image margin="auto" src={slide3} alt="about3" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a14")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a15")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide4} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a16")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a17")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide5} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a18")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a19")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide6} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a20")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a21")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide7} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a22")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a23")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide8} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a24")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a25")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide9} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a26")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a27")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide10} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a28")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a29")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide11} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a30")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a31")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide12} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a32")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a33")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide13} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a34")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a35")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide14} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          {/* hehe */}
          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a36")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a37")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide17} alt="about3" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a38")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a39")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide18} alt="about4" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a40")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a41")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide5} alt="about5" />
              </Flex>
            </Flex>
          </SwiperSlide>

          {/* hehef */}

          <SwiperSlide>
            <Flex
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a42")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a43")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide17} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  {t("a44")}
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  {t("a45")}
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide18} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>
        </Swiper>
        <Flex
          width={{ base: "90%", lg: "80%" }}
          display={{ base: "flex", lg: "flex" }}
          alignItems={"center"}
          justifyContent={{ base: "center", lg: "start" }}
          mt={5}
        >
          <Box className="swiper-pagination" />
        </Flex>
      </Flex>

      <Flex
        flexDirection={"column"}
        py={{ base: 8, lg: 10 }}
        width={{ base: "90%", lg: "80%" }}
        margin={"auto"}
        mt={4}
      >
        <Text
          className="epilogue-bold"
          fontSize={{ base: "1rem", lg: "2.6rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"#F56A02"}
        >
          {t("a46")}
        </Text>

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          py={12}
          gap={{ base: 6, lg: 2 }}
        >
          <GridItem bg={"white"} borderRadius="md">
            <Box
              width={{ base: "100%", lg: "100%" }}
              border="1px solid grey"
              borderRadius="md"
              overflow="hidden"
              boxShadow="sm"
              height={"100%"}
              bg="white"
              cursor="pointer"
            >
              <Image src={b1} alt={"board"} margin={"auto"} />

              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                gap={1}
                marginTop={2}
              >
                <Text
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  fontSize={{ base: "1rem", lg: "1.4rem" }}
                  color={"#F56A02"}
                >
                  Kshitij Ranjan{" "}
                </Text>
                <Text
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  fontSize={{ base: "0.7rem", lg: "1.1rem" }}
                >
                  {t("a47")}
                </Text>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Flex>

      <Flex
        flexDirection={"column"}
        py={10}
        width={{ base: "90%", lg: "80%" }}
        margin={"auto"}
      >
        <Text
          className="epilogue-bold"
          fontSize={{ base: "1rem", lg: "2.6rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"#F56A02"}
        >
          {t("a48")}
        </Text>

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          py={{ base: 8, lg: 12 }}
          gap={{ base: 6, lg: 10 }}
        >
          {advocate.map((ele) => (
            <GridItem bg={"white"} borderRadius="md">
              <Box
                width={{ base: "100%", lg: "100%" }}
                border="1px solid grey"
                borderRadius="md"
                overflow="hidden"
                boxShadow="sm"
                height={"100%"}
                bg="white"
                cursor="pointer"
              >
                <Image src={ele.img} alt={"board"} margin={"auto"} />

                <Flex
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={1}
                  marginTop={2}
                >
                  <Text
                    className="epilogue-bold"
                    fontWeight={"bold"}
                    fontSize={{ base: "1rem", lg: "1.4rem" }}
                    color={"#F56A02"}
                  >
                    {ele.name}
                  </Text>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>

      <Flex
        flexDirection={"column"}
        gap={3}
        mt={10}
        width={"80%"}
        margin={"auto"}
      >
        <Text
          className="epilogue-bold"
          fontWeight={"bold"}
          fontSize={{ base: "1.1rem", lg: "1.5rem" }}
          color={"#F56A02"}
        >
          {t("a50")}
        </Text>
        <Flex flexDirection={"column"}>
          <UnorderedList>
            {activem.map((ele) => (
              <ListItem
                style={{
                  textDecorationLine: "underline",
                  fontWeight: 600,
                  marginBottom: 3,
                }}
              >
                {ele.name}
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
