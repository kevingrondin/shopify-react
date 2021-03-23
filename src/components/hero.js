import { Button, Box, Center, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box backgroundColor="#FFA8E2" w="100%" position="relative">
      <Image
        src=""
        h="100%"
        m="auto"
        objectFit="contain"
        objectPosition={["top", "center"]}
      />
      <Text
        position="absolute"
        bottom="20%"
        w="100%"
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="4rem"
      >
        TITLE
      </Text>
      <Center>
        <Button
          w="10rem"
          backgroundColor="#FF38BD"
          color="white"
          _hover={{ opacity: "70%" }}
          position="absolute"
          bottom="10%"
        >
          Shop Now
        </Button>
      </Center>
    </Box>
  );
};

export default Hero;
