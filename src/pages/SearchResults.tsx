import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/ProductsGrid";

import { AnimatePresence } from "framer-motion";
import { useGlobalContext } from "../context/useGlobalContext";

const SearchResults = () => {
  const { products } = useGlobalContext();
  const { name } = useParams();
  const foundProducts = products.filter(
    product =>
      (name &&
        product &&
        product.title &&
        product.title.toLowerCase().includes(name.toLowerCase())) ||
      (name &&
        product.description &&
        product.description.toLowerCase().includes(name.toLowerCase()))
  );
  return (
    <Box>
      <Breadcrumb
        fontSize="sm"
        spacing="8px"
        m={3}
        mb={6}
        color="gray.500"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Product</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <ProductsGrid>
        <AnimatePresence>
          {foundProducts.length > 0 ? (
            foundProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <Text>No products found</Text>
          )}
        </AnimatePresence>
      </ProductsGrid>
    </Box>
  );
};

export default SearchResults;
