import { HStack, Tag, Text } from "@chakra-ui/react";
import { useContext } from "react";
import LoadingProduct from "../components/Loading/LoadingProduct";
import Main from "../components/Main";
import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/ProductsGrid";
import { GlobalContext } from "../context/GlobalState";
import { searchTags } from "../mockDB/db";

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
          : products?.map(product => (
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
