import { Flex, Heading, Link, VStack } from "@chakra-ui/react";

import ContactDetails from "../ContactDetails";

const Footer = () => {
  return (
    <Flex
      //   @ts-ignore
      display={{ base: "none", smallTablet: "flex" }}
      bg="appBlue.800"
      color="white"
      pl={[16, null, "236px"]}
      pr={[16, null, 8]}
      py={5}
      direction={["column", "row"]}
      align={["center", "flex-start"]}
    >
      <Flex mr={[0, 32, 44]} mb={[8, null]}>
        <Flex direction="column" mr={28}>
          <Heading as="h6" fontSize="md" mb={6} textTransform="uppercase">
            Pages
          </Heading>
          <VStack spacing={3} fontSize="sm" align="initial">
            <Link>Home</Link>
            <Link>Product</Link>
            <Link>Pricing</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </VStack>
        </Flex>
        <Flex direction="column">
          <Heading as="h6" fontSize="md" mb={6} textTransform="uppercase">
            Top Designer Brands
          </Heading>
          <Flex>
            <VStack spacing={3} fontSize="sm" align="initial" mr={16}>
              <Link>Eleanor Edwards</Link>
              <Link>Ted Robertson</Link>
              <Link>Annette Russell</Link>
              <Link>Jennie Mckinney</Link>
              <Link>Gloria Richards</Link>
            </VStack>
            <VStack spacing={3} fontSize="sm" align="initial">
              <Link>Philip Jones</Link>
              <Link>Product</Link>
              <Link>Colleen Russell</Link>
              <Link>Marvin Hawkins</Link>
              <Link>Bruce Simmons</Link>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
      <ContactDetails />
    </Flex>
  );
};

export default Footer;
