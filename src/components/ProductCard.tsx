import {
  Box,
  Image,
  Flex,
  Badge,
  Text,
  Button,
  LinkBox,
  LinkOverlay,
  useToast,
} from "@chakra-ui/react";
import Rating from "@material-ui/lab/Rating";
import { useContext } from "react";
import { BsHeart as HeartIcon } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import { ShoppingCart } from "../components/Header";
import { GlobalContext, ProductType } from "../context/GlobalState";

type Props = {
  product: ProductType;
  className?: string;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart, toggleSaved } = useContext(GlobalContext);
  const toast = useToast();
  return (
    <Flex
      as={LinkBox}
      direction="column"
      className="product-card"
      p={3}
      h="460px"
      w="100%"
      maxW="320px"
      rounded="md"
      border={["1px solid", "none"]}
      borderColor={["gray.200", "transparent"]}
      _hover={{
        ".product-title": {
          color: "appBlue.600",
        },
      }}
      transition="all 0.2s ease"
    >
      <Image
        m="auto"
        src={product.imageUrl}
        alt={product.imageAlt}
        boxSize="180px"
      />
      <LinkOverlay
        as={RouterLink}
        to={{ pathname: `/products/${product.id}` }}
        className="product-title"
      >
        <Flex direction="column" minH="84px" justify="flex-start">
          <Text mt={2} fontSize="sm" fontWeight="semibold" lineHeight="short">
            {product.title}
          </Text>
          <Text fontSize="sm" lineHeight="short">
            {product.shortDescription}
          </Text>
        </Flex>
      </LinkOverlay>
      <Box>
        <Flex align="center" justify="space-between" h="38px">
          <Text mt={2} fontSize="xl" fontWeight="bold">
            ${product.price}
          </Text>
          <Badge textTransform="uppercase" colorScheme="green">
            {product.tag}
          </Badge>
        </Flex>
        <Flex mt={2} align="center" h="36px">
          <Text fontSize="xs">{product.tagline}</Text>
        </Flex>
        <Flex mt={2} align="center" justify="space-between" flexWrap="wrap">
          <Flex align="center">
            <Rating
              name="read-only-stars"
              value={product.rating}
              precision={0.1}
              size="small"
              readOnly
            />
            <Text ml={1} fontSize="sm">
              {product.rating}
            </Text>
          </Flex>
          <Button
            leftIcon={<HeartIcon />}
            colorScheme="appBlue"
            variant={product.isSaved ? "solid" : "outline"}
            height={7}
            minW={7}
            fontSize="sm"
            px={2}
            py={3}
            onClick={() => {
              toast({
                title: product.isSaved
                  ? "Product successfully removed from your saved items"
                  : "Product successfully added to your saved items",
                status: "success",
                duration: 1500,
                isClosable: true,
              });
              toggleSaved!(product.id);
            }}
          >
            Watch
          </Button>
        </Flex>
      </Box>
      <Button
        mt={3}
        colorScheme="red"
        variant="outline"
        onClick={() => {
          addToCart!(product);
        }}
        disabled={product.inCart ? true : false}
      >
        <ShoppingCart mr={4} />
        {product.inCart ? "Added to Cart" : "Add to Cart"}
      </Button>
    </Flex>
  );
};

export default ProductCard;
