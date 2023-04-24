import Badge from "@mui/material/Badge";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode } from "react";

type Props = {
  badgeContent?: number;
  children: ReactNode;
};

const theme = createTheme();

const MUIBadge = ({ badgeContent, children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Badge badgeContent={badgeContent} color="secondary">
        {children}
      </Badge>
    </ThemeProvider>
  );
};

export default MUIBadge;
