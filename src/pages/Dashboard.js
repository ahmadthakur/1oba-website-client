import React, { useContext, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Avatar,
  VStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropertyList from "../components/PropertyList";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const jwtToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/users/profile`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${jwtToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [setUser]);

  const bgColor = useColorModeValue("gray.50", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex direction="column" align="center" mt={10} mb={60}>
      <Heading size="xl" mb={6}>Dashboard</Heading>
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        width="full"
        maxW="md"
        bg={bgColor}
        borderColor={borderColor}
      >
        <Flex direction="column" align="center" mb={5}>
          <Avatar name={`${user?.fName} ${user?.lName}`} size="xl" mb={3} />
          <Text fontSize="xl" fontWeight="bold">
            Welcome, {user ? `${user.fName} ${user.lName}` : "Guest"}!
          </Text>
        </Flex>
        <VStack align="stretch" spacing={4}>
          <Text>First Name: {user?.fName}</Text>
          <Text>Last Name: {user?.lName}</Text>
          <Text>Address: {user?.address}</Text>
          <Text>Phone Number: {user?.phoneNumber}</Text>
          <Text>Email: {user?.email}</Text>
        </VStack>
      </Box>
      <Box mt={6} width="full" maxW="md">
        <Link to="/property-form">
          <Button colorScheme="teal" width="full" size="lg">Add New Property</Button>
        </Link>
      </Box>
      
    </Flex>
  );
};

export default Dashboard;