import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Select,
  Tabs,
  TabList,
  Tab,
  useMediaQuery,
} from "@chakra-ui/react";
import Badge from "@material-ui/core/Badge";
import { ReactNode, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, useLocation } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  const { savedItemsCount } = useContext(GlobalContext);
  const [isLargerThan567] = useMediaQuery("(min-width: 567px)");
  const history = useHistory();
  const location = useLocation();

  return (
    <Box
      as="main"
      boxShadow="base"
      mx={[0, 4]}
      h="100%"
      rounded="md"
      border="1px solid"
      borderColor="gray.200"
    >
      <Flex
        p={3}
        pb={0}
        align="flex-end"
        justify="space-between"
        flexWrap="wrap"
      >
        <HStack align="flex-end" mr={5} mb={5}>
          <FormControl w="fit-content">
            <FormLabel
              textTransform="uppercase"
              fontSize="x-small"
              w="fit-content"
            >
              Sort by
            </FormLabel>
            <Select
              minW="fit-content"
              size={isLargerThan567 ? "sm" : "xs"}
              rounded="base"
              borderColor="gray.500"
              cursor="pointer"
            >
              <option value="option1">Category</option>
            </Select>
          </FormControl>
          <FormControl w="fit-content">
            <Select
              minW="fit-content"
              size={isLargerThan567 ? "sm" : "xs"}
              rounded="base"
              borderColor="gray.400"
              cursor="pointer"
            >
              <option value="option1">Shipping</option>
            </Select>
          </FormControl>
          <FormControl w="fit-content">
            <Select
              minW="fit-content"
              size={isLargerThan567 ? "sm" : "xs"}
              rounded="base"
              borderColor="gray.400"
              cursor="pointer"
            >
              <option value="option1">Delivery options</option>
            </Select>
          </FormControl>
        </HStack>
        <Flex align="center">
          <Tabs
            variant="unstyled"
            size="sm"
            mb={5}
            defaultIndex={
              location.pathname === "/"
                ? 0
                : location.pathname === "/saved"
                ? 1
                : undefined
            }
          >
            <TabList bg="appBlue.50" rounded="md">
              <Tab
                _selected={{
                  color: "appBlue.400",
                  bg: "white",
                  rounded: "base",
                  boxShadow: "base",
                }}
                fontSize={isLargerThan567 ? "sm" : "xs"}
                onClick={() => {
                  history.push("/");
                }}
              >
                Show All
              </Tab>
              <Tab
                _selected={{
                  color: "appBlue.400",
                  bg: "white",
                  rounded: "base",
                  boxShadow: "base",
                }}
                fontSize={isLargerThan567 ? "sm" : "xs"}
                onClick={() => {
                  history.push("/saved");
                }}
              >
                <Badge badgeContent={savedItemsCount} color="secondary">
                  Saved
                </Badge>
              </Tab>
              <Tab
                _selected={{
                  color: "appBlue.400",
                  bg: "white",
                  rounded: "base",
                  boxShadow: "base",
                }}
                fontSize={isLargerThan567 ? "sm" : "xs"}
                onClick={() => {
                  history.push("/cart");
                }}
              >
                Buy now
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Flex>
      {children}
    </Box>
  );
};

export default Main;
