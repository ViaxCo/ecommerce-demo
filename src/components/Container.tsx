import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./Footer/Footer";
import FooterMobile from "./Footer/FooterMobile";
import Sidebar from "./Sidebar/Sidebar";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  const location = useLocation();
  return (
    <Flex
      display={
        location.pathname === "/login" || location.pathname === "/register"
          ? "none"
          : "flex"
      }
      direction="column"
      minH="100vh"
    >
      <Header />
      <Flex flex={1} minH="100%" mt={{ base: "120px", sm: "72px" }}>
        <Box
          display={{ base: "none", sm: "block" }}
          minH="100%"
          w="200px"
          py={8}
          color="gray.600"
        >
          <Sidebar />
        </Box>
        <Box flex={1} py={{ base: 0, sm: 8 }}>
          {children}
        </Box>
      </Flex>
      <Footer />
      <FooterMobile />
    </Flex>
  );
};

export default Container;
