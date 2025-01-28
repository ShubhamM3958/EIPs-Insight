import {Box, Center, Heading, Image, Stack, Text} from "@chakra-ui/react";

const About = () => {
    return (
        <Center>
            <Box as="section" py={12} px={6}>
                <Stack direction={"column"} alignItems={"center"} gap={3}>
                    <Heading as="h2" textAlign="center" size={{base: "lg", md: "xl", large: "2xl"}} fontWeight="normal">
                        Introducing EIPsInsight: Your Ethereum Guide
                    </Heading>
                    <Text
                        mt={2}
                        color={"gray.600"}
                        fontSize={{base: "medium", md: "large"}}
                        align={"center"}
                        width={{md: "80%", lg: "65%"}}
                    >
                        EIPsInsight is specialized in toolings designed to provide clear, visual insights into the
                        activity of Ethereum Improvement Proposal (EIP), Ethereum Request for Comments (ERCs), and
                        Rollup Improvement Proposals (RIPs), over a specified period. Data provided is used for tracking
                        the progress and workload distribution among EIP Editors, ensuring transparency and efficiency
                        in the proposal review process.
                    </Text>
                </Stack>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="50%"
                    mx="auto"
                    mt="50px"
                    borderRadius="40px"
                    overflow="hidden"
                    borderWidth="2px"
                    borderColor="gray.200"
                >
                    <Image
                        src="/video_thumb.png"
                        alt="Dashboard"
                        objectFit="cover"
                        width="100%"
                        height="auto"
                    />
                </Box>

            </Box>
        </Center>
    );
}

export default About;