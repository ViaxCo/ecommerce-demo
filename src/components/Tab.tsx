import { Tab } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  mediaQuery: boolean;
  children: ReactNode;
  navigatePath: string;
};
export default function TabComponent({ mediaQuery, children, navigatePath }: Props) {
  const navigate = useNavigate();
  return (
    <Tab
      _selected={{
        color: "appBlue.400",
        bg: "white",
        rounded: "base",
        boxShadow: "base",
      }}
      fontSize={mediaQuery ? "sm" : "xs"}
      onClick={() => {
        navigate(navigatePath);
      }}
    >
      {children}
    </Tab>
  );
}
