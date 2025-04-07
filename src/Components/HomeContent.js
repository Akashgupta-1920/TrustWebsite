import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import "./epilo.css";
import "./header.css";
import line from "../Assests/line.png";
import cycle from "../Assests/cycle.png";
import run from "../Assests/run.png";
import cloth from "../Assests/cloth.png";
import led from "../Assests/led.png";
import doctor from "../Assests/doctor.png";
import eye from "../Assests/eye.png";
import marathon from "../Assests/marathon.png";
import cycles from "../Assests/cycles.png";
import mach from "../Assests/mach.png";
import machine from "../Assests/machine.png";
import "./header.css";
import "./epilo.css";
import Water from "./DrinkingWater";
import React, { useRef, useState } from "react";
import Latest from "../Assests/latest.png";
import { useTranslation } from "react-i18next"; // Import i18n hook


const FlexItem = ({ bg, image, text }) => (
  <Flex
    background={bg}
    height={{ base: "200px", lg: "240px" }}
    borderRadius={"md"}
    flexDirection={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    overflow={"hidden"}
  >
    <Box height={"40%"} mt={10}>
      <Image height={{ base: 24, lg: 24 }} src={image} alt={text} />
    </Box>
    <Box height={"60%"}>
      <Text
        width={{ base: "100%", lg: "90%" }}
        px={{ base: 2, lg: 2 }}
        textAlign={"center"}
        margin={"auto"}
        fontFamily={"EkMukta"}
        fontWeight={600}
        color={"#FFFFFF"}
        fontSize={{ base: "1rem", lg: "1.1rem" }}
      >
        {text}
      </Text>
    </Box>
  </Flex>
);

const HomeContent = () => {
    const { t } = useTranslation(); // Access i18n object
  
  return (
    <>
      <Flex flexDirection={"column"} mt={-1} mb={20}>
        <Flex width={"100%"} bgGradient="linear(to-r, #ffda91, white)">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(6, 1fr)" }}
            gap={{ base: 10, lg: 3 }}
            width={{ base: "60%", lg: "90%" }}
            margin={"auto"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <FlexItem
              bg={"#207FB7"}
              image={doctor}
              text={t('Free_Health_Checkup')}
            />
            
            <FlexItem
              bg={"#DB0C22"}
              image={eye}
              text={t('Free_Cataract_Surgery')}
              
              // text="निःशुल्क मोतियाबिंद ऑपरेशन"
            />
            <FlexItem
              bg={"#08B749"}
              image={cycles}
              text={t('Tricycle_Distribution')}
            />
            <FlexItem
              bg={"#FFA800"}
              image={mach}
              text={t('Modern_Agriculture_Equipments_for_Farmers')}

            />
            <FlexItem
              bg={"#3F00C0"}
              image={machine}
              text={t('Sewing_Machines_for_Women_Empowerment')}
              
              // text="महिलाओं को स्वावलंबी बनाने हेतु सिलाई मशीन "
            />
            <FlexItem
              bg={"#FF5800"}
              image={marathon}
              text={t('title3')}
              // text="छात्र-छात्राओं की दौड़ स्पर्धा"
            />
          </Grid>
        </Flex>

        <Flex
          mb={6}
          width={"100%"}
          boxShadow="2xl"
          background={"#F0F0F0"}
          alignItems={"center"}
          py={4}
        >
          <Image width={{ base: "30%", lg: "12%" }} src={Latest} alt="latest" />
        </Flex>
        <Water />

        <Flex
          width={{ base: "90%", lg: "80%" }}
          margin={"auto"}
          flexDirection={"column"}
          gap={12}
          mt={28}
        >
          <Flex
            width={{ base: "100%", lg: "80%" }}
            margin={"auto"}
            flexDirection={"row"}
            alignItems={"center"}
            mb={{ base: 1, lg: 6 }}
          >
            <Text
              textAlign={"center"}
              className="epilogue-bold"
              color={"#F56A02"}
              fontWeight={"bold"}
              fontSize={{ base: "1rem", lg: "1.5rem" }}
            >
              {t("heading_new3")}
              {/* स्वर्गीय सुरेश सिंह फाउंडेशन® ट्रस्ट बिहार राज्य के बिहटा क्षेत्र
              के "लई ग्राम" में स्थित एक गैर-लाभकारी संगठन है। यह संगठन छात्रों,
              युवाओं और महिलाओं को सशक्त बनाकर समृद्ध समाज बनाने हेतु कृत संकल्प
              है। */}
            </Text>
            <Box
              width={"14%"}
              mt={24}
              ml={-24}
              display={{ base: "none", lg: "flex" }}
            >
              <Image width={"100%"} height={"100%"} src={line} alt="line" />
            </Box>
          </Flex>

          <Flex
            display={{ base: "none", lg: "flex" }}
            width={"100%"}
            margin={"auto"}
            flexDirection={"row"}
            justifyContent={"center"}
          >
            <Flex flexDirection={"column"} width={"50%"}>
              <Box>
                <Image width={"100%"} height={"100%"} src={cycle} alt="cycle" />
              </Box>
              <Box background={"#F56A02"} py={12} px={12} borderRadius={"md"}>
                <Text
                  color={"white"}
                  fontSize={"1.2rem"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                >
                  {t("Program_About4")}
                </Text>
              </Box>
              <Box mt={4}>
                <Image width={"100%"} height={"100%"} src={run} alt="run" />
              </Box>
              <Box
                background={"#207FB7"}
                py={12}
                px={12}
                borderRadius={"md"}
                mt={5}
              >
                <Text
                  color={"white"}
                  fontSize={"1.2rem"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                >
                  {t('about13')}
                  {/* प्रदूषण की समस्या को दूर करने हेतु वृक्षारोपण, फोफिंग मशीन
                  वितरण, सुगम आवागमन हेतु चौक-चौराहों पर LED की व्यवस्था, किसान
                  भाइयों को उनके फसलों एवं पौधों को बिमारियों से सुरक्षा हेतु
                  स्वचालित कृषि यंत्रों का वितरण, धार्मिक कार्य हेतु ग्रामीणों
                  को मिले शुद्ध इसके लिए बोरवेल की व्यवस्था की गई, कोरोना
                  महामारी के समय सैनिटाइजर मशीन व स्टैण्ड वितरण । */}
                </Text>
              </Box>
            </Flex>
            <Flex flexDirection={"column"} width={"50%"}>
              <Box
                background={"#08B749"}
                py={8}
                px={10}
                borderRadius={"md"}
                mt={20}
              >
                <Text
                  color={"white"}
                  fontSize={"1.2rem"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                >
                  {t("About2")}
                  {/* यह संगठन छात्रों, युवाओं और महिलाओं को सशक्त बनाकर समृद्ध समाज
                  बनाने हेतु कार्य करता है। इसके लिए ट्रस्ट समाज से जुड़े कई
                  कार्य कर रहा है। जैसे – दिव्यांगजन को आवागमन हेतु तिपहिया
                  साईकिल का वितरण, जरुरतमंदों को अंग वस्त्र और कम्बल वितरण,
                  निःशुल्क स्वास्थ्य जांच शिविर का आयोजन जिसमें कई तरह के जांच
                  किये जाते है, दवा वितरण, निःशुल्क नेत्र जांच, चश्मा वितरण,
                  अस्पताल में निःशुल्क मोतियाबिन्द ऑपरेशन । */}
                </Text>
              </Box>
              <Box>
                <Image width={"100%"} height={"100%"} src={cloth} alt="cloth" />
              </Box>
              <Box background={"#FFA800"} py={8} px={10} borderRadius={"md"}>
                <Text
                  color={"black"}
                  fontSize={"1.2rem"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                >
                  {t("Educational_Awareness_Program_About")}

                  
                  {/* जरूरतमन्द विद्यार्थियों (कक्षा 10th and 12th) को पंजीकरण हेतु
                  सहायता राशि, लेखन सामग्री, ग्रामीण विद्यालय में प्यूरीफायर
                  संयंत्र / आर० ओ०, पटना एथलेटिक्स संघ की निगरानी में
                  छात्र-छात्राओं की दौड़-स्पर्धा एवं स्वo सुरेश सिंह ग्रामीण
                  रात्रि क्रिकेट टूर्नामेंट का आयोजन, ग्रामीण मेधावी
                  छात्र-छात्राओं को गुणवत्तापूर्ण तकनीकी शिक्षा अध्ययन हेतु
                  लैपटॉप (कंप्यूटर) वितरण, आजीविका अर्जित कर परिवार का भरण-पोषण
                  करने हेतु व्यावसायिक वाहन (ऑटो रिक्शा) वितरण । */}
                </Text>
              </Box>
              <Box>
                <Image width={"100%"} height={"100%"} src={led} alt="led" />
              </Box>
            </Flex>
          </Flex>

          {/* small screen */}

          <Flex
            display={{ base: "flex", lg: "none" }}
            width={"100%"}
            margin={"auto"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={2}
          >
            <Box>
              <Image width={"100%"} height={"100%"} src={cycle} alt="cycle" />
            </Box>
            <Box background={"#08B749"} py={4} px={6} borderRadius={"md"}>
              <Text
                color={"white"}
                fontSize={14}
                fontFamily={"EkMukta"}
                fontWeight={400}
              >
                यह संगठन छात्रों, युवाओं और महिलाओं को सशक्त बनाकर समृद्ध समाज
                बनाने हेतु कार्य करता है। इसके लिए ट्रस्ट समाज से जुड़े कई कार्य
                कर रहा है। जैसे – दिव्यांगजन को आवागमन हेतु तिपहिया साईकिल का
                वितरण, जरुरतमंदों को अंग वस्त्र और कम्बल वितरण, निःशुल्क
                स्वास्थ्य जांच शिविर का आयोजन जिसमें कई तरह के जांच किये जाते
                है, दवा वितरण, निःशुल्क नेत्र जांच, चश्मा वितरण, अस्पताल में
                निःशुल्क मोतियाबिन्द ऑपरेशन ।
              </Text>
            </Box>
            <Box height={160}>
              <Image width={"100%"} height={"100%"} src={cloth} alt="cloth" />
            </Box>
            <Box background={"#F56A02"} py={4} px={6} borderRadius={"md"}>
              <Text
                color={"white"}
                fontSize={14}
                fontFamily={"EkMukta"}
                fontWeight={400}
              >
                महिलाओ को आत्मनिर्भर बनाने हेतु सिलाई मशीन का वितरण, ग्रामीण
                महिलाओं को आत्मनिर्भर बनाने हेतु आर्थिक सहायता राशि एवं ग्रामीण
                बहन-बेटियों को विवाहोत्सव पर आत्मनिर्भर एवं सशक्त बनने हेतु
                जरुरत स्वरूप सामग्री भेंट ।
              </Text>
            </Box>
            <Box height={160}>
              <Image width={"100%"} height={"100%"} src={run} alt="run" />
            </Box>
            <Box background={"#FFA800"} py={4} px={6} borderRadius={"md"}>
              <Text
                color={"black"}
                fontSize={14}
                fontFamily={"EkMukta"}
                fontWeight={400}
              >
                जरूरतमन्द विद्यार्थियों (कक्षा 10th व 14th) को पंजीकरण हेतु
                सहायता राशि, लेखन सामग्री, ग्रामीण विद्यालय में प्यूरीफायर
                संयंत्र / आर० ओ०, पटना एथलेटिक्स संघ की निगरानी में
                छात्र-छात्राओं की दौड़-स्पर्धा एवं स्वo सुरेश सिंह ग्रामीण
                रात्रि क्रिकेट टूर्नामेंट का आयोजन, ग्रामीण मेधावी
                छात्र-छात्राओं को गुणवत्तापूर्ण तकनीकी शिक्षा अध्ययन हेतु लैपटॉप
                (कंप्यूटर) वितरण, आजीविका अर्जित कर परिवार का भरण-पोषण करने हेतु
                व्यावसायिक वाहन (ऑटो रिक्शा) वितरण ।
              </Text>
            </Box>
            <Box height={150}>
              <Image width={"100%"} height={"100%"} src={led} alt="led" />
            </Box>
            <Box background={"#207FB7"} py={4} px={6} borderRadius={"md"}>
              <Text
                color={"white"}
                fontSize={14}
                fontFamily={"EkMukta"}
                fontWeight={400}
              >
                प्रदूषण की समस्या को दूर करने हेतु वृक्षारोपण, फोगिंग मशीन
                वितरण, सुगम आवागमन हेतु चौक-चौराहों पर LED की व्यवस्था, किसान
                भाइयों को उनके फसलों एवं पौधों को बिमारियों से सुरक्षा हेतु
                स्वचालित कृषि यंत्रों का वितरण, धार्मिक कार्य हेतु ग्रामीणों को
                मिले शुद्ध जल इसके लिए बोरवेल की व्यवस्था की गई, कोरोना महामारी
                के समय सैनिटाइजर मशीन व स्टैण्ड वितरण ।
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeContent;
