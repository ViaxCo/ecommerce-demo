import { Skeleton, SkeletonProps } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const MUISkeleton = (props: SkeletonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Skeleton {...props} />
    </ThemeProvider>
  );
};

export default MUISkeleton;
