import { Grid, Text } from "@chakra-ui/react";
import Main from "../components/Main";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import loadableVisibility from "react-loadable-visibility/loadable-components";
import LoadingProduct from "../components/LoadingProduct";

// Lazy load each product and display them when they become visible in the viewport
const ProductCard = loadableVisibility(
  () =>
    import("../components/ProductCard" /* webpackChunkName: "product-card" */),
  {
    fallback: <LoadingProduct />,
  }
);

const Saved = () => {
  const { products } = useContext(GlobalContext);
  const savedProducts = products?.filter(product => product.isSaved === true);
  return (
    <Main>
      <Grid
        p={3}
        templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
        gap={3}
        placeItems="center"
        placeContent="center"
      >
        {savedProducts?.length === 0 ? (
          <Text>No saved items</Text>
        ) : (
          savedProducts!.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              className="loading-product"
            />
          ))
        )}
      </Grid>
    </Main>
  );
};

export default Saved;
