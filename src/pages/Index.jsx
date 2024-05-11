import { Container, Text, VStack, Heading, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor} color={textColor}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          Discord Bot Dashboard
        </Heading>
        <Text fontSize="xl">Manage and interact with your Discord bot directly from this dashboard.</Text>
        <Button leftIcon={<FaDiscord />} colorScheme="blue" onClick={toggleColorMode}>
          Connect to Discord
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
