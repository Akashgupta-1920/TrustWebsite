import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import CommonBanner from "./Common";

const WhyDonation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const amountInPaisa = Math.round(parseFloat(amount));

    if (isNaN(amountInPaisa) || amountInPaisa <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const requestData = {
      name,
      mobile,
      amount: amountInPaisa, // Now correctly in paisa
      MUID: "MUIDW" + Date.now(),
      transactionId: "T" + Date.now(),
    };

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3009/order", requestData);

      if (res.data.success && res.data.data?.instrumentResponse?.redirectInfo?.url) {
        window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
      } else {
        alert("Payment failed: " + (res.data.message || "Unknown error"));
      }
    } catch (error) {
      alert(`Payment failed: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CommonBanner />
      <Box
p={5}
mx="auto"
width={{ base: "90%", lg: "80%" }}
margin={"auto"}
mt={{ base: "-30%", lg: "-27%" }}
>
<Heading
  fontSize={{ base: "1.2rem", lg: "2rem" }}
  mb={5}
  textAlign="center"
>
  Why Should You Donate to LSSF Trust?
</Heading>
<Stack spacing={5} mt={10}>
  <VStack align="start" spacing={4}>
    <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
      1. Education for All
    </Heading>
    <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
      Education is a powerful tool for breaking the cycle of poverty. At
      LSSF Trust, we provide educational resources, scholarships, and
      support to underprivileged children, ensuring they have access to
      quality education. Your donation can help us create a brighter
      future for these young minds, equipping them with the skills and
      knowledge they need to succeed.
    </Text>
  </VStack>

  <Divider />

  <VStack align="start" spacing={4}>
    <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
      2. Empowering Farmers with Modern Machinery
    </Heading>
    <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
      Farmers are the backbone of our nation, and at LSSF Trust, we
      strive to support them with modern agricultural machinery. By
      providing tools and equipment, we help farmers increase their
      productivity and income, leading to improved livelihoods and food
      security. Your donation can make a difference in the lives of
      countless farmers, helping them achieve sustainable growth.
    </Text>
  </VStack>

  <Divider />

  <VStack align="start" spacing={4}>
    <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
      3. Women's Empowerment Through Skill Development
    </Heading>
    <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
      We believe in empowering women to achieve financial independence
      and self-sufficiency. Our programs provide women with training in
      skills like sewing and tailoring, allowing them to earn a
      livelihood and support their families. Additionally, we distribute
      blankets in villages to ensure warmth and comfort for all. Your
      contribution can help us continue to uplift and empower women in
      our communities.
    </Text>
  </VStack>

  <Divider />

  <VStack align="start" spacing={4}>
    <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
      4. Encouraging Sports and Fitness
    </Heading>
    <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
      At LSSF Trust, we organize running championships and provide cash
      prizes to encourage physical fitness and sportsmanship among youth
      and adults. These events not only promote a healthy lifestyle but
      also foster a sense of community and achievement. Your donation
      can support these events and motivate more people to participate
      in sports and stay active.
    </Text>
  </VStack>

  <Divider />

  <VStack align="start" spacing={4}>
    <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
      5. Supporting Girls' Marriages and Social Welfare
    </Heading>
    <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
      We believe in supporting young women and their families during
      important life events. Our programs provide financial assistance
      for girls' marriages, helping them start their new journey with
      dignity and support. Additionally, we offer various social welfare
      programs to assist those in need, ensuring that everyone has
      access to basic necessities and opportunities.
    </Text>
  </VStack>

  <Divider />

  <VStack align="start" spacing={4}>
    <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
      6. A Holistic Approach to Community Development
    </Heading>
    <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
      LSSF Trust is dedicated to addressing the diverse needs of our
      communities through a holistic approach. From providing
      educational resources and agricultural support to empowering women
      and promoting health and wellness, our initiatives aim to create a
      positive and lasting impact.
    </Text>
  </VStack>

  <Box textAlign="center" mt={5}>
    <Button
      width={{ base: "50%", lg: "20%" }}
      margin={"auto"}
      backgroundColor={"#F56A02"}
      borderRadius={"full"}
      color={"white"}
      fontFamily={"EKMukta"}
      fontSize="1.2rem"
      cursor="pointer"
      p={6}
      _hover={{ background: "black" }}
      onClick={handleOpen}
    >
      Donate Now
    </Button>
  </Box>
</Stack>
</Box>

      {/* Donation Modal */}
      <Modal isOpen={isOpen} onClose={handleClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Make a Donation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                <Box>
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    style={{ width: "100%", padding: "10px", border: "1px solid #ccc" }}
                  />
                </Box>

                <Box>
                  <label>Mobile</label>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    placeholder="Enter your mobile number"
                    style={{ width: "100%", padding: "10px", border: "1px solid #ccc" }}
                  />
                </Box>

                <Box>
                  <label>Amount</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    placeholder="0.00"
                    style={{ width: "100%", padding: "10px", border: "1px solid #ccc" }}
                  />
                </Box>

                <Button
                  type="submit"
                  isLoading={loading}
                  backgroundColor="#6739B7"
                  color="white"
                  _hover={{ background: "black" }}
                >
                  {loading ? "Processing..." : "Pay Now"}
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WhyDonation;
