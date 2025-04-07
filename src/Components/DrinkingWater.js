import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import water_line from "../Assests/water_line.png";
import water from "../Assests/water.png";
import "./epilo.css";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import i18n hook


const Water = () => {
  const navigation = useNavigate();
      const { t } = useTranslation(); // Access i18n object
  

  return (
    <Flex flexDirection={{ base: "column", lg: "row" }}>
      <Box width={"100%"} display={{ base: "block", lg: "none" }} mb={4}>
        <Image width={"100%"} height={"100%"} src={water} alt="water" />
      </Box>
      <Flex width={{ base: "100%", lg: "60%" }} gap={{ base: 4, lg: 0 }}>
        <Box display={{ base: "none", lg: "block" }} width={"30%"}>
          <Image src={water_line} alt="dringk" />
        </Box>
        <Flex
          px={{ base: 4, lg: 0 }}
          marginTop={{ base: 0, lg: 28 }}
          width={{ base: "100%", lg: "60%" }}
          flexDirection={"column"}
          gap={5}
        >
          <Heading
            color={"#F56A02"}
            className="epilogue-bold"
            fontWeight={700}
            fontSize={{ base: "1.6rem", lg: "2.6rem" }}
          >
            {t("title4")}:-
          </Heading>
          <Text
            fontFamily={"EkMukta"}
            fontSize={{ base: "0.9rem", lg: "1.1rem" }}
            textAlign={"left"}
            color={"#000000"}
            fontWeight={400}
          >
            {t("about4")}

            {/* about4
            ट्रस्ट शिक्षा के महत्व और कम आय वाले परिवारों के लिए उपलब्ध अवसरों
            के बारे में जागरूकता फैलाने हेतु शैक्षिक जागरूकता कार्यक्रम आयोजित
            करता है। यह ट्रस्ट का साक्षरता, कौशल विकास और सीखने को बढ़ावा देने
            के लिए कार्यक्रम है। यहाँ जरूरतमन्द विद्यार्थियों (कक्षा 10th and
            12th) को पंजीकरण हेतु सहायता राशि एवं लेखन सामाग्री वितरित किया जाता
            है । */}
          </Text>
          <Button
            width={{ base: "60%", lg: "40%" }}
            fontFamily={"EkMukta"}
            bg={"#F56A02"}
            borderRadius={"full"}
            color={"white"}
            fontWeight={700}
            fontSize={{ base: "1rem", lg: "1.4rem" }}
            py={{ base: 4, lg: 8 }}
            px={{ base: 4, lg: 4 }}
            _hover={{
              bg: "black",
            }}
            onClick={() => navigation("/whydonation")}
          >
            Donate Now
          </Button>
        </Flex>
      </Flex>
      <Flex width={"40%"} display={{ base: "none", lg: "block" }}>
        <Image width={"100%"} height={"100%"} src={water} alt="water" />
      </Flex>
    </Flex>
  );
};

export default Water;
