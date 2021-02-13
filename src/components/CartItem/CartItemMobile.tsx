import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  LinkBox,
  LinkOverlay,
  Input,
  useNumberInput,
  HStack,
  chakra,
  useToast,
} from "@chakra-ui/react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { ProductType, GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

type Props = {
  product: ProductType;
};

// Give the components chakra props
export const HeartIcon = chakra(BsHeart);
export const HeartIconFill = chakra(BsHeartFill);
export const TrashIcon = chakra(BiTrash);

const CartItemMobile = ({ product }: Props) => {
  const toast = useToast();
  const subTotal = +product.price * +product.quantity!;
  const {
    deleteFromCart,
    incrementQty,
    decrementQty,
    toggleSaved,
  } = useContext(GlobalContext);

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput();
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Flex
      display={{ base: "flex", bigTablet: "none" }}
      direction="column"
      boxShadow="base"
      p={3}
      mb={4}
      rounded="base"
    >
      <Flex
        as={LinkBox}
        p={1}
        borderBottom="1px solid"
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
          w="40%"
          maxWidth="150px"
          objectFit="contain"
          mr={2}
        />
        <Flex direction="column" flex={1}>
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
          <Box mt={2} fontWeight="bold" fontSize="lg">
            ${subTotal.toFixed(2)}
          </Box>
        </Flex>
      </Flex>

      <Flex mt={3}>
        <Button
          colorScheme="red"
          variant="ghost"
          size="md"
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
          px={2}
          borderRight="1px solid"
          borderColor="blackAlpha.200"
        >
          {product.isSaved ? <HeartIconFill /> : <HeartIcon />}
        </Button>
        <Button
          colorScheme="red"
          variant="ghost"
          size="md"
          px={2}
          onClick={() => deleteFromCart!(product.id)}
        >
          <TrashIcon
            mr={1}
            sx={{ "@media(max-width:365px)": { marginRight: 0 } }}
          />
          <Box
            as="span"
            fontSize="sm"
            sx={{ "@media(max-width:365px)": { display: "none" } }}
          >
            Remove Item
          </Box>
        </Button>
        <HStack spacing={1} w="100px" justify="center" align="center" ml="auto">
          <Button
            size="xs"
            colorScheme="appBlue"
            rounded="full"
            {...dec}
            disabled={+product.quantity! === 1}
            onClick={() => decrementQty!(product.id)}
            w="17.5%"
          >
            <MinusIcon />
          </Button>
          <Input
            size="sm"
            {...input}
            value={product.quantity}
            readOnly
            pattern="^[-+]?[0-9]\d*(\.\d+)?$"
            w="65%"
            textAlign="center"
            border="none"
            borderBottom="1px solid #00000014"
          />
          <Button
            size="xs"
            colorScheme="appBlue"
            rounded="full"
            {...inc}
            disabled={+product.quantity! === 3}
            onClick={() => incrementQty!(product.id)}
            w="17.5%"
          >
            <AddIcon />
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default CartItemMobile;
