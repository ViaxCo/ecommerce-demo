import { Text } from "@chakra-ui/react";
import Main from "../components/Main";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import loadableVisibility from "react-loadable-visibility/loadable-components";
import LoadingProduct from "../components/Loading/LoadingProduct";
import ProductsGrid from "../components/ProductsGrid";
import { AnimatePresence } from "framer-motion";

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
      <ProductsGrid>
        <AnimatePresence>
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
        </AnimatePresence>
      </ProductsGrid>
    </Main>
  );
};

export default Saved;
