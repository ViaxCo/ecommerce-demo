import { Stack } from "@chakra-ui/react";
import { Skeleton } from "@material-ui/lab";

const LoadingProduct = () => {
  return (
    <Stack h="460px" w="100%" maxW="280px">
      <Skeleton height="140px" style={{ transform: "none" }} animation="wave" />
      <Skeleton height="80px" style={{ transform: "none" }} animation="wave" />
      <Skeleton
        variant="text"
        width="60%"
        style={{ transform: "none" }}
        animation="wave"
      />
    </Stack>
  );
};

export default LoadingProduct;
