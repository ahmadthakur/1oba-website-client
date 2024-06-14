import {
  Box,
  Heading,
  Text,
  Icon,
  VStack,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import {
  ArrowRightCircle,
  DollarSign,
  MessageCircle,
  Book,
} from "react-feather";

const gridItems = [
  {
    icon: ArrowRightCircle,
    heading: "You're in control",
    text: "Take charge of how your home is presented to buyers. Stay in control of every aspect of the selling process.",
  },
  {
    icon: DollarSign,
    heading: "Save thousands",
    text: "Avoid high commission fees and wasted time. Our smart tools ensure a cost-effective selling journey.",
  },
  {
    icon: MessageCircle,
    heading: "24/7 messaging",
    text: "Stay connected with buyers instantly. Our secure messaging and viewing features keep conversations going.",
  },
  {
    icon: Book,
    heading: "Knowledge centre",
    text: "Access helpful guides and reminders to make your home market-ready efficiently.",
  },
];

export default function Features() {
  return (
    <Box as="section" className="features" bg="#f8f9fa" py={120} color="black" px={8}>
      <Flex className="container" alignItems="center" flexDirection="column">
        <VStack align="center" mb="5">
          <Heading as="h1" mb="4" textAlign={"center"}>
            Discover a better way to sell your home
          </Heading>
          <Text color="gray.600" textAlign={"center"}>
            Explore how our innovative solutions can make your selling
            experience smooth and efficient.
          </Text>
        </VStack>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          px={{ base: 2, md: 8 }}
          mt={12}
          gap={6}
        >
          {gridItems.map((item, index) => (
            <GridItem key={index}>
              <Box>
                <VStack
                  bg="white"
                  boxShadow="lg"
                  p="4"
                  align="center"
                  borderRadius="md"
                  transition="transform 0.2s"
                  _hover={{ transform: "translateY(-5px)" }}
                >
                  <Flex
                    direction="column"
                    justifyContent="space-between"
                    width={{base: "300px", md: "280px"}}
                    height="280px"
                    textAlign="center"
                    alignItems="center"
                    p={6}
                  >
                    <Icon as={item.icon} boxSize={10} mb="3" color="blue.500" />
                    <Heading as="h4"size="md">{item.heading}</Heading>
                    <Text color="gray.600">{item.text}</Text>
                  </Flex>
                </VStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
