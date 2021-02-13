import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Select,
  LinkBox,
  LinkOverlay,
  useToast,
} from "@chakra-ui/react";
import { BsHeart as HeartIcon } from "react-icons/bs";
import { BsHeartFill as HeartIconFill } from "react-icons/bs";
import { BiTrash as TrashIcon } from "react-icons/bi";
import { ProductType, GlobalContext } from "../../context/GlobalState";
import { useContext, ChangeEvent } from "react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  product: ProductType;
};

const CartItem = ({ product }: Props) => {
  const toast = useToast();
  const { setQuantity, deleteFromCart, toggleSaved } = useContext(
    GlobalContext
  );
  const subTotal = +product.price * +product.quantity!;

  return (
    <Flex
      display={{ base: "none", bigTablet: "flex" }}
      boxShadow="base"
      mb={4}
      rounded="base"
    >
      <Flex
        as={LinkBox}
        p={3}
        w="70%"
        borderRight="2px solid"
        borderColor="blackAlpha.200"
        _hover={{
          ".product-title": {
            color: "appBlue.600",
          },
        }}
      >
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          boxSize="100px"
          mr={2}
        />
        <Flex direction="column" justify="space-between" overflow="auto">
          <Box>
            <LinkOverlay
              as={RouterLink}
              to={{ pathname: `products/${product.id}` }}
              className="product-title"
            >
              <Text fontWeight="bold">{product.title}</Text>
              <Text fontSize="sm">{product.shortDescription}</Text>
            </LinkOverlay>
          </Box>
          <Flex flexWrap="wrap" mt={2}>
            <Button
              leftIcon={product.isSaved ? <HeartIconFill /> : <HeartIcon />}
              colorScheme="red"
              variant="ghost"
              size="sm"
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
              Save Item
            </Button>
            <Button
              leftIcon={<TrashIcon />}
              colorScheme="red"
              variant="ghost"
              size="sm"
              onClick={() => deleteFromCart!(product.id)}
            >
              Remove Item
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="30%"
        borderRight="2px solid"
        borderColor="blackAlpha.200"
        justify="center"
        align="center"
      >
        <Select
          size="sm"
          minW={12}
          maxW={16}
          m="auto"
          rounded="md"
          value={product.quantity}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setQuantity!(e.target.value, product.id)
          }
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </Flex>
      <Flex
        w="30%"
        borderRight="2px solid"
        borderColor="blackAlpha.200"
        fontWeight="bold"
        fontSize="lg"
        justify="center"
        align="center"
      >
        ${product.price}
      </Flex>
      <Flex
        w="30%"
        fontWeight="bold"
        fontSize="lg"
        justify="center"
        align="center"
      >
        ${subTotal.toFixed(2)}
      </Flex>
    </Flex>
  );
};

export default CartItem;
