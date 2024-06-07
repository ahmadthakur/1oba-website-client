import {
  Box,
  Heading,
  List,
  ListItem,
  Image,
  Fade,
  Flex,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
    <Box className="steps" p="120" bg="white">
      <Box className="container">
        <Flex className="row" gap={20}>
          <Box className="col-md-6" flex={1} bg="#0D6EFD" borderRadius={12} p={6}>
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
                    <ArrowRightIcon /> Step {index + 1}: {step}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Box className="col-md-6"flex={1}>
            <Box className="steps-images">
              <TransitionGroup>
                {images.map(
                  (image, index) =>
                    activeStep === index + 1 && (
                      <CSSTransition
                        key={index}
                        timeout={500}
                        classNames={{
                          enter: "",
                          enterActive: "",
                          exit: "",
                          exitActive: "",
                        }}
                        onEnter={(node) => {
                          node.style.opacity = 0;
                          setTimeout(() => {
                            node.style.transition = "opacity 500ms";
                            node.style.opacity = 1;
                          }, 0);
                        }}
                        onExit={(node) => {
                          node.style.transition = "opacity 500ms";
                          node.style.opacity = 0;
                        }}
                      >
                        <Image
                          src={image}
                          className="img-fluid step-image"
                          alt={`Step ${index + 1}`}
                        />
                      </CSSTransition>
                    )
                )}
              </TransitionGroup>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Steps;
