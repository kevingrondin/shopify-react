import {
  Button,
  Box,
  CloseIcon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useShop } from "hook/useShop";

const Cart = () => {
  const { isCartOpen, checkout, closeCart, removeLineItem  } = useShop();

  return (
    <Drawer isOpen={isCartOpen} placement="right" onClose={closeCart} size="smadl">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems ?
              checkout.lineItems.map((item) => (
                <Grid templateColumns="repeat(4, 1fr)" gap={1} keys={item.id}>
                  <Flex alignItems="center" justifyContent="center">
                    <CloseIcon cursor="pointer" onClick={() => removeLineItem()} />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Image src={item.variant.image.src} />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.title}</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.variant.price}</Text>
                  </Flex>
                </Grid>
              )) :
              <Box h="100%" w="100%">
                <Text h="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center">

                </Text>
              </Box>
            }
          </DrawerBody>

          { checkout.lineItems?.length ?
          <DrawerFooter>
            <Button w="100%">
              <Link w="100%" href={checkout.webUrl}>
                Checkout
              </Link>
            </Button>
          </DrawerFooter>
          : <></>
          }
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Cart;
