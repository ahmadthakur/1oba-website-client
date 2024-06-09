import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

const faqItems = [
  {
    question: "Do you provide any free plan?",
    answer:
      "Lorem ipsum dolor sit amet, to the consectetur adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.",
  },
  {
    question: "How to claim your 25% discount offer?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique dui non quam aliquet feugiat. Integer ac magna suscipit, venenatis orci ut, tempus lorem.",
  },
  {
    question: "What’s your refund policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique dui non quam aliquet feugiat. Integer ac magna suscipit, venenatis orci ut, tempus lorem.",
  },
  {
    question: "How to get support for the product?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique dui non quam aliquet feugiat. Integer ac magna suscipit, venenatis orci ut, tempus lorem.",
  },
];

function FAQ() {
  return (
    <Container
      maxW="100%"
      className="faq-section"
      centerContent
      bg="white"
      color={"gray.800"}
      py={120}
    >
      <Box textAlign="center" mb="6">
        <Text
          mb={8}
          fontSize="lg"
          fontWeight={"600"}
          className="faq-subheader"
          color="blue"
        >
          Have any Questions?
        </Text>
        <Heading className="faq-header">Frequently Asked Questions</Heading>
      </Box>
      <Box width={{ base: "100%", lg: "800px" }}>
        <Accordion defaultIndex={[0]} allowMultiple>
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              border="1px solid"
              borderColor="gray.200"
              borderRadius={8}
              mb={2}
            >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="600">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Container>
  );
}

export default FAQ;
