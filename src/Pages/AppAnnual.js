import React from "react";
import { Button, VStack, Icon, Box } from "@chakra-ui/react";
import { FaFilePdf } from "react-icons/fa";
import examplePDF from "./New_Annual _Report-23-24.pdf";
import examplePDF2 from "./New_Annual_Report-22-23.pdf";

const AppAnnual = () => {
  const handleViewPDF = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
    <>
      <Box
        py={24}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack spacing={4} align="center">
          <Icon as={FaFilePdf} boxSize={16} color="red.500" />
          <h1>Annual Report PDF</h1>

          {examplePDF && (
            <Button
              background={"#F56A01"}
              color={"white"}
              onClick={() => handleViewPDF(examplePDF)}
            >
              Annual Report 2022-2023
            </Button>
          )}

          {examplePDF2 && (
            <Button
              background={"#F56A01"}
              color={"white"}
              onClick={() => handleViewPDF(examplePDF2)}
            >
              Annual Report 2023-2024
            </Button>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default AppAnnual;
