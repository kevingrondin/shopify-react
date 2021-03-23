import { Box, Button, Flex, Image, Text, Heading } from "@chakra-ui/react";

const ImageWithText = ({ image, reverse, heading, text }) => {
  const reverseSection = reverse ? "row-reverse" : "row";
  return (
    <Box>
      <Flex flexDir={["column", reverseSection]} w="100%">
        <Image src={image} objectFit="cover" w={["100%", "50%"]} />
        <Flex
          w={["100%", "50%"]}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
        >
          <Heading>
            {heading && heading}
          </Heading>
          <Text>
            {text && text}
          </Text>
          <Button
            w="10rem"
            backgroundColor="#FF38BD"
            color="white"
            _hover={{ opacity: '70%'}}
          >
            By Now
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageWithText;
