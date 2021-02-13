import {
  Box,
  Flex,
  Heading,
  Link,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import ContactDetails from "../ContactDetails";

const FooterMobile = () => {
  return (
    <Flex
      //   @ts-ignore
      display={{ base: "flex", smallTablet: "none" }}
      bg="appBlue.800"
      color="white"
      pb={8}
      direction="column"
    >
      <Accordion allowToggle mb={8}>
        <AccordionItem borderTop="none" py={2}>
          <AccordionButton color="gray.400" _expanded={{ color: "white" }}>
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="md" textTransform="uppercase">
                Pages
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack spacing={3} fontSize="sm" align="initial">
              <Link>Home</Link>
              <Link>Product</Link>
              <Link>Pricing</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderColor="gray.600" py={2}>
          <AccordionButton color="gray.400" _expanded={{ color: "white" }}>
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="md" textTransform="uppercase">
                Top Designer Brands
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack spacing={3} fontSize="sm" align="initial">
              <Link>Eleanor Edwards</Link>
              <Link>Ted Robertson</Link>
              <Link>Annette Russell</Link>
              <Link>Jennie Mckinney</Link>
              <Link>Gloria Richards</Link>
              <Link>Philip Jones</Link>
              <Link>Product</Link>
              <Link>Colleen Russell</Link>
              <Link>Marvin Hawkins</Link>
              <Link>Bruce Simmons</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <ContactDetails />
    </Flex>
  );
};

export default FooterMobile;
