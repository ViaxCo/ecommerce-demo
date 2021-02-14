import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link as RouterLink } from "react-router-dom";
import loadableVisibility from "react-loadable-visibility/loadable-components";
import LoadingCart from "../components/Loading/LoadingCart";
import { AnimatePresence } from "framer-motion";
import { MotionBox } from "../components/ProductCard";

// Lazy load each CartItem and display them when they become visible in the viewport
const CartItem = loadableVisibility(
  () =>
    import(
      "../components/CartItem/CartItem" /* webpackChunkName: "cart-item" */
    ),
  {
    fallback: <LoadingCart display={{ base: "none", bigTablet: "flex" }} />,
  }
);
const CartItemMobile = loadableVisibility(
  () =>
    import(
      "../components/CartItem/CartItemMobile" /* webpackChunkName: "cart-item-mobile" */
    ),
  {
    fallback: <LoadingCart display={{ base: "flex", bigTablet: "none" }} />,
  }
);

const Cart = () => {
  const { products, totalPrice } = useContext(GlobalContext);
  const cartItems = products?.filter(product => product.inCart === true);
  const [isLargerThan345] = useMediaQuery("(min-width: 345px)");

  return (
    <Flex w="90%" mx="auto" direction="column" p={3}>
      <Flex
        display={{ base: "none", bigTablet: "flex" }}
        fontWeight="bold"
        fontSize="lg"
        mb={3}
      >
        <Text w="70%" pl={3}>
          Item
        </Text>
        <Text w="30%" pl={3}>
          Quantity
        </Text>
        <Text w="30%" pl={3}>
          Unit Price
        </Text>
        <Text w="30%" pl={3}>
          Sub-total
        </Text>
      </Flex>
      <Box
        display={{ base: "block", bigTablet: "none" }}
        fontWeight="bold"
        fontSize="lg"
        mb={3}
      >
        MY CART
      </Box>
      {/* Duplicated so the children don't have the same key */}
      <AnimatePresence>
        {cartItems!.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
      </AnimatePresence>
      <AnimatePresence>
        {cartItems!.map(product => (
          <CartItemMobile key={product.id} product={product} />
        ))}
      </AnimatePresence>

      {cartItems!.length > 0 ? (
        <>
          <Text
            fontSize={isLargerThan345 ? "2xl" : "xl"}
            alignSelf="flex-end"
            mb={4}
          >
            Total:{" "}
            <Box as="span" fontWeight="bold">
              ${totalPrice?.toFixed(2)}
            </Box>
          </Text>
          <HStack spacing={4} alignSelf="flex-end">
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
              <Button
                colorScheme="gray"
                boxShadow="md"
                size={isLargerThan345 ? "md" : "sm"}
              >
                Continue Shopping
              </Button>
            </Link>
            <Button
              colorScheme="red"
              boxShadow="md"
              size={isLargerThan345 ? "md" : "sm"}
            >
              Checkout
            </Button>
          </HStack>
        </>
      ) : (
        <MotionBox
          opacity={0}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Text mb={4}>No Items in your cart</Text>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
            <Button colorScheme="gray" boxShadow="md">
              Continue Shopping
            </Button>
          </Link>
        </MotionBox>
      )}
    </Flex>
  );
};

export default Cart;
