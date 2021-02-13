import { Stack, Skeleton } from "@chakra-ui/react";

const LoadingProduct = () => {
  return (
    <Stack h="460px" w="100%" maxW="320px">
      <Skeleton height="180px" rounded="md" />
      <Skeleton height="84px" />
      <Skeleton height="118px" />
      <Skeleton height="52px" rounded="md" />
    </Stack>
  );
};

export default LoadingProduct;
