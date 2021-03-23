import { Link } from "react-router-dom";
import { Grid, Box, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#FFA8E2">
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        color="white"
        fontWeight="bold"
      >
        <p>image</p>
        <VStack p="2rem">
          <Link to="/">The Green Blast</Link>
          <Link to="/">The Blue Berry</Link>
          <Link to="/">The Yellow Mellow</Link>
        </VStack>
        <VStack p="2rem">
          <Link to="/">About Us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Sustainability</Link>
        </VStack>
      </Grid>
      <Box>
        <Text
          textAlign="center"
          color="white"
          w="100%"
          borderTop="1px solid white"
        >
          Copyright
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
