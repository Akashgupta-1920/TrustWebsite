import { Box, Flex, HStack, Text, Button, Image, Img } from "@chakra-ui/react";

import logo from "../Assests/lss_logo.png";
import "./header.css";
import donate from "../Assests/donation.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const navigation = useNavigate();
  const { t } = useTranslation();

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <Box
      display={{ base: "none", lg: "block" }}
      bg="#FFFFFF"
      px={2}
      width={{ base: "100%", lg: "100%" }}
      margin={"auto"}
      boxShadow={"md"}
      mt={-6}
      py={4}
    >
      <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={6} alignItems={"center"} px={{ lg: 5 }}>
          <Box>
            <Image height={"70%"} width={"70%"} src={logo} alt="logo" />
          </Box>
          <HStack
            as={"nav"}
            spacing={8}
            display={{ base: "none", lg: "flex" }}
          >
            <Link to={"/"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "0.9rem" }}
                className={isActive("/")}
              >
                {t('Home')}
              </Text>
            </Link>

            <Link to={"/about"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "0.9rem" }}
                className={isActive("/about")}
              >
                {t('About')}
              </Text>
            </Link>
            <Link to={"/annual"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "0.9rem" }}
                className={isActive("/annual")}
              >
                {t('Annual_Report')}

                {/* Report */}
              </Text>
            </Link>
            <Link to={"/provision"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "0.9rem" }}
                className={isActive("/provision")}
              >
                80G/12A
              </Text>
            </Link>



            <Link to={"/certificate"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "0.9rem" }}
                className={isActive("/certificate")}
              >
                {t('Certification')}
                {/* Certification */}
              </Text>
            </Link>

            <Link to={"/gallery"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "0.9rem" }}
                className={isActive("/gallery")}
              >
                {t('Gallery')}


              </Text>
            </Link>
            <Link to={"/event"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "0.9rem" }}
                className={isActive("/event")}
              >
                {t('Events')}

              </Text>
            </Link>

            <Link to={"/media"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "0.9rem" }}
                className={isActive("/media")}
              >
                {t('Media')}


              </Text>
            </Link>
            <Link to={"/contact"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "0.9rem" }}
                className={isActive("/contact")}
              >
                {t('Contact_us')}

                {/* Contact */}
              </Text>
            </Link>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button
            background={"#F56A02"}
            color={"#FFFFFF"}
            borderRadius={"full"}
            p={6}
            mr={2}
            leftIcon={<Img src={donate} alt="donate" />}
            fontFamily={"EkMukta"}
            fontWeight={700}
            fontSize={"1rem"}
            _hover={{
              bg: "black"

            }}
            onClick={() => navigation("/whydonation")}

          >
              {t('Donation')}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
