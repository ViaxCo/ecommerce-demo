import { Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import Main from "../components/Main";
import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/ProductsGrid";
import { GlobalContext } from "../context/GlobalState";

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
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </AnimatePresence>
      </ProductsGrid>
    </Main>
  );
};

export default Saved;
