import React, { useEffect, useState } from "react";
import { getProperties } from "../api/propertyApi";
import {
  Box,
  Flex,
  Image,
  Badge,
  Button,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { MapPin } from "react-feather";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProperties();
      setProperties(result.data);
    };
    fetchData();
  }, []);

  const boxBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box as="section" py={120} px={{ base: 12, lg: 120 }} bg={"#f8f9fa"}>
      <Heading mb={12} textAlign="center" color={"gray.800"}>
        Flats and Houses to Rent and Buy details
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {properties.map((property) => (
          <GridItem key={property._id}>
            <Box
              bg={"white"}
              color={"gray.800"}
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              p={5}
              d="flex"
              flexDirection="column"
              justifyContent="space-between" // Ensures that the button aligns to the bottom
            >
              <Image
                src={property.imageURL || "https://via.placeholder.com/150"}
                alt={`Picture of ${property.title}`}
                roundedTop="lg"
                w="full"
                h="200px"
              />
              <Box py={4}>
                <Flex alignItems="center" mb={2} gap={2}>
                  <MapPin size="16" />
                  <Text fontWeight="bold" isTruncated>
                    {property.location}
                  </Text>
                </Flex>
                <Text fontSize="xl" fontWeight="semibold" mb={2} isTruncated>
                  {property.title}
                </Text>
                <Text mb={2} isTruncated>
                  {property.description}
                </Text>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontWeight="bold">
                    £{new Intl.NumberFormat("en-GB").format(property.price)}
                  </Text>
                  <Badge colorScheme="green">
                    {property.numberOfRooms} Rooms
                  </Badge>
                </Flex>
              </Box>
              <Button colorScheme="blue" mt={4} alignSelf="center">
                See Details
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default PropertyList;
