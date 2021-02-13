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
import CartItem from "../components/CartItem/CartItem";
import CartItemMobile from "../components/CartItem/CartItemMobile";
import { Link as RouterLink } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  const { products, totalPrice } = useContext(GlobalContext);
  const cartItems = products?.filter(product => product.inCart === true);
  const [isLargerThan345] = useMediaQuery("(min-width: 345px)");

  return (
    <Container>
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
        {cartItems!.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
        {cartItems!.map(product => (
          <CartItemMobile key={product.id} product={product} />
        ))}

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
          <Box>
            <Text mb={4}>No Items in your cart</Text>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
              <Button colorScheme="gray" boxShadow="md">
                Continue Shopping
              </Button>
            </Link>
          </Box>
        )}
      </Flex>
    </Container>
  );
};

export default Cart;
