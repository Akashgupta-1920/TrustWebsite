import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea
} from "@chakra-ui/react";
import { useState } from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import "./epilo.css";
import "./header.css";

const ContactForm = () => {
  const [contact, setContact] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

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
      alert("Your message has been sent!");
      setContact({
        first: "",
        last: "",
        phone: "",
        email: "",
        description: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Flex
      justifyContent={"space-between"}
      width={"80%"}
      margin={"auto"}
      gap={10}
      py={3}
      flexDirection={{ base: "column", md: "row" }}
    >
      {/* Form Start */}
      <form onSubmit={onSubmit} style={{ width: "100%" }}>
        <Flex
          flexDirection={"column"}
          width={{ base: "100%", md: "60%" }}
          gap={6}
          py={3}
          px={2}
        >
          <Text
            color={"#F56A01"}
            fontSize={{ base: "1.8rem", md: "2.4rem" }}
            textAlign={"center"}
            fontWeight={700}
            className="epilogue-bold"
          >
            Enquiry
          </Text>

          <Flex mt={2} gap={4}>
            <Input
              placeholder="First Name"
              border={"1px solid #F56A01"}
              _placeholder={{ color: "#F56A01" }}
              height={"7vh"}
              name="first"
              value={contact.first}
              onChange={handleChange}
              fontFamily={"EkMukta"}
              required
            />
            <Input
              placeholder="Last Name"
              _placeholder={{ color: "#F56A01" }}
              height={"7vh"}
              border={"1px solid #F56A01"}
              name="last"
              value={contact.last}
              onChange={handleChange}
              fontFamily={"EkMukta"}
              required
            />
          </Flex>

          <Flex gap={4}>
            <Input
              placeholder="Phone No."
              _placeholder={{ color: "#F56A01" }}
              border={"1px solid #F56A01"}
              height={"7vh"}
              name="phone"
              value={contact.phone}
              onChange={handleChange}
              fontFamily={"EkMukta"}
              required
            />
            <Input
              placeholder="Email"
              border={"1px solid #F56A01"}
              _placeholder={{ color: "#F56A01" }}
              height={"7vh"}
              name="email"
              value={contact.email}
              onChange={handleChange}
              fontFamily={"EkMukta"}
              required
              type="email"
            />
          </Flex>

          <Textarea
            _placeholder={{ color: "#F56A01" }}
            border={"1px solid #F56A01"}
            resize={"none"}
            placeholder="Description ..."
            name="description"
            value={contact.description}
            onChange={handleChange}
            height={"20vh"}
            required
          />

          <Button
            _hover={{
              bg: "white",
              color: "#F56A01",
              border: "1px solid #F56A01",
            }}
            color="white"
            bg={"#F56A01"}
            fontSize={"1.2rem"}
            p={6}
            width={{ base: "100%", lg: "30%" }}
            margin={"auto"}
            borderRadius={"full"}
            type="submit"
          >
            Submit
          </Button>
        </Flex>
      </form>
      {/* Form End */}

      {/* Contact Info */}
      <Flex
        display={{ base: "none", md: "flex" }}
        flexDirection={"column"}
        width={{ base: "100%", md: "24%" }}
        gap={6}
        py={3}
        alignItems={"start"}
        px={2}
      >
        <Text
          color={"#F56A01"}
          fontSize={{ base: "1.8rem", md: "2.4rem" }}
          textAlign={"center"}
          fontWeight={700}
          className="epilogue-bold"
        >
          Contact
        </Text>
        <Flex gap={4} justifyContent={"start"} alignItems={"center"}>
          <Box borderRadius={"50%"} bg={"#F56A01"} p={2}>
            <SiMinutemailer color="white" size={12} />
          </Box>
          <Text fontSize={"1rem"} fontFamily={"EkMukta"} fontWeight={800}>
          Lssftrust@gmail.com
          </Text>
        </Flex>

        <Flex
          gap={4}
          justifyContent={"start"}
          fontFamily={"EkMukta"}
          alignItems={"center"}
        >
          <Box borderRadius={"50%"} bg={"#F56A01"} p={2}>
            <BsFillTelephoneOutboundFill color="white" size={12} />
          </Box>
          <Text fontSize={"1rem"} fontFamily={"EkMukta"} fontWeight={800}>
            +91-9319965799
          </Text>
        </Flex>

        <Flex gap={4} justifyContent={"start"} alignItems={"center"}>
          <Box borderRadius={"50%"} bg={"#F56A01"} p={2}>
            <RiUserLocationFill color="white" size={12} />
          </Box>
          <Text fontSize={"1rem"} fontFamily={"EkMukta"} fontWeight={800}>
            ग्राम लई, थाना-बिहटा, पटना
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactForm;

// import {
//   Box,
//   Button,
//   Flex,
//   Input,
//   Text,
//   Textarea,
//   Toast,
//   useToast,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { BsFillTelephoneOutboundFill } from "react-icons/bs";
// import { RiUserLocationFill } from "react-icons/ri";
// import { SiMinutemailer } from "react-icons/si";
// import "./epilo.css";
// import "./header.css";
// import axios from "axios";
// import { baseURL } from "../services /apiEndPoint";
// const ContactForm = () => {
//   const Toast = useToast();
//   const [contact, setContact] = useState({
//     first: "",
//     last: "",
//     phone: "",
//     email: "",
//     description: "",
//   });

//   const handleSubmit = async () => {
//     const fullUrl = ${baseURL}${"contactus"};
//     console.log("fullUrl==>",fullUrl)
//     try {
//       const res = await axios.post(
//         fullUrl,
//         // "https://api.lsstrust.org.in/api/contact",
//         contact
//       );
  
//       if (res.status === 200) {
//         Toast({
//           title: "Success",
//           description: "Your contact form has been submitted successfully.",
//           status: "success",
//           duration: 2000,
//           isClosable: true,
//         });
  
//         setContact({
//           first: "",
//           last: "",
//           phone: "",
//           email: "",
//           description: "",
//         });
//       } else {
//         Toast({
//           title: "Submission Error",
//           description: "There was an issue submitting your form. Please try again.",
//           status: "error",
//           duration: 2000,
//           isClosable: true,
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
      
//       Toast({
//         title: "Submission Failed",
//         description: "An unexpected error occurred. Please try again later.",
//         status: "error",
//         duration: 2000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setContact((prev) => ({ ...prev, [name]: value }));
//   };



//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "7256f4cc-b435-4708-8609-97ec0ab0074d");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//     }
//   };
//   return (
//     <Flex
//       justifyContent={"space-between"}
//       width={"80%"}
//       margin={"auto"}
//       gap={10}
//       py={3}
//       flexDirection={{ base: "column", md: "row" }}
//     >
//       <Flex onSubmit={onSubmit}
//         flexDirection={"column"}
//         width={{ base: "100%", md: "60%" }}
//         gap={6}
//         py={3}
//         px={2}
//       >
//         <Text
//           color={"#F56A01"}
//           fontSize={{ base: "1.8rem", md: "2.4rem" }}
//           textAlign={"center"}
//           fontWeight={700}
//           className="epilogue-bold"
//         >
//           Enquiry
//         </Text>

//         <Flex mt={2} gap={4}>
//           <Input
//             placeholder="First Name"
//             border={"1px solid #F56A01"}
//             _placeholder={{ color: "#F56A01" }}
//             height={"7vh"}
//             name="first"
//             value={contact.first}
//             onChange={handleChange}
//             fontFamily={"EkMukta"}
//           />
//           <Input
//             placeholder="Last Name"
//             _placeholder={{ color: "#F56A01" }}
//             height={"7vh"}
//             border={"1px solid #F56A01"}
//             name="last"
//             value={contact.last}
//             onChange={handleChange}
//             fontFamily={"EkMukta"}
//           />
//         </Flex>

//         <Flex gap={4}>
//           <Input
//             placeholder="Phone No."
//             _placeholder={{ color: "#F56A01" }}
//             border={"1px solid #F56A01"}
//             height={"7vh"}
//             name="phone"
//             value={contact.phone}
//             onChange={handleChange}
//             fontFamily={"EkMukta"}
//           />
//           <Input
//             placeholder="Email"
//             border={"1px solid #F56A01"}
//             _placeholder={{ color: "#F56A01" }}
//             height={"7vh"}
//             name="email"
//             value={contact.email}
//             onChange={handleChange}
//             fontFamily={"EkMukta"}
//           />
//         </Flex>

//         <Textarea
//           _placeholder={{ color: "#F56A01" }}
//           border={"1px solid #F56A01"}
//           resize={"none"}
//           placeholder="Description ..."
//           name="description"
//           value={contact.description}
//           onChange={handleChange}
//           height={"20vh"}
//         />

//         <Button
//           _hover={{
//             bg: "white",
//             color: "#F56A01",
//             border: "1px solid #F56A01",
//           }}
//           color="white"
//           bg={"#F56A01"}
//           fontSize={"1.2rem"}
//           p={6}
//           width={{ base: "100%", lg: "30%" }}
//           margin={"auto"}
//           borderRadius={"full"}
//           type="submit"
//           onClick={handleSubmit}
//         >
//           Submit
//         </Button>
//       </Flex>


//       <Flex
//         display={{ base: "none", md: "flex" }}
//         flexDirection={"column"}
//         width={{ base: "100%", md: "24%" }}
//         gap={6}
//         py={3}
//         alignItems={"start"}
//         px={2}
//       >
//         <Text
//           color={"#F56A01"}
//           fontSize={{ base: "1.8rem", md: "2.4rem" }}
//           textAlign={"center"}
//           fontWeight={700}
//           className="epilogue-bold"
//         >
//           Contact
//         </Text>
//         <Flex gap={4} justifyContent={"start"} alignItems={"center"}>
//           <Box borderRadius={"50%"} bg={"#F56A01"} p={2}>
//             <SiMinutemailer color="white" size={12} />
//           </Box>
//           <Text fontSize={"1rem"} fontFamily={"EkMukta"} fontWeight={800}>
//             trustlssf2022@gmail.com
//           </Text>
//         </Flex>

//         <Flex
//           gap={4}
//           justifyContent={"start"}
//           fontFamily={"EkMukta"}
//           alignItems={"center"}
//         >
//           <Box borderRadius={"50%"} bg={"#F56A01"} p={2}>
//             <BsFillTelephoneOutboundFill color="white" size={12} />
//           </Box>
//           <Text fontSize={"1rem"} fontFamily={"EkMukta"} fontWeight={800}>
//             +91-9319965799
//           </Text>
//         </Flex>

//         <Flex gap={4} justifyContent={"start"} alignItems={"center"}>
//           <Box borderRadius={"50%"} bg={"#F56A01"} p={2}>
//             <RiUserLocationFill color="white" size={12} />
//           </Box>
//           <Text fontSize={"1rem"} fontFamily={"EkMukta"} fontWeight={800}>
//             ग्राम लई, थाना-बिहटा, पटना
//           </Text>
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };

// export default ContactForm; 