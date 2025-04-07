import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Select from "react-select";
import { LuPhoneCall } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import i18n hook
import "./header.css";

const HeaderNav = () => {
  const { t,i18n } = useTranslation(); // Access i18n object

  const languageOptions = [
    { value: "hi", label: "हिन्दी" },
    { value: "en", label: "English" },
  ];

  const handleLanguageChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value); 
  };

  return (
    <Box background={"#F56A01"} height={{ base: 20, lg: 20 }}>
      <Flex
        flexDirection={"row"}
        width={{ base: "100%", lg: "90%" }}
        px={{ base: 2, lg: 0 }}
        py={{ base: 2, lg: 1 }}
        margin={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"start"}
          alignItems={{ base: "start", lg: "center" }}
          gap={{ base: 2, lg: 8 }}
        >
          <Flex flexDirection={"row"} gap={3} color={"#FFFFFF"} alignItems={"center"}>
            <LuPhoneCall color={"#FFFFFF"} size={15} />
            <Text fontWeight={600} fontSize={{ base: "0.5rem", lg: "1.1rem" }}>
              +91-9319965799
            </Text>
          </Flex>
          <Flex flexDirection={"row"} gap={3} color={"#FFFFFF"} alignItems={"center"}>
            <TfiWorld color={"#FFFFFF"} size={15} />
            <Text fontWeight={600} fontSize={{ base: "0.5rem", lg: "1.1rem" }}>
              www.lsstrust.org.in
            </Text>
          </Flex>
          <Flex flexDirection={"row"} gap={3} color={"#FFFFFF"} alignItems={"center"}>
            <FiMail color={"#FFFFFF"} size={15} />
            <Text fontWeight={600} fontSize={{ base: "0.5rem", lg: "1.1rem" }}>
            Lssftrust@gmail.com
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" gap={4}>
          {[{
            icon: FaYoutube,
            link: "https://youtube.com/@lssftrust?si=-PjIzvdWyBxeFU6_"
          }, {
            icon: FaFacebookF,
            link: "https://www.facebook.com/lssftrust"
          }, {
            icon: FaInstagram,
            link: "https://www.instagram.com/lssf_trust/?hl=en"
          }].map(({ icon: Icon, link }, index) => (
            <Box key={index} py={{ base: 2, lg: 3 }} px={{ base: 2, lg: 3 }} background="#F78834" borderRadius="5px">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Icon color="#FFFFFF" size={16} />
              </a>
            </Box>
          ))}

          <Box width="150px">
            <Select
              options={languageOptions}
              defaultValue={languageOptions[0]}
              onChange={handleLanguageChange} // Logs selected language
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "#fff",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "5px",
                }),
                menu: (provided) => ({
                  ...provided,
                  marginTop: 0, // Always opens downward
                }),
                option: (provided, { isSelected }) => ({
                  ...provided,
                  backgroundColor: isSelected ? "#fff" : "#fff",
                  color: "black",
                }),
              }}
              menuPlacement="bottom"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderNav;
