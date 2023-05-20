import { ChevronRightIcon } from "@chakra-ui/icons";

import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  StackDivider,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { BsHeart as HeartIcon, BsHeartFill as HeartIconFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link as RouterLink, useParams } from "react-router-dom";
import ProgressLine from "../components/Loading/ProgressLine";
import MUIRating from "../components/MUI/MUIRating";
import { useGlobalContext } from "../context/useGlobalContext";

const Product = () => {
  const { fetchProducts, isLoading, products, addToCart, toggleSaved } =
    useGlobalContext();
  // Get the url parameter (/:id) value
  const { id } = useParams();
  useEffect(() => {
    isLoading && fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const product = products.find(product => product.id.toString() === id);
  const toast = useToast();
  return isLoading ? (
    <ProgressLine />
  ) : (
    <Box p={3}>
      <Breadcrumb
        fontSize="sm"
        spacing="8px"
        mb={6}
        color="gray.500"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Product</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {product ? (
        <Box maxW="640px">
          <Stack
            direction={{ base: "column", smallTablet: "row" }}
            spacing={4}
            m={2}
            mb={8}
            divider={<StackDivider borderColor="blackAlpha.300" borderWidth="2px" />}
          >
            <Flex align="center" justify="center" w="220px" h="220px" m="auto">
              <Image src={product.image} maxW="100%" maxH="100%" objectFit="contain" />
            </Flex>
            <Box>
              <Heading fontSize="2xl" mb={4}>
                {product.title}
              </Heading>
              <Flex align="center" mb={3}>
                <MUIRating
                  name="read-only-stars"
                  value={
                    product.id === 1 ||
                    product.id === 4 ||
                    product.id === 7 ||
                    product.id === 10 ||
                    product.id === 12 ||
                    product.id === 16 ||
                    product.id === 19
                      ? 4.7
                      : 4.1
                  }
                  precision={0.1}
                  size="small"
                  readOnly
                />
                <Text ml={1} fontSize="sm">
                  256 Ratings
                </Text>
              </Flex>
              <Flex mb={2}>
                <Text mr={2}>Size:</Text>{" "}
                <Tag bg="blackAlpha.200" borderRadius="none" mx={1}>
                  S
                </Tag>
                <Tag bg="blackAlpha.200" borderRadius="none" mx={1}>
                  M
                </Tag>
                <Tag bg="blackAlpha.200" borderRadius="none" mx={1}>
                  L
                </Tag>
                <Tag bg="blackAlpha.200" borderRadius="none" mx={1}>
                  XL
                </Tag>
              </Flex>
              <Flex align="center" mb={3}>
                <Text fontSize="2xl" fontWeight="bold">
                  ${product.price}{" "}
                  <Box
                    as="span"
                    textDecoration="line-through"
                    color="blackAlpha.500"
                    fontSize="lg"
                  >
                    {product.id === 1 ||
                    product.id === 4 ||
                    product.id === 7 ||
                    product.id === 10 ||
                    product.id === 12 ||
                    product.id === 16 ||
                    product.id === 19
                      ? +product.price * 2
                      : null}
                  </Box>
                </Text>
                <Badge
                  ml={4}
                  h="fit-content"
                  textTransform="uppercase"
                  colorScheme="green"
                >
                  {product.id === 1 ||
                  product.id === 4 ||
                  product.id === 7 ||
                  product.id === 10 ||
                  product.id === 12 ||
                  product.id === 16 ||
                  product.id === 19
                    ? "-50%"
                    : null}
                </Badge>
              </Flex>
              <HStack spacing={3}>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    addToCart(product);
                  }}
                  isDisabled={product.inCart ? true : false}
                >
                  <Icon as={FaShoppingCart} mr={3} />
                  {product.inCart ? "Added to Cart" : "Add to Cart"}
                </Button>
                <Button
                  colorScheme="appBlue"
                  variant="outline"
                  height={9}
                  minW={9}
                  w={9}
                  fontSize="2xl"
                  px={2}
                  borderRadius="full"
                  border={product.isSaved ? "none" : "1px solid"}
                  onClick={() => {
                    toast({
                      title: product.isSaved
                        ? "Product successfully removed from your saved items"
                        : "Product successfully added to your saved items",
                      status: "success",
                      duration: 1500,
                      isClosable: true,
                    });
                    toggleSaved(product.id);
                  }}
                >
                  {product.isSaved ? <HeartIconFill /> : <HeartIcon />}
                </Button>
              </HStack>
            </Box>
          </Stack>
          <Box
            boxShadow="base"
            rounded="md"
            border="1px solid"
            borderColor="gray.200"
            p={3}
          >
            <Heading as="h3" fontSize="2xl" mb={2}>
              Description
            </Heading>
            <Text>{product.description}</Text>
          </Box>
        </Box>
      ) : (
        <Text>No product found</Text>
      )}
    </Box>
  );
};

export default Product;
