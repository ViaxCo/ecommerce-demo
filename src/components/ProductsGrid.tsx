import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProductsGrid = ({ children }: Props) => {
  return (
    <Grid
      p={2}
      templateColumns={{
        base: "repeat(auto-fit, minmax(180px, 1fr))",
        sm: "repeat(auto-fit, minmax(200px, 1fr))",
      }}
      gap={{ base: 2, sm: 3 }}
      placeItems="center"
      placeContent="center"
    >
      {children}
    </Grid>
  );
};

export default ProductsGrid;
