import React, { useEffect, useState } from "react";
import { getProperties, deleteProperty } from "../api/propertyApi";
import {
  Box,
  Flex,
  Image,
  Badge,
  useColorModeValue,
  Button,
  Icon,
  Text,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { MapPin } from "react-feather";

const PropertyList = (list) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProperties();
      setProperties(result.data);
    };
    fetchData();
  }, []);

  var propertiesList = [];

  if (list.length === 0) {
    propertiesList = list;
  } else {
    propertiesList = properties;
  }

  const boxBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box as="section" className="features" py={120} px={60}>
      <Flex className="container" flexDirection="column">
        <Grid
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gap={6}
          justifyContent="center"
          alignItems="center"
        >
          {propertiesList.map((property) => (
            <GridItem key={property._id}>
              <Box
                bg={boxBgColor}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                m={5}
                p={6}
              >
                <Image
                  src={property.imageURL || "https://via.placeholder.com/150"}
                  alt={`Picture of ${property.title}`}
                  roundedTop="lg"
                />
                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      colorScheme="teal"
                    >
                      <MapPin />
                      {property.location}
                    </Badge>
                  </Box>
                  <Flex
                    mt="1"
                    justifyContent="space-between"
                    alignContent="center"
                  >
                    <Box
                      fontSize="2xl"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      {property.title}
                    </Box>
                  </Flex>
                  <Text mt={2}>{property.description}</Text>
                  <Flex
                    justifyContent="space-between"
                    alignContent="center"
                    mt={3}
                  >
                    <Text fontSize="xl" fontWeight="bold">
                      £{property.price}
                    </Text>
                    <Badge rounded="full" px="2" colorScheme="green">
                      {property.numberOfRooms} Rooms
                    </Badge>
                  </Flex>
                  <Button colorScheme="blue" mt={4}>
                    See Details
                  </Button>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default PropertyList;
