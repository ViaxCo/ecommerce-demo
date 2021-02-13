import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import FooterMobile from "./Footer/FooterMobile";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex flex={1} minH="100%" mt={["120px", "72px"]}>
        <Box
          display={["none", "block"]}
          minH="100%"
          w="220px"
          py={8}
          color="gray.600"
        >
          <Sidebar />
        </Box>
        <Box flex={1} py={[0, 8]}>
          {children}
        </Box>
      </Flex>
      <Footer />
      <FooterMobile />
    </Flex>
  );
};

export default Container;
