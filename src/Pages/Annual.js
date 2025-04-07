import React from "react";
import { Button, VStack, Icon, Box, Heading } from "@chakra-ui/react";
import { FaFilePdf } from "react-icons/fa";
import annual from "../Assests/annual_banner.png";

import examplePDF from "./New_Annual _Report-23-24.pdf";
import examplePDF2 from "./New_Annual_Report-22-23.pdf";
import CommonBanner from "../Components/Common";

const AnnualReport = () => {
  const handleViewPDF = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
    <>
      <CommonBanner image={annual} />

      <Box
        py={24}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack spacing={6} align="center">
          <Icon as={FaFilePdf} boxSize={16} color="red.500" />
          <Heading fontSize={"1.8rem"}>Annual Report PDF</Heading>

          {examplePDF && (
            <Button
              background={"#F56A01"}
              color={"white"}
              onClick={() => handleViewPDF(examplePDF)}
              _hover={{background:"black"}}
            >
              Annual Report 2022-2023
            </Button>
          )}

          {examplePDF2 && (
            <Button
              background={"#F56A01"}
              color={"white"}
              onClick={() => handleViewPDF(examplePDF2)}
              _hover={{background:"black"}}
            >
              Annual Report 2023-2024
            </Button>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default AnnualReport;
