import { Box, Button, Flex, HStack, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import CartItemMobile from "../components/CartItem/CartItemMobile";
import MotionBox from "../components/MotionBox";
import { useGlobalContext } from "../context/useGlobalContext";

const Cart = () => {
  const { products, totalPrice } = useGlobalContext();
  const productsInCart = products.flatMap(product =>
    product.inCart === true ? product : []
  );
  const [isLargerThan345] = useMediaQuery("(min-width: 345px)");

  return (
    <Flex w="90%" mx="auto" direction="column" p={3}>
      <Flex
        display={{ base: "none", bigTablet: "flex" }}
        fontWeight="bold"
        fontSize="lg"
        mb={3}
        color="gray.600"
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
        color="gray.600"
      >
        MY CART
      </Box>
      {/* Duplicated so the children don't have the same key */}
      <AnimatePresence>
        {productsInCart.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
      </AnimatePresence>
      <AnimatePresence>
        {productsInCart.map(product => (
          <CartItemMobile key={product.id} product={product} />
        ))}
      </AnimatePresence>

      {productsInCart.length > 0 ? (
        <>
          <Flex
            mb={4}
            justifyContent="space-between"
            w={{ base: "100%", bigTablet: "150px" }}
            alignSelf={{ base: undefined, bigTablet: "flex-end" }}
          >
            <Text fontSize="lg" fontWeight="semibold">
              Total:
            </Text>
            <Box as="span" fontWeight="bold" color="appBlue.600" fontSize="xl">
              ${totalPrice.toFixed(2)}
            </Box>
          </Flex>
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
            <Button colorScheme="red" boxShadow="md" size={isLargerThan345 ? "md" : "sm"}>
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
