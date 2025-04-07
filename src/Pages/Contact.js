import { Box, Heading } from "@chakra-ui/react";
import ContactForm from "../Components/ContactForm";
import contact from "../Assests/contact_banner.png";
import CommonBanner from "../Components/Common";
// import "./Font.css";
const Contact = () => {
  return (
    <>
      <CommonBanner image={contact} />
      <ContactForm />
    </>
  );
};

export default Contact;
