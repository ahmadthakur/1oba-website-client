import React, { useContext, useEffect } from "react";
import {
  Center,
  Box,
  Heading,
  Text,
  Flex,
  Avatar,
  Spacer,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropertyForm from "../components/PropertyForm";
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
        setUser(data); // Assuming the API returns the user data directly
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [setUser]); // Fixed dependency to setUser to ensure useEffect runs only once

  return (
    <Flex direction="column" align="center">
      <Box p="2">
        <Heading size="lg">Dashboard</Heading>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="md">
        <Box>
          <Avatar name={`${user?.fName} ${user?.lName}`} />
          <Text fontSize="md">
            Welcome, {user ? `${user.fName} ${user.lName}` : "Guest"}!
          </Text>
        </Box>
        <Box>
          <Heading size="md" mb={3} textAlign="center">
            User Information
          </Heading>
          <VStack align="start" spacing={3}>
            <Text>First Name: {user?.fName}</Text>
            <Text>Last Name: {user?.lName}</Text>
            <Text>Address: {user?.address}</Text>
            <Text>Phone Number: {user?.phoneNumber}</Text>
            <Text>Email: {user?.email}</Text>
            {/* Additional user data fields can be displayed here */}
          </VStack>
        </Box>
      </Box>
      <Box p={5}>
        <Flex mb={5}>
          <Spacer />
        </Flex>
        <Link to="/property-form">
          <Button colorScheme="teal">Add New Property</Button>
        </Link>
        <Box>
          <Heading size="md" mb={3}>
            Your Properties
          </Heading>
          <PropertyList />
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
