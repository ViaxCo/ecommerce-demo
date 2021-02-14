import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProductsGrid = ({ children }: Props) => {
  return (
    <Grid
      p={3}
      templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
      gap={3}
      placeItems="center"
      placeContent="center"
    >
      {children}
    </Grid>
  );
};

export default ProductsGrid;
