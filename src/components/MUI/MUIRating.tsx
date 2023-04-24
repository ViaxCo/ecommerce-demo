import { Rating, RatingProps } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const MUIRating = (props: RatingProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Rating {...props} />
    </ThemeProvider>
  );
};

export default MUIRating;
