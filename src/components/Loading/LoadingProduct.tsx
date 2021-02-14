import { Stack } from "@chakra-ui/react";
import { Skeleton } from "@material-ui/lab";

const LoadingProduct = () => {
  return (
    <Stack h="460px" w="100%" maxW="320px">
      <Skeleton height="180px" style={{ transform: "none" }} animation="wave" />
      <Skeleton variant="text" style={{ transform: "none" }} animation="wave" />
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
