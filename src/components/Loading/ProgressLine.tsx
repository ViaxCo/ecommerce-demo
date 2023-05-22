import { Progress } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const ProgressLine = () => {
  const location = useLocation();
  return (
    <Progress
      mt={
        location.pathname === "/login" || location.pathname === "/register"
          ? { base: "120px", sm: "72px" }
          : 0
      }
      size="xs"
      colorScheme="appBlue"
      isIndeterminate
    />
  );
};

export default ProgressLine;
