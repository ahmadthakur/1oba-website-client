import React, { useState } from "react";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  ButtonGroup,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Input,
  InputGroup,
  VStack,
  HStack,
  Spacer,
  keyframes
} from "@chakra-ui/react";

const backgroundAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(10px, 10px);
  }
`;

export default function Hero() {
  const [showBuy, setShowBuy] = useState(true);

  return (
    <>
      <Container minW={"100vw"} minH={"100vh"}
      bgGradient="linear(135deg, #0a1f33 0%, #667eea 50%, #764ba2 100%)"
      position="relative"
      textAlign="center"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: "-50%",
        left: "-50%",
        width: "200%",
        height: "200%",
        bg: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 10%, transparent 10%)",
        bgSize: "10px 10px",
        animation: `${backgroundAnimation} 5s linear infinite`,
        zIndex: 0,
      }}>
        <VStack
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Box textAlign="center">
            <Heading as="h1" mb="4">
              Find Your Perfect Home for Buy/Rent
            </Heading>
            <ButtonGroup mb="4" isAttached variant="outline">
              <Button
                mr="-px"
                onClick={() => setShowBuy(true)}
                colorScheme={showBuy ? "blue" : undefined}
              >
                Buy Properties
              </Button>
              <Button
                ml="-px"
                onClick={() => setShowBuy(false)}
                colorScheme={!showBuy ? "blue" : undefined}
              >
                Rent Properties
              </Button>
            </ButtonGroup>
            {showBuy ? (
             <Box id="buySearch">
             <HStack spacing={2}>
               <Input placeholder="Location" />
               <Input placeholder="Property Type" />
               <Input placeholder="Min Price" type="number" />
               <Input placeholder="Max Price" type="number" />
               <Button colorScheme="blue" w="full">
                 Search
               </Button>
             </HStack>
           </Box>
           ) : (
           <Box id="rentSearch">
             <HStack spacing={2}>
               <Input placeholder="Location" />
               <Input placeholder="Property Type" />
               <Input placeholder="Min Rent" type="number" />
               <Input placeholder="Max Rent" type="number" />
               <Button colorScheme="blue" w="full">
                 Search
               </Button>
             </HStack>
           </Box>
            )}

            <Text m="8" >
              Explore the best properties available in your preferred locations.
            </Text>
            <Button colorScheme="blue">Get Started</Button>
          </Box>
        </VStack>
      </Container>
    </>
  );
}
