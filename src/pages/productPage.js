import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "hook/useShop";
import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";

const ProductPage = () => {
  const { handle } = useParams();
  const { addItemToCheckout, fetchProductWithHandle, product } = useShop();

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;

  console.log('re-rendering')

  return (
    <Box p="2rem">
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">
        <Flex justifyContent="center" alignItems="center">
          <Image src={product.images[0].src} />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px="2rem"
        >
          <Heading pb="2rem">{product.title}</Heading>
          <Text pb="2rem">{product.variants[0].price}</Text>
          <Text fontWeight="bold" pb="2rem">{product.variants[0].price}</Text>
          <Text pb="2rem" color="gray.500">{product.description}</Text>
          <Button 
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            _hover={{ opacity: '70%' }}
            w="10rem"
            backgroundColor="#FF38BD"
            color="white"
          >
            Add To Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProductPage;
