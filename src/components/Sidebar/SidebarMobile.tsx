import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { RefObject } from "react";
import Sidebar from "./Sidebar";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  hamburgerRef: RefObject<SVGSVGElement>;
};

const SidebarMobile = ({ isOpen, onClose, hamburgerRef }: Props) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={hamburgerRef}
    >
      <DrawerOverlay display={["block", "none"]}>
        <DrawerContent pt={16} color="blackAlpha.700">
          <DrawerCloseButton
            color="appBlue.500"
            top="1rem"
            right={0}
            left="0.5rem"
            fontSize="1rem"
          />
          <Sidebar />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default SidebarMobile;
