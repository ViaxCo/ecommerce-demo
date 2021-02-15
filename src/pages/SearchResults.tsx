import { useParams } from "react-router-dom";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import loadableVisibility from "react-loadable-visibility/loadable-components";
import LoadingProduct from "../components/Loading/LoadingProduct";
import ProductsGrid from "../components/ProductsGrid";

interface ParamsTypes {
  name: string;
}

// Lazy load each product and display them when they become visible in the viewport
const ProductCard = loadableVisibility(
  () =>
    import("../components/ProductCard" /* webpackChunkName: "product-card" */),
  {
    fallback: <LoadingProduct />,
  }
);

const SearchResults = () => {
  const { products } = useContext(GlobalContext);
  const { name } = useParams<ParamsTypes>();
  const foundProducts = products!.filter(
    product =>
      (product &&
        product.title &&
        product.title.toLowerCase().includes(name.toLowerCase())) ||
      (product.description &&
        product.description.toLowerCase().includes(name.toLowerCase()))
  );
  return (
    <Box p={3}>
      <Breadcrumb
        fontSize="sm"
        spacing="8px"
        mb={6}
        color="gray.500"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Product</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <ProductsGrid>
        {foundProducts.length > 0 ? (
          foundProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              className="loading-product"
            />
          ))
        ) : (
          <Text>No products found</Text>
        )}
      </ProductsGrid>
    </Box>
  );
};

export default SearchResults;
