import {
  Box,
  Heading,
  List,
  ListItem,
  Image,
  Fade,
  Flex,
} from "@chakra-ui/react";
import { ArrowRightCircle } from "react-feather";
import { useState } from "react";

import Icon01 from "../images/icon01.png";
import Icon02 from "../images/icon02.png";
import Upload from "../images/upload.png";
import Pricing from "../images/pricing.png";
import Review from "../images/review.png";
import Manage from "../images/manage.png";

const Steps = () => {
  const [activeStep, setActiveStep] = useState(1);

  const images = [Icon01, Icon02, Upload, Pricing, Review, Manage];

  const handleClick = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className="steps" p={{ base: "0", lg: "120" }} bg="white">
      <Box className="container"  >
        <Flex className="row" gap={20} >
          <Box
            className="col-md-6"
            flex={1}
            bg="#0D6EFD"
            borderRadius={{ base: "0", lg: "md" }}
            p={6}
            minW={{ base: "full", lg: "400px" }}
          >
            <Box
              className="steps-list"
              bg="primary"
              color="white"
              p={4}
              borderRadius="md"
            >
              <Heading mb={4}>
                Six quick steps, and your home can be live on 1OBA property
                marketplace.
              </Heading>
              <List styleType="none">
                {[
                  "Create an account",
                  "Add property details",
                  "Upload photos",
                  "Set pricing",
                  "Review and publish",
                  "Manage your listing",
                ].map((step, index) => (
                  <ListItem
                    className={`step-item ${
                      activeStep === index + 1 ? "active" : ""
                    }`}
                    data-step={index + 1}
                    onClick={() => handleClick(index + 1)}
                  >
                    <Flex p={2} gap={2} width={{ base: "full", lg: "auto" }}>
                      <ArrowRightCircle /> Step {index + 1}: {step}
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Box className="col-md-6" flex={1}>
            <Box className="steps-images">
              {images.map(
                (image, index) =>
                  activeStep === index + 1 && (
                    <Image
                      display={{ base: "none", lg: "block" }}
                      src={image}
                      className="img-fluid step-image transition-opacity"
                      alt={`Step ${index + 1}`}
                      style={{ transition: "opacity 500ms" }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = 0.5)
                      }
                    />
                  )
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Steps;
