import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Stack,
  StackDivider,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Tag,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ShoppingCart } from "../components/Header";
import Rating from "@material-ui/lab/Rating";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Container from "../components/Container";

interface ParamsTypes {
  id: string;
}

const Product = () => {
  const { products, addToCart } = useContext(GlobalContext);
  // Get the url parameter (/:id) value
  const { id } = useParams<ParamsTypes>();
  const product = products!.find(product => product.id === id);
  return (
    <Container>
      <Box p={3}>
        <Breadcrumb
          fontSize="sm"
          spacing="8px"
          mb={6}
          color="gray.500"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Product</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box maxW="640px">
          <Stack
            //@ts-ignore
            direction={{ base: "column", smallTablet: "row" }}
            spacing={4}
            mb={8}
            divider={
              <StackDivider borderColor="blackAlpha.300" borderWidth="2px" />
            }
          >
            <Image
              m="auto"
              src={product?.imageUrl}
              alt={product?.imageAlt}
              boxSize="220px"
            />
            <Box>
              <Heading fontSize="2xl" mb={4}>
                {product?.title}
              </Heading>
              <Text fontSize="sm" fontWeight="medium" mb={4}>
                {product?.shortDescription}
              </Text>
              <Text fontSize="md" mb={2}>
                Brand: {product?.brand}
              </Text>
              <Flex align="center" mb={3}>
                <Rating
                  name="read-only-stars"
                  value={product?.rating}
                  precision={0.1}
                  size="small"
                  readOnly
                />
                <Text ml={1} fontSize="sm">
                  ({product?.reviewCount}{" "}
                  {product?.reviewCount === 1 ? "Rating" : "Ratings"})
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
              <Text fontSize="2xl" fontWeight="bold" mb={3}>
                ${product?.price}
              </Text>
              <Button
                colorScheme="red"
                onClick={() => {
                  addToCart!(product!);
                }}
                disabled={product!.inCart ? true : false}
              >
                <ShoppingCart mr={3} />
                {product!.inCart ? "Added to Cart" : "Add to Cart"}
              </Button>
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
            <Text>{product?.description}</Text>
            <Flex justify="flex-end">
              <Button colorScheme="appBlue" variant="ghost" size="sm">
                View more
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
