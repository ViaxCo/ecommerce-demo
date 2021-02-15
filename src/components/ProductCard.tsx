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
  forwardRef,
  ChakraProps,
} from "@chakra-ui/react";
import Rating from "@material-ui/lab/Rating";
import { isValidMotionProp, motion, MotionProps } from "framer-motion";
import { useContext } from "react";
import {
  BsHeart as HeartIcon,
  BsHeartFill as HeartIconFill,
} from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import { ShoppingCart } from "../components/Header";
import { GlobalContext, ProductType } from "../context/GlobalState";

// Create a custom motion component from Box
export const MotionBox = motion.custom(
  forwardRef<MotionProps & ChakraProps, "div">((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

type Props = {
  product: ProductType;
  className?: string;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart, toggleSaved } = useContext(GlobalContext);
  const toast = useToast();
  return (
    <MotionBox
      as="article"
      h="420px"
      w="100%"
      maxW="280px"
      opacity={0}
      // animation
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      layout
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30,
      }}
    >
      <MotionBox
        as={LinkBox}
        display="flex"
        flexDirection="column"
        h="100%"
        className="product-card"
        p={[2, 3]}
        rounded="md"
        border={["1px solid", "none"]}
        borderColor={["gray.200", "transparent"]}
        _hover={{
          ".product-title": {
            color: "appBlue.600",
          },
          ".btn": {
            opacity: 1,
          },
          ".btn:disabled": {
            opacity: 0.4,
          },
        }}
        transition="all 0.2s ease"
        // animation
        exit={{ opacity: 0 }}
      >
        <Image
          m="auto"
          data-src={product.image}
          className="lazyload"
          boxSize="140px"
        />
        <LinkOverlay
          as={RouterLink}
          to={{ pathname: `/products/${product.id}` }}
          className="product-title"
        >
          <Flex direction="column" minH="84px" justify="center">
            <Text mt={2} fontSize="sm" fontWeight="medium" lineHeight="short">
              {product.title}
            </Text>
          </Flex>
        </LinkOverlay>
        <Box>
          <Flex align="center" justify="space-between" h="38px">
            <Text fontSize="xl" fontWeight="bold" color="appBlue.600">
              ${product.price}{" "}
              <Box
                as="span"
                textDecoration="line-through"
                color="blackAlpha.500"
                fontSize="md"
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
            <Badge textTransform="uppercase" colorScheme="green">
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
          <Flex align="center" h="18px">
            <Text fontSize="xs">Eligible for free shipping</Text>
          </Flex>
          <Flex mt={1} align="center" justify="space-between" flexWrap="wrap">
            <Flex align="center">
              <Rating
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
                {product.id === 1 ||
                product.id === 4 ||
                product.id === 7 ||
                product.id === 10 ||
                product.id === 12 ||
                product.id === 16 ||
                product.id === 19
                  ? "4.7"
                  : "4.1"}
              </Text>
            </Flex>
            <Button
              opacity={product.isSaved ? 1 : [1, 0]}
              className="btn"
              colorScheme="appBlue"
              variant="outline"
              height={9}
              minW={9}
              w={9}
              fontSize="lg"
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
                toggleSaved!(product.id);
              }}
            >
              {product.isSaved ? <HeartIconFill /> : <HeartIcon />}
            </Button>
          </Flex>
        </Box>
        <Button
          opacity={[1, 0]}
          className="btn"
          mt={3}
          colorScheme="red"
          variant="outline"
          fontSize="sm"
          onClick={() => {
            addToCart!(product);
          }}
          disabled={product.inCart ? true : false}
        >
          <ShoppingCart mr={4} />
          {product.inCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </MotionBox>
    </MotionBox>
  );
};

export default ProductCard;
