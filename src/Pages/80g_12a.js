import React from "react";
import { Button, VStack, Icon, Box, Heading } from "@chakra-ui/react";
import { FaFilePdf } from "react-icons/fa";
import banner from "../Assests/80g_banner.png";

import examplePDF from "./80g.pdf";
import examplePDF2 from "./12a.pdf";
import CommonBanner from "../Components/Common";

const Provision = () => {
  const handleViewPDF = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
    <>
      <CommonBanner image={banner} />

      <Box
        py={24}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack spacing={6} align="center">
          <Icon as={FaFilePdf} boxSize={16} color="red.500" />
          <Heading fontSize={"1.8rem"}>80G / 12A Certification</Heading>

          {examplePDF && (
            <Button
             background={"#F56A01"}
             color={"white"}
              onClick={() => handleViewPDF(examplePDF)}
                        _hover={{background:"black"}}
            >
              80G Certification
            </Button>
          )}

          {examplePDF2 && (
            <Button
             background={"#F56A01"}
             color={"white"}
              onClick={() => handleViewPDF(examplePDF2)}
                        _hover={{background:"black"}}
            >
              12A Certification
            </Button>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default Provision;
