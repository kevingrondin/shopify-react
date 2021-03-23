import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useShop } from "hook/useShop";
import { Box, Grid, Text, Image } from '@chakra-ui/react'
import Hero from "components/hero";
import RichText from "components/richText";

const Home = () => {
  const { fetchAllProducts, products } = useShop();

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Box>
      <Hero />
      <RichText 
        heading= "Second Titre"
        text="description"
      />
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map(({id, images, handle, title, variants}) => (
          <Link 
            to={`/products/${handle}`} 
            key={id}
          >  
            <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
              <Image src={images[0].src} />
              <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
                {title}
              </Text>
              <Text position="absolute" bottom="5%" w="100%" color="gray.500">
                {variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
