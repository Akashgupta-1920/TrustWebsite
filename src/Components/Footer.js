import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  textDecoration,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { LuPhoneCall } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import "./header.css";
import "./epilo.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import axios from "axios";
import { baseURL } from "../services /apiEndPoint";
const Footer = () => {
  const [ userData, setUserData ] = useState(null);
  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      try
      {
        // const response = await axios.get(
        //   "https://api.mbbsdunia.com/api/count"
        // );
        // const response = await axios.get(
        //   "https://api.lsstrust.org.in/api/count"
        // );
        const fullUrl = `${baseURL}${"count"}`;
      console.log("fullUrl==>",fullUrl)

        const response = await axios.get(
          fullUrl
            // "http://localhost:3009/count"
        );
        // console.log("check", response.data);
        setUserData(response?.data);
      } catch (error)
      {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const todayVisitors = userData?.todayVisitors?.toString().split("")?.map(Number);
  const totalVisitors = userData?.totalVisitors?.toString().split("")?.map(Number);

  const {
    isOpen: isOpenpnp,
    onOpen: onOpenpnp,
    onClose: onClosepnp,
  } = useDisclosure();

  const {
    isOpen: isOpenTnC,
    onOpen: onOpenTnC,
    onClose: onCloseTnC,
  } = useDisclosure();
  const {
    isOpen: isOpenFnQ,
    onOpen: onOpenFnQ,
    onClose: onCloseFnQ,
  } = useDisclosure();



  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7256f4cc-b435-4708-8609-97ec0ab0074d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <Box
      background={"#EAEAEA"}
      paddingTop={7}
      paddingBottom={2}
      width={"100vw"}
      mt={6}
    >
      <Box
        py={6}
        width={"80%"}
        marginX={"auto"}
        borderBottom={"1px solid grey"}
        borderTop={"1px solid grey"}
      >
        <Text className="epilogue-bold" fontWeight={700} textAlign={"center"}>
          {t("sells_live")}
          {/* Save lives: Donate to LSSF Trust for education, farmer aid, women's
          empowerment, village support, sports incentives, and marriage
          assistance. */}
        </Text>
      </Box>

      <Flex
        width={"80%"}
        marginX={"auto"}
        borderBottom={"1px solid grey"}
        borderTop={"1px solid grey"}
        py={14}
        gap={{ base: 10, lg: 0 }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Flex
          width={{ base: "100%", md: "70%", lg: "65%" }}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: 10, lg: 1 }}
        >
          <Flex
            width={{ base: "100%", lg: "30%" }}
            flexDirection={"column"}
            gap={5}
            alignItems={"start"}
            justifyContent={"start"}
          >
            <Box>
              <Text
                className="epilogue-bold"
                fontSize={"0.9rem"}
                fontWeight={900}
                color={"#F56A02"}
              >
                Quick Links
              </Text>
              <Box height="2px" backgroundColor="black" width={"100%"} />
            </Box>
            <Link to={"/"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                {t("Home")}
              </Text>
            </Link>
            <Link to={"/about"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                {t("About")}

                {/* About us */}
              </Text>
            </Link>
            <Link to={"/annual"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                {t("Annual_Report")}

                {/* Annual Report */}
              </Text>
            </Link>
            <Link to={"/certificate"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                {t("Certification")}

                {/* Certification */}
              </Text>
            </Link>

            <Link to={"/terms"}><Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                {t("Term_condi__heading1")}
              </Text></Link>


            <Box>
              <Text
                textDecorationLine={"underline"}
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"0.9rem"}
                onClick={onOpenFnQ}
                cursor={"pointer"}
              >
                {t("FAQs")}
              </Text>

              <Modal
                size={"4xl"}
                onClose={onCloseFnQ}
                height={"60%"}
                isOpen={isOpenFnQ}
                isCentered
              >
                <ModalOverlay
                  bg="blackAlpha.300"
                  backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent>
                  <ModalHeader
                    textAlign={"center"}
                    fontSize={"1.6rem"}
                    color={"#F56A01"}
                  >
                    LSSF TRUST : {t("heading_FAQ")}
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {[
                      {
                        question: t('question_FAQ1'),
                        answer: t('answer_FAQ1'),
                      },
                      {
                        question: t('question_FAQ2'),
                        answer: t('answer_FAQ2'),
                      },
                      {
                        question: t('question_FAQ3'),
                        answer: t('answer_FAQ3'),
                      },
                      {
                        question: t('question_FAQ4'),
                        answer: t('answer_FAQ4'),
                        details: t('details_FAQ4', { returnObjects: true }),
                      },
                      {
                        question: t('question_FAQ5'),
                        answer: t('answer_FAQ5'),
                        details: t('details_FAQ5', { returnObjects: true }),
                      },
                      {
                        question: t('question_FAQ6'),
                        answer: t('answer_FAQ6'),
                      },
                      {
                        question: t('question_FAQ7'),
                        answer: t('answer_FAQ7'),
                      },
                      {
                        question: t('question_FAQ8'),
                        answer: t('answer_FAQ8'),
                        details: t('details_FAQ8', { returnObjects: true }),
                      },
                    ].map(({ question, answer, details }, index) => (
                      <Accordion allowMultiple key={index}>
                        <AccordionItem>
                          {({ isExpanded }) => (
                            <>
                              <h2>
                                <AccordionButton>
                                  <Box as="span" flex="1" textAlign="left">{question}</Box>
                                  {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                {answer}
                                {details && (
                                  <UnorderedList>
                                    {details.map((detail, i) => <ListItem key={i}>{detail}</ListItem>)}
                                  </UnorderedList>
                                )}
                              </AccordionPanel>
                            </>
                          )}
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </ModalBody>

                </ModalContent>
              </Modal>
            </Box>
          </Flex>

          <Flex
            width={{ base: "100%", lg: "30%" }}
            flexDirection={"column"}
            gap={5}
            alignItems={"start"}
            justifyContent={"start"}
            pt={{ base: 0, lg: 9 }}
          >
            <Link to={"/gallery"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                {t("Gallery")}
              </Text>
            </Link>
            <Link to={"/event"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                {t("Events")}
              </Text>
            </Link>
            <Link to={"/media"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                {t("Media")}
              </Text>
            </Link>
            <Link to={"/contact"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                {t("Contact_us")}
              </Text>
            </Link>

          <Link to={"/privacy"}><Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                {t("Privacy_Policy")}
              </Text></Link>
          </Flex>

          <Flex
            width={{ base: "100%", lg: "30%" }}
            flexDirection={"column"}
            gap={5}
            alignItems={"start"}
            justifyContent={"start"}
          >
            <Box>
              <Text
                className="epilogue-bold"
                fontSize={"0.9rem"}
                fontWeight={900}
                color={"#F56A02"}
              >
                Contact
              </Text>
              <Box height="2px" backgroundColor="black" width={"100%"} />
            </Box>
            <Flex flexDirection={"row"} gap={2} alignItems={"center"}>
              <Box borderRadius={"50%"} background={"#F56A02"} p={1}>
                {" "}
                <LuPhoneCall color="white" size={12} />
              </Box>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                +91-9319965799
              </Text>
            </Flex>

            <Flex flexDirection={"row"} gap={2} alignItems={"center"}>
              <Box borderRadius={"50%"} background={"#F56A02"} p={1}>
                <FiMail color="white" size={12} />
              </Box>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
              Lssftrust@gmail.com
              </Text>
            </Flex>

            <Flex flexDirection={"row"} gap={2} alignItems={"center"}>
              <Box borderRadius={"50%"} background={"#F56A02"} p={1}>
                <TfiWorld color="white" size={12} />
              </Box>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                www.lsstrust.org.in/
              </Text>
            </Flex>
          </Flex>
        </Flex>
 
        <Flex
          width={{ base: "100%", lg: "35%" }}
          flexDirection={"column"}
          gap={5}
          alignItems={"start"}
          justifyContent={"start"}
        >
          <Text
            className="epilogue-bold"
            fontSize={"0.9rem"}
            fontWeight={900}
            color={"black"}
          >
            Subscribe to our email newsletter
          </Text>
 {/* Form Start */}
  <form onSubmit={onSubmit} style={{ width: "100%" }}>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            width={"100%"}
            gap={6}
          >
            <Input
  name="email"
  type="email"
  required
  border={"1px solid #000000"}
  placeholder="Enter your Gmail"
  borderRadius={"full"}
  width={{ base: "100%", lg: "70%" }}
  p={4}
/>
            <Button
              background={"#F56A02"}
              color={"white"}
              borderRadius={"full"}
              type="submit"
              p={4}
              _hover={{ bg: "black" }}
            >
              Subscribe
            </Button>
          </Flex>
    </form>      




          <Box>
            <Text
              className="epilogue-bold"
              fontSize={"0.9rem"}
              fontWeight={600}
              color={"black"}
              mb={1}
            >
              Follow Us
            </Text>
            <Flex gap={4}>
              <a
                href="https://youtube.com/@lssftrust?si=-PjIzvdWyBxeFU6_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={18} color="#F56A02" />{" "}
              </a>
              <a
                href="https://www.facebook.com/lssftrust"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaFacebookF size={18} color="#F56A02" />{" "}
              </a>
              <a
                href="https://www.instagram.com/lssf_trust/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={18} color="#F56A02" />
              </a>
            </Flex>

            <Flex mt={4} flexDirection="column" gap={2}>
              <Text fontSize="16px" fontWeight="bold" color="#333">
                Total Visitors
              </Text>
              <Grid
                templateColumns={`repeat(${ userData?.totalVisitors }, 1fr)`}
                gap={2}
                justifyContent="center"
              >
                {totalVisitors?.map((digit, index) => (
                  <Box
                    key={index}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor="#F56A02"
                    color={"#F56A02"}
                    textAlign="center"
                    px={2}
                    fontWeight={"bold"}
                  >
                    {digit}
                  </Box>
                ))}
              </Grid>
            </Flex>
            <Flex mt={4} flexDirection="column" gap={2}>
              <Text fontSize="16px" fontWeight="bold" color="#333">
                Today Visitors
              </Text>
              <Grid
                templateColumns={`repeat(${ userData?.totalVisitors }, 1fr)`}
                gap={2}
                justifyContent="center"
              >
                {todayVisitors?.map((digit, index) => (
                  <Box
                    key={index}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor="#F56A02"
                    color={"#F56A02"}
                    textAlign="center"
                    px={2}
                    fontWeight={"bold"}
                  >
                    {digit}
                  </Box>
                ))}
              </Grid>
            </Flex>
          </Box>
        </Flex>
       
  {/* Form End */}
      </Flex>



      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        width={{ base: "80%", lg: "70%" }}
        justifyContent={"space-between"}
        margin={"auto"}
      >
        <Text
          fontFamily={"EkMukta"}
          textAlign={"center"}
          fontWeight={600}
          fontSize={"0.9rem"}
          mt={2}
        >
          @2024 All rights reserved.
        </Text>

        <Text
          fontFamily={"EkMukta"}
          textAlign={"center"}
          fontWeight={900}
          fontSize={"1rem"}
          mt={2}
        >
          Developed And Managed By{" "}
          <Text
            as="a"
            href="https://arvmultimedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="#F56A02"
            fontWeight={900}
            _hover={{ textDecoration: "underline" }}
            cursor="pointer"
          >
            ARV Multimedia
          </Text>
        </Text>
      </Flex>

    </Box>
  );
};

export default Footer;
