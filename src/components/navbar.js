import { Link } from "react-router-dom";
import { useShop } from "hook/useShop";
import { Badge, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { MdMenu, MdShoppingBasket } from "react-icons/md";

const NavBar = () => {
  const { checkout, openCart, openMenu } = useShop();

  return (
    <Flex
      backgroundColor="#FFA8E2"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      p="2rem"
    >
      <Icon
        fill="white"
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
      ></Icon>
      <Link to="/">
        <Text w={100} h={100}>
          Logo
        </Text>
      </Link>
      <Box>
        <Icon
          fill="white"
          cursor="pointer"
          as={MdShoppingBasket}
          w={30}
          h={30}
          onClick={() => openCart()}
        />
        <Badge backgroundColor="#FF38BD" borderRadius="50%">
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
