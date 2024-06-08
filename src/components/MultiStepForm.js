import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
  HStack,
  Flex,
  useToast,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

const MultiStepForm = () => {
  const toast = useToast();
  const { register } = useContext(UserContext);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
    hasMortgageOffer: "No",
    purchasePriceRange: "",
    propertyType: "House",
    bedrooms: "1",
    parking: "Residential street",
    preferredLocation: "",
    budgetRange: "",
    moveInDate: "",
    propertyCondition: "Any",
    tenure: "Freehold",
    propertyFeatures: "",
    additionalRequirements: "",
    heardAboutUs: "Website",
    currentlyRenting: "No",
    workingWithAgent: "No",
    needMortgageAssistance: "No",
    interestedInNewBuild: "No",
    preferencesForSchools: "No",
    considerRenovation: "No",
    openToViewingOutsideArea: "No",
    accessibilityRequirements: "No",
    viewingAvailability: "Weekdays",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
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

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const steps = [
    <Step1
      formData={formData}
      handleChange={handleChange}
      nextStep={nextStep}
    />,
    <Step2
      formData={formData}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <Step3
      formData={formData}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <Step4
      formData={formData}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <Step5
      formData={formData}
      handleChange={handleChange}
      prevStep={prevStep}
      handleSubmit={handleSubmit}
    />,
  ];

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
          <Heading as="h1" mb={6}>
            Register
          </Heading>
          {steps[step - 1]}
        </Box>
      </Stack>
    </Flex>
  );
};

const Step1 = ({ formData, handleChange, nextStep }) => (
  <VStack as="form" spacing={4}>
    <Flex gap={4}>
      <FormControl id="fName" isRequired>
        <FormLabel>First Name</FormLabel>
        <Input
          name="fName"
          value={formData.fName}
          onChange={handleChange}
          placeholder="First Name"
        />
      </FormControl>
      <FormControl id="lName" isRequired>
        <FormLabel>Last Name</FormLabel>
        <Input
          name="lName"
          value={formData.lName}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </FormControl>
    </Flex>
    <FormControl id="address" isRequired>
      <FormLabel>Address</FormLabel>
      <Input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />
    </FormControl>
    <FormControl id="phoneNumber" isRequired>
      <FormLabel>Phone Number</FormLabel>
      <Input
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />
    </FormControl>
    <FormControl id="email" isRequired>
      <FormLabel>Email Address</FormLabel>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
      />
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
    </FormControl>
    <FormControl id="hasMortgageOffer" isRequired>
      <FormLabel>Do you currently have a mortgage offer?</FormLabel>
      <Select
        name="hasMortgageOffer"
        value={formData.hasMortgageOffer}
        onChange={handleChange}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Select>
    </FormControl>
    <Button colorScheme="teal" onClick={nextStep} width="full">
      Next
    </Button>
  </VStack>
);

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => (
  <VStack as="form" spacing={4}>
    <FormControl id="purchasePriceRange" isRequired>
      <FormLabel>Purchase Price Range (£)</FormLabel>
      <Input
        name="purchasePriceRange"
        value={formData.purchasePriceRange}
        onChange={handleChange}
        placeholder="Purchase Price Range (£)"
      />
    </FormControl>
    <FormControl id="propertyType" isRequired>
      <FormLabel>Type of Property</FormLabel>
      <Select
        name="propertyType"
        value={formData.propertyType}
        onChange={handleChange}
      >
        <option value="House">House</option>
        <option value="Flat">Flat</option>
        <option value="Maisonette">Maisonette</option>
        <option value="Other">Other</option>
      </Select>
    </FormControl>
    <FormControl id="bedrooms" isRequired>
      <FormLabel>Number of Bedrooms</FormLabel>
      <Select name="bedrooms" value={formData.bedrooms} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5+">5+</option>
      </Select>
    </FormControl>
    <FormControl id="parking" isRequired>
      <FormLabel>Parking</FormLabel>
      <Select name="parking" value={formData.parking} onChange={handleChange}>
        <option value="Residential street">Residential street</option>
        <option value="Allocated parking bay">Allocated parking bay</option>
        <option value="None">None</option>
      </Select>
    </FormControl>
    <FormControl id="preferredLocation" isRequired>
      <FormLabel>Preferred Location/Area</FormLabel>
      <Input
        name="preferredLocation"
        value={formData.preferredLocation}
        onChange={handleChange}
        placeholder="Preferred Location/Area"
      />
    </FormControl>
    <HStack width="100%" justifyContent="space-between">
      <Button onClick={prevStep} width="full">
        Back
      </Button>
      <Button colorScheme="teal" onClick={nextStep} width="full">
        Next
      </Button>
    </HStack>
  </VStack>
);

