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

const Sidebar = () => {
  return (
    <>
      <Flex
        w={40}
        py={2}
        mx={4}
        mb={8}
        align="center"
        justify="center"
        border="1px solid"
        borderColor="appBlue.400"
        borderRadius="md"
        color="appBlue.400"
      >
        <Heading as="h3" fontSize="xl">
          Departments
        </Heading>
      </Flex>
      <Heading as="h4" fontSize="md" fontWeight="bold" ml={2} mb={2} mx={4}>
        All Categories
      </Heading>
      {/* Accordion start */}
      <Accordion allowMultiple fontSize="sm">
        {/* 1st item start */}
        <AccordionItem borderTop={[null, "none"]}>
          <AccordionButton py={3} borderRadius="md">
            <AccordionIcon color="appBlue.400" mr={1} />
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="sm">
                Ecommerce patterns
              </Heading>
            </Box>
          </AccordionButton>
          {/* Children */}
          <AccordionPanel ml={5}>
            <Link>Dummy</Link>
          </AccordionPanel>
        </AccordionItem>
        {/* 1st item end */}
        {/* 2nd item start */}
        <AccordionItem borderTop={[null, "none"]} borderBottom={[null, "none"]}>
          <AccordionButton py={3} borderRadius="md">
            <AccordionIcon color="appBlue.400" mr={1} />
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="sm">
                Electronics
              </Heading>
            </Box>
          </AccordionButton>
          {/* Children */}
          <AccordionPanel>
            {/* Accordion start */}
            <Accordion allowToggle>
              {/* 1st item start*/}
              <AccordionItem borderTop="none" borderBottom="none">
                <AccordionButton py={3} borderRadius="md">
                  <AccordionIcon color="appBlue.400" mr={1} />
                  <Box flex="1" textAlign="left">
                    <Heading as="h6" fontSize="sm">
                      Cell Phones and Smartphones
                    </Heading>
                  </Box>
                </AccordionButton>
                {/* Children */}
                <AccordionPanel ml={5}>
                  <VStack spacing={3} fontSize="sm" align="initial">
                    <Link>Cell Phone Accessories</Link>
                    <Link>Cell Phone Gadgets</Link>
                    <Link>Applications</Link>
                    <Link>Smart Watches</Link>
                  </VStack>
                  {/* Accordion start */}
                  <Accordion allowToggle mt={4}>
                    {/* 1st item start */}
                    <AccordionItem borderTop="none" borderBottom="none">
                      <AccordionButton
                        py={3}
                        borderRadius="md"
                        color="appBlue.400"
                        bg="appBlue.50"
                        _hover={{
                          bg: "appBlue.50",
                        }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading as="h6" fontSize="sm">
                            Show More
                          </Heading>
                        </Box>
                        <AccordionIcon color="gray.600" mr={1} />
                      </AccordionButton>
                      {/* Children */}
                      <AccordionPanel ml={5}></AccordionPanel>
                    </AccordionItem>
                    {/* 1st item end */}
                  </Accordion>
                  {/* Accordion end */}
                </AccordionPanel>
              </AccordionItem>
              {/* 1st item end */}
            </Accordion>
            {/* Accordion end */}
          </AccordionPanel>
        </AccordionItem>
        {/* 2nd item end */}
      </Accordion>
      {/* Accordion end */}
    </>
  );
};

export default Sidebar;
