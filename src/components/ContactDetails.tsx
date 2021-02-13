import { chakra, Flex, HStack, Link, Stack, Text } from "@chakra-ui/react";

import { VscLocation } from "react-icons/vsc";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// Give the components chakra props
const LocationIcon = chakra(VscLocation);
const PhoneIcon = chakra(IoMdPhonePortrait);
const TwitterIcon = chakra(FaTwitter);
export const FbIcon = chakra(FaFacebook);
const LinkedinIcon = chakra(FaLinkedin);

const ContactDetails = () => {
  return (
    <Flex direction="column" align={["center", "initial"]}>
      <Stack direction={["row", "column"]} spacing={4} mb={[5, 8]}>
        <HStack spacing={2}>
          <LocationIcon color="white" size={24} />
          <Text fontSize="sm">7480 Mockingbird Hill</Text>
        </HStack>
        <HStack spacing={2}>
          <PhoneIcon color="white" size={24} />
          <Text fontSize="sm">(239) 555-0108</Text>
        </HStack>
      </Stack>
      <HStack spacing={6}>
        <Link>
          <TwitterIcon color="white" _hover={{ color: "#1DA1F2" }} size={24} />
        </Link>
        <Link>
          <FbIcon color="white" _hover={{ color: "#4267B2" }} size={24} />
        </Link>
        <Link>
          <LinkedinIcon color="white" _hover={{ color: "#2867B2" }} size={24} />
        </Link>
      </HStack>
    </Flex>
  );
};

export default ContactDetails;