const Step3 = ({ formData, handleChange, nextStep, prevStep }) => (
  <VStack as="form" spacing={4}>
    <FormControl id="budgetRange" isRequired>
      <FormLabel>Budget Range (£)</FormLabel>
      <Input
        name="budgetRange"
        value={formData.budgetRange}
        onChange={handleChange}
        placeholder="Budget Range (£)"
      />
    </FormControl>
    <FormControl id="moveInDate" isRequired>
      <FormLabel>Preferred Move-in Date</FormLabel>
      <Input
        type="date"
        name="moveInDate"
        value={formData.moveInDate}
        onChange={handleChange}
        placeholder="Preferred Move-in Date"
      />
    </FormControl>
    <FormControl id="propertyCondition" isRequired>
      <FormLabel>Preferred Property Condition</FormLabel>
      <Select
        name="propertyCondition"
        value={formData.propertyCondition}
        onChange={handleChange}
      >
        <option value="New build">New build</option>
        <option value="Renovated">Renovated</option>
        <option value="Any">Any</option>
      </Select>
    </FormControl>
    <FormControl id="tenure" isRequired>
      <FormLabel>Preferred Tenure</FormLabel>
      <Select name="tenure" value={formData.tenure} onChange={handleChange}>
        <option value="Freehold">Freehold</option>
        <option value="Leasehold">Leasehold</option>
      </Select>
    </FormControl>
    <FormControl id="propertyFeatures" isRequired>
      <FormLabel>Preferred Property Features</FormLabel>
      <Select
        name="propertyFeatures"
        value={formData.propertyFeatures}
        onChange={handleChange}
      >
        <option value="Balcony">Balcony</option>
        <option value="Garden">Garden</option>
        <option value="Other">Other</option>
      </Select>
    </FormControl>
    <HStack width="100%" justifyContent="space-between">
      <Button onClick={prevStep} width="full">
        Back
      </Button>
      <Button colorScheme="teal" onClick={nextStep} width="full">
        Next
      </Button>
    </HStack>
  </VStack>
);

const Step4 = ({ formData, handleChange, nextStep, prevStep }) => (
  <VStack as="form" spacing={4}>
    <FormControl id="needMortgageAssistance" isRequired>
      <FormLabel>Do you require assistance with mortgage financing?</FormLabel>
      <Select
        name="needMortgageAssistance"
        value={formData.needMortgageAssistance}
        onChange={handleChange}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Select>
    </FormControl>
    <FormControl id="interestedInNewBuild" isRequired>
      <FormLabel>Are you interested in new-build properties?</FormLabel>
      <Select
        name="interestedInNewBuild"
        value={formData.interestedInNewBuild}
        onChange={handleChange}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Select>
    </FormControl>
    <FormControl id="preferencesForSchools" isRequired>
      <FormLabel>
        Do you have any specific preferences for schools or amenities nearby?
      </FormLabel>
      <Select
        name="preferencesForSchools"
        value={formData.preferencesForSchools}
        onChange={handleChange}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Select>
    </FormControl>
    <FormControl id="considerRenovation" isRequired>
      <FormLabel>Would you consider properties requiring renovation?</FormLabel>
      <Select
        name="considerRenovation"
        value={formData.considerRenovation}
        onChange={handleChange}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Select>
    </FormControl>
    <FormControl id="openToViewingOutsideArea" isRequired>
      <FormLabel>
        Are you open to viewing properties outside your preferred area?
      </FormLabel>
      <Select
        name="openToViewingOutsideArea"
        value={formData.openToViewingOutsideArea}
        onChange={handleChange}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Select>
    </FormControl>
    <FormControl id="accessibilityRequirements" isRequired>
      <FormLabel>
        Do you have any specific accessibility requirements?
      </FormLabel>
      <Select
        name="accessibilityRequirements"
        value={formData.accessibilityRequirements}
        onChange={handleChange}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Select>
    </FormControl>
    <FormControl id="viewingAvailability" isRequired>
      <FormLabel>Preferred Viewing Availability</FormLabel>
      <Select
        name="viewingAvailability"
        value={formData.viewingAvailability}
        onChange={handleChange}
      >
        <option value="Weekdays">Weekdays</option>
        <option value="Evenings">Evenings</option>
        <option value="Weekends">Weekends</option>
      </Select>
    </FormControl>
    <HStack width="100%" justifyContent="space-between">
      <Button onClick={prevStep} width="full">
        Back
      </Button>
      <Button colorScheme="teal" onClick={nextStep} width="full">
        Next
      </Button>
    </HStack>
  </VStack>
);

const Step5 = ({ formData, handleChange, prevStep, handleSubmit }) => (
  <VStack as="form" spacing={4} onSubmit={handleSubmit}>
    <FormControl id="heardAboutUs" isRequired>
      <FormLabel>How did you hear about us?</FormLabel>
      <Select
        name="heardAboutUs"
        value={formData.heardAboutUs}
        onChange={handleChange}
      >
        <option value="Website">Website</option>
        <option value="Social Media">Social Media</option>
        <option value="Referral">Referral</option>
        <option value="Other">Other</option>
      </Select>
    </FormControl>
    <FormControl id="currentlyRenting" isRequired>
      <FormLabel>Are you currently renting?</FormLabel>
      <Select
        name="currentlyRenting"
        value={formData.currentlyRenting}
        onChange={handleChange}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Select>
    </FormControl>
    <FormControl id="workingWithAgent" isRequired>
      <FormLabel>Are you currently working with an estate agent?</FormLabel>
      <Select
        name="workingWithAgent"
        value={formData.workingWithAgent}
        onChange={handleChange}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Select>
    </FormControl>
    <FormControl id="additionalRequirements" isRequired>
      <FormLabel>Additional Requirements/Comments</FormLabel>
      <Input
        name="additionalRequirements"
        value={formData.additionalRequirements}
        onChange={handleChange}
        placeholder="Additional Requirements/Comments"
      />
    </FormControl>
    <HStack width="100%" justifyContent="space-between">
      <Button onClick={prevStep} width="full">
        Back
      </Button>
      <Button colorScheme="teal" type="submit" width="full">
        Submit
      </Button>
    </HStack>
  </VStack>
);

export default MultiStepForm;
