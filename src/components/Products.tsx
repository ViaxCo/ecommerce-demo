import { Grid, HStack, Text, Tag } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import loadableVisibility from "react-loadable-visibility/loadable-components";
import LoadingProduct from "./LoadingProduct";
import { searchTags } from "../mockDB/db";

// Lazy load each product and display them when they become visible in the viewport
const ProductCard = loadableVisibility(
  () => import("./ProductCard" /* webpackChunkName: "product-card" */),
  {
    fallback: <LoadingProduct />,
  }
);

const Products = () => {
  const { products } = useContext(GlobalContext);
  return (
    <>
      <HStack mb={5} spacing={2} flexWrap="wrap">
        <Text fontWeight="bold" fontSize="sm" mr={3}>
          Related
        </Text>
        {searchTags.map((tag, i) => (
          <Tag key={i} size="sm" bg="blackAlpha.200" rounded="full" m={1}>
            {tag}
          </Tag>
        ))}
      </HStack>
      <Grid
        p={3}
        templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
        gap={3}
        placeItems="center"
        placeContent="center"
      >
        {products!.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className="loading-product"
          />
        ))}
      </Grid>
    </>
  );
};

export default Products;
