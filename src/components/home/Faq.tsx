import React from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';

const Faq = () => {
    const faqs = [
        {
            question: "What is the purpose of this platform?",
            answer: "This platform provides tools and resources to help users efficiently manage and analyze data, collaborate, and stay updated with the latest developments in the field."
        },
        {
            question: "How do I access analytics?",
            answer: "You can access analytics from the main dashboard, where you'll find real-time data visualizations and performance insights."
        },
        {
            question: "How do I contribute to the Editors Leaderboard?",
            answer: "Contributing to the leaderboard involves active participation, where your contributions are tracked and rewarded based on engagement and quality."
        },
        {
            question: "What is an EIP?",
            answer: "An EIP (Ethereum Improvement Proposal) is a design document providing information to the Ethereum community, describing a new feature or improvement for Ethereum."
        },
        {
            question: "Can I build and submit EIP proposals?",
            answer: "Yes, our platform provides an easy-to-use EIP Proposal Builder, allowing users to create and submit their own proposals for review and discussion."
        }
    ];

    return (
        <Box maxW="900px" mx="auto" py={8} px={4}>
            <Stack direction={"column"} alignItems={"center"} gap={3} pt={8} mb={8}>
                <Heading as="h2" size="2xl" fontWeight="normal" textAlign="center">
                    Frequently Asked Questions
                </Heading>
                <Text
                    mt={2}
                    fontSize="large"
                    align={"center"}
                >
                    Answers to common queries about EIPs Insight.
                </Text>
            </Stack>
            <Accordion allowToggle>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} borderStyle={"none"} mb={4} bg={'#f1f4f9'} p={2} borderRadius={20}>
                        <h2>
                            <AccordionButton _hover={{bg: 'transparent'}} _focus={{boxShadow: 'none'}}>
                                <Box flex="1" textAlign="left">
                                    <Text fontSize={"large"}>{faq.question}</Text>
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text>{faq.answer}</Text>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
};

export default Faq;
