import React, { useState, useContext } from "react";
import { createProperty } from "../api/propertyApi";
import { UserContext } from "../context/UserContext";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Heading,
  Flex,
  Stack,
  Box,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const PropertyForm = () => {
  const [title, setTitle] = useState("");
  const [propertyType, setPropertyType] = useState(""); // Add this line
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const { user } = useContext(UserContext);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  const property = {
    title,
    propertyType: "Other",
    description,
    price,
    location,
    numberOfRooms: "1",
    userId: user.userId,
  };
  try {
    await createProperty(property);
    // Success toast
    toast({
      title: "Property Created",
      description: "Your property has been successfully created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Redirect to dashboard
    navigate("/dashboard");
  } catch (error) {
    // Error toast
    toast({
      title: "Error",
      description: `Failed to create property: ${error.message}`,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w={"500px"}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <Heading>Add a new Property</Heading>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Property Type</FormLabel>
                <Select>
                  <option
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    Other
                  </option>
                  <option
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    House
                  </option>
                  <option
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    Flat
                  </option>
                  <option
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    Maisonette
                  </option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Location</FormLabel>
                <Input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Number of Rooms</FormLabel>
                <Select>
                  <option
                    value={numberOfRooms}
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                  >
                    1
                  </option>
                  <option
                    value={numberOfRooms}
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                  >
                    2
                  </option>
                  <option
                    value={numberOfRooms}
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                  >
                    3
                  </option>
                  <option
                    value={numberOfRooms}
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                  >
                    4
                  </option>
                  <option
                    value={numberOfRooms}
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                  >
                    5+
                  </option>
                </Select>
              </FormControl>
              <Button type="submit" colorScheme="blue">
                Create Property
              </Button>
            </VStack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default PropertyForm;
