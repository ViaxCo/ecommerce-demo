import { HStack, Text, Tag } from "@chakra-ui/react";
import Main from "../components/Main";
import ProductsGrid from "../components/ProductsGrid";
import { searchTags } from "../mockDB/db";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import loadableVisibility from "react-loadable-visibility/loadable-components";
import LoadingProduct from "../components/Loading/LoadingProduct";

// Lazy load each product and display them when they become visible in the viewport
const ProductCard = loadableVisibility(
  () =>
    import("../components/ProductCard" /* webpackChunkName: "product-card" */),
  {
    fallback: <LoadingProduct />,
  }
);

const Home = () => {
  const { products, isLoading } = useContext(GlobalContext);
  return (
    <Main>
      <HStack p={3} mb={5} spacing={2} flexWrap="wrap">
        <Text fontWeight="bold" fontSize="sm" mr={3}>
          Related
        </Text>
        {searchTags.map((tag, i) => (
          <Tag key={i} size="sm" bg="blackAlpha.200" rounded="full" m={1}>
            {tag}
          </Tag>
        ))}
      </HStack>
      <ProductsGrid>
        {isLoading
          ? Array(20)
              .fill("")
              .map((_, i) => <LoadingProduct key={i} />)
          : products!.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                className="loading-product"
              />
            ))}
      </ProductsGrid>
    </Main>
  );
};

export default Home;
