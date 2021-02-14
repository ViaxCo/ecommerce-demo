import { Stack } from "@chakra-ui/react";
import { Skeleton } from "@material-ui/lab";

type Props = {
  display: { base: string; bigTablet: string };
};

const LoadingCart = ({ display }: Props) => {
  return (
    <Stack display={display} h="100%" w="100%" mb={4}>
      <Skeleton height="100px" style={{ transform: "none" }} animation="wave" />
      <Skeleton
        variant="text"
        width="60%"
        style={{ transform: "none" }}
        animation="wave"
      />
    </Stack>
  );
};

export default LoadingCart;
