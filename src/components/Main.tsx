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
  chakra,
  Text,
  Tag,
  Grid,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsGridFill } from "react-icons/bs";
import { IoListOutline } from "react-icons/io5";
import { searchTags } from "../mockDB/db";
import Badge from "@material-ui/core/Badge";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import loadableVisibility from "react-loadable-visibility/loadable-components";
import LoadingProduct from "./LoadingProduct";

// Lazy load each product and display them when they become visible in the viewport
const ProductCard = loadableVisibility(() => import("./ProductCard"), {
  fallback: <LoadingProduct />,
});

// Give the components chakra props
const GridIcon = chakra(BsGridFill);
const ListIcon = chakra(IoListOutline);

const Main = () => {
  const { products, savedItemsCount } = useContext(GlobalContext);
  const [isLargerThan567] = useMediaQuery("(min-width: 567px)");

  return (
    <Box
      boxShadow="base"
      mx={[0, 4]}
      h="100%"
      rounded="md"
      border="1px solid"
      borderColor="gray.200"
      p={3}
    >
      <Flex align="flex-end" justify="space-between" flexWrap="wrap">
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
              <option value="option1">Wellness</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
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
              <option value="option1">Free Shipping</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
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
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
        </HStack>
        <Flex justify="space-between" align="center" flexWrap="wrap" w="100%">
          <Tabs variant="unstyled" size="sm" mb={5}>
            <TabList bg="appBlue.50" rounded="md">
              <Tab
                _selected={{
                  border: "1px solid",
                  borderColor: "gray.200",
                  color: "appBlue.400",
                  bg: "white",
                  rounded: "base",
                  boxShadow: "base",
                }}
                fontSize={["xs", "sm"]}
              >
                Show All
              </Tab>
              <Tab
                _selected={{
                  border: "1px solid",
                  borderColor: "gray.200",
                  color: "appBlue.400",
                  bg: "white",
                  rounded: "base",
                  boxShadow: "base",
                }}
                fontSize={["xs", "sm"]}
              >
                <Badge badgeContent={savedItemsCount} color="secondary">
                  Saved
                </Badge>
              </Tab>
              <Tab
                _selected={{
                  border: "1px solid",
                  borderColor: "gray.200",
                  color: "appBlue.400",
                  bg: "white",
                  rounded: "base",
                  boxShadow: "base",
                }}
                fontSize={["xs", "sm"]}
              >
                Buy now
              </Tab>
            </TabList>
          </Tabs>
          <Tabs variant="unstyled" size="sm" mb={5}>
            <TabList bg="appBlue.50" rounded="md">
              <Tab
                _selected={{
                  color: "appBlue.400",
                  bg: "white",
                  rounded: "base",
                  boxShadow: "base",
                }}
              >
                <ListIcon fontSize={["sm", "md"]} />
              </Tab>
              <Tab
                _selected={{
                  color: "appBlue.400",
                  bg: "white",
                  rounded: "base",
                  boxShadow: "base",
                }}
              >
                <GridIcon fontSize={["sm", "md"]} />
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Flex>
      <HStack mb={5} spacing={2} flexWrap="wrap">
        <Text fontWeight="bold" fontSize="sm" mr={3}>
          Related
        </Text>
        {searchTags.map((tag, i) => (
          <Tag key={i} size="sm" bg="blackAlpha.200" rounded="full" m={1}>
            {tag}
          </Tag>
        ))}
      </HStack>
      <Grid
        p={3}
        templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
        gap={3}
        placeItems="center"
        placeContent="center"
      >
        {products!.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className="loading-product"
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Main;
