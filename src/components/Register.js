import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  useToast,
  Select,
} from "@chakra-ui/react";
import logo from "../images/logo-f.png";
import { Form } from "react-router-dom";

export default function Register() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const { register } = useContext(UserContext);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(fName, lName, email, password, role);
      toast({
        title: "Registered",
        description: "You have successfully registered.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: err.message,
        status: "error",
        duration: 3000,
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
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Stack align={"center"}>
                <Image src={logo} alt="Logo" maxWidth={"200px"} />
                <Text fontSize={"lg"}>Create your account</Text>
              </Stack>
              <Flex gap={2}>
                <FormControl id="fName" flex={1}>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                    placeholder="First Name"
                    required
                  />
                </FormControl>
                <FormControl id="lName" flex={1}>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                    placeholder="Last Name"
                    required
                  />
                </FormControl>
              </Flex>
              <FormControl id="address">
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  required
                />
              </FormControl>
              <Flex gap={2}>
                  <FormControl id="phoneNumber">
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone Number"
                      required
                    />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </FormControl>
              </Flex>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </FormControl>
              <FormControl id="role">
                <FormLabel>Role</FormLabel>
                <Select
                  placeholder="Select role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </Select>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Register
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
