import { Box, ChakraProps, forwardRef } from "@chakra-ui/react";
import { isValidMotionProp, motion, MotionProps } from "framer-motion";

// Create a custom motion component from Box
const MotionBox = motion(
  forwardRef<MotionProps & ChakraProps, "div">((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  }),
  {
    forwardMotionProps: true,
  }
);

export default MotionBox;
