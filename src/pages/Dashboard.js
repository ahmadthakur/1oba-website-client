import React, { useContext } from "react";
import { Box, Heading, Text, Button, Flex, Avatar, Spacer } from "@chakra-ui/react";
import PropertyForm from "../components/PropertyForm";
import PropertyList from "../components/PropertyList";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <Box p={5}>
      <Flex mb={5}>
        <Box p="2">
          <Heading size="lg">Dashboard</Heading>
        </Box>
        <Spacer />
        <Box>
          <Avatar name={`${user?.fName} ${user?.lName}`} />
          <Text fontSize="md">
            Welcome, {user ? `${user.fName} ${user.lName}` : "Guest"}!
          </Text>
        </Box>
      </Flex>
      {user && user.role === "seller" && (
        <Box mb={5}>
          <Heading size="md" mb={3}>
            Add a New Property
          </Heading>
          <PropertyForm />
        </Box>
      )}
      <Box>
        <Heading size="md" mb={3}>
          Your Properties
        </Heading>
        <PropertyList />
      </Box>
    </Box>
  );
};

export default Dashboard;