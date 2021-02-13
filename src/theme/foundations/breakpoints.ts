import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  // 375px and above
  mobileM: "23.4375em",
  // 567px and above
  smallTablet: "35.4375em",
  //   768px and above
  bigTablet: "48em",
  //   865px and above
  sm: "54.0625em",
  //   1017px and above
  md: "63.5625em",
  //   1280px and above
  lg: "80em",
  //   1440px and above
  xl: "90em",
});

export default breakpoints;
