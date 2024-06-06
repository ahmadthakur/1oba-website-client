"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Heading,
} from "@chakra-ui/react";

import logo from "../images/logo-g.png";
import { Mail } from "react-feather";

const Logo = () => {
  return <Image src={logo} alt="Logo" maxWidth={"200px"} />;
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Box align={"flex-start"} p={8} mb={8} borderRadius={12} background="linear-gradient(to right, #667DE8, #754DA5)">
          <Heading mb={2}>Stay up to date</Heading>
          <Stack direction={"row"}>
            <Input
              placeholder={"Your email address"}
              bg="white"
              color="black"
              border={0}
            />
            <IconButton
              bg={useColorModeValue("blue.400", "blue.800")}
              color={useColorModeValue("white", "gray.800")}
              _hover={{
                bg: "blue.600",
              }}
              aria-label="Subscribe"
              icon={<Mail />}
            />
          </Stack>
        </Box>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>© 2024 1OBA. All rights reserved</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading>Office Address</Heading>
            <Box as="a" href={"#"}>
              Head office:
            </Box>
            <Box as="a" href={"#"}>
              2118 Thornridge Cir. Syracuse Connecticut 35624
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading>Contact Information</Heading>
            <Box as="a" href={"#"}>
              Hotline
            </Box>
            <Box as="a" href={"#"}>
              Email
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading>Our Company</Heading>
            <Box as="a" href={"#"}>
              Property For Sale
            </Box>
            <Box as="a" href={"#"}>
              Property For Rent
            </Box>
            <Box as="a" href={"#"}>
              About Us
            </Box>
            <Box as="a" href={"#"}>
              Our Agents
            </Box>
            <Box as="a" href={"#"}>
              Our Agency
            </Box>
            <Box as="a" href={"#"}>
              Contact Us
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
