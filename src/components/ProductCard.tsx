import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsHeart as HeartIcon, BsHeartFill as HeartIconFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { ProductType } from "../context/GlobalState";
import { useGlobalContext } from "../context/useGlobalContext";
import MUIRating from "./MUI/MUIRating";
import MUISkeleton from "./MUI/MUISkeleton";
import MotionBox from "./MotionBox";

type Props = {
  product: ProductType;
  className?: string;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart, toggleSaved } = useGlobalContext();
  const toast = useToast();

  const isWithinRange = (item: number) => {
    const nums = [1, 4, 7, 10, 12, 16, 19];
    return nums.includes(item);
  };

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
        p={{ base: 2, sm: 3 }}
        rounded="md"
        border={{ base: "1px solid", sm: "none" }}
        borderColor={{ base: "gray.200", sm: "transparent" }}
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
        <Flex align="center" justify="center" w="140px" h="140px" m="auto">
          <Image
            data-src={product.image}
            className="image lazyload"
            maxW="100%"
            maxH="100%"
            objectFit="contain"
          />
          <Box w="140px" h="140px">
            <MUISkeleton height="140px" style={{ transform: "none" }} animation="wave" />
          </Box>
        </Flex>
        <LinkOverlay
          as={RouterLink}
          to={`/products/${product.id}`}
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
                {isWithinRange(+product.id) ? +product.price * 2 : null}
              </Box>
            </Text>
            <Badge colorScheme="green">
              {isWithinRange(+product.id) ? "-50%" : null}
            </Badge>
          </Flex>
          <Flex align="center" h="18px">
            <Text fontSize="xs">Eligible for free shipping</Text>
          </Flex>
          <Flex mt={1} align="center" justify="space-between" flexWrap="wrap">
            <Flex align="center">
              <MUIRating
                name="read-only-stars"
                value={isWithinRange(+product.id) ? 4.7 : 4.1}
                precision={0.1}
                size="small"
                readOnly
              />
              <Text ml={1} fontSize="sm">
                {isWithinRange(+product.id) ? "4.7" : "4.1"}
              </Text>
            </Flex>
            <Button
              opacity={product.isSaved ? 1 : { base: 1, sm: 0 }}
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
                toggleSaved(product.id);
              }}
            >
              {product.isSaved ? <HeartIconFill /> : <HeartIcon />}
            </Button>
          </Flex>
        </Box>
        <Button
          opacity={{ base: 1, sm: 0 }}
          className="btn"
          mt={3}
          colorScheme="red"
          variant="outline"
          fontSize="sm"
          onClick={() => {
            addToCart(product);
          }}
          isDisabled={product.inCart ? true : false}
        >
          <Icon as={FaShoppingCart} mr={4} />
          {product.inCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </MotionBox>
    </MotionBox>
  );
};

export default ProductCard;
