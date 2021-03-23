import { Link } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useShop } from "hook/useShop";

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useShop();
  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack p="2rem">
              <Link to='/'>About Us</Link>
              <Link to='/'>Learn More</Link>
              <Link to='/'>Sustainability</Link>
            </VStack>
          </DrawerBody>
          
          <DrawerFooter>
            <Text w="100%">Copyright</Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavMenu
