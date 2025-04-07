import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import logo from "../Assests/lss_logo.png";
import "./header.css";
import donate from "../Assests/donation.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
export default function SmallNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigation =useNavigate()

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <Box
      bg="#FFFFFF"
      px={2}
      width={{ base: "100%", lg: "80%" }}
      margin={"auto"}
      boxShadow={"md"}
      py={4}
      display={{ base: "block", lg: "none" }}
    >
      <Flex h={10} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex alignItems={"center"}>
          <Button
            background={"#F56A02"}
            color={"#FFFFFF"}
            borderRadius={"full"}
            p={4}
            mr={1}
            leftIcon={<Img src={donate} alt="donate" />}
            fontFamily={"EkMukta"}
            fontWeight={600}
            fontSize={"1rem"}
            _hover={{
              bg:"black"
  
              }}
              onClick={()=>navigation("/whydonation")}

          >
            Donate Now
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} pt={4} display={{ lg: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Link to={"/"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"1rem"}
                className={isActive("/")}
              >
                Home
              </Text>
            </Link>
            <Link to={"/about"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"1rem"}
                className={isActive("/about")}
              >
                About us
              </Text>
            </Link>
            <Link to={"/annual"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"1rem"}
                className={isActive("/annual")}
              >
                Annual Report 
              </Text>
            </Link>
            <Link to={"/certificate"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"1rem"}
                className={isActive("/certificate")}
              >
                Our Certificates
              </Text>
            </Link>

            <Link to={"/gallery"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"1rem"}
                className={isActive("/gallery")}
              >
                Gallary
              </Text>
            </Link>
            <Link to={"/event"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"1rem"}
                className={isActive("/event")}
              >
                Events
              </Text>
            </Link>

            <Link to={"/media"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"1rem"}
                className={isActive("/media")}
              >
                Media
              </Text>
            </Link>
            <Link to={"/contact"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"1rem"}
                className={isActive("/contact")}
              >
                Contact
              </Text>
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
