import { Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Main from "../components/Main";
import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/ProductsGrid";
import { useGlobalContext } from "../context/useGlobalContext";

const Saved = () => {
  const { products } = useGlobalContext();
  const savedProducts = products.filter(product => product.isSaved === true);
  return (
    <Main>
      <ProductsGrid>
        <AnimatePresence>
          {savedProducts.length === 0 ? (
            <Text>No saved items</Text>
          ) : (
            savedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </AnimatePresence>
      </ProductsGrid>
    </Main>
  );
};

export default Saved;
