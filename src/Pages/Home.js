import { Box, Text } from "@chakra-ui/react";
import HomeContent from "../Components/HomeContent";
import Events from "../Components/Event";
import Banner from "../Components/Baner";
import YourSupport from "../Components/YourSupport";
const Home = () => {
  return (
    <>
      <Banner />
      <HomeContent />
      <Events />
      {/* <Certification  /> */}
      <YourSupport />
    </>
  );
};

export default Home;
