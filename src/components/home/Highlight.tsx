import {Box, Grid, GridItem, Heading, Icon, Stack, Text} from "@chakra-ui/react";
import {MdAssessment, MdBuild, MdDescription, MdGridOn, MdLeaderboard, MdPersonSearch} from "react-icons/md";

const Highlight = () => {
    const features = [
        {
            title: "Analytics",
            description: "Gain valuable insights through advanced analytics to drive informed decisions and optimize your strategy.",
            icon: MdAssessment,
        },
        {
            title: "Editors Leaderboard",
            description: "Highlight top contributors with the Editors Leaderboard, encouraging active participation and fostering a competitive environment.",
            icon: MdLeaderboard,
        },
        {
            title: "Boards",
            description: "Organize tasks and streamline teamwork with customizable boards that allow smooth collaboration and progress tracking.",
            icon: MdGridOn,
        },
        {
            title: "Search By Author",
            description: "Quickly find content or contributions by specific authors, saving time and enhancing your ability to access relevant information.",
            icon: MdPersonSearch,
        },
        {
            title: "All EIPs",
            description: "Explore all Ethereum Improvement Proposals (EIPs) in one place, keeping you up to date with the latest changes and innovations.",
            icon: MdDescription,
        },
        {
            title: "EIP Proposal Builder",
            description: "Easily create and submit EIP proposals with our intuitive builder, streamlining the proposal process and encouraging contribution.",
            icon: MdBuild,
        },
    ];
    return (
        <Box as="section" py={12} px={6} my={10} bg={"#05070a"} color={"white"}>
            <Stack direction={"column"} alignItems={"center"} gap={3} pt={8}>
                <Heading textAlign="center" as="h2" size="2xl" fontWeight="normal">
                    Highlights
                </Heading>
                <Text
                    mt={2}
                    fontSize={{base: "sm", md: "large"}}
                    align={"center"}
                    width={{md: "80%", lg: "65%"}}
                >
                    Experience unmatched performance, reliability, and innovation. Benefit from seamless efficiency,
                    constant updates, and responsive support, all designed to enhance your productivity and success.
                </Text>
            </Stack>

            <Box p={3} maxW="1200px" mt={4} mx="auto">
                <Grid
                    templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={2}
                >
                    {features.map((feature, index) => (
                        <GridItem
                            key={index}
                            borderRadius="20px"
                            p={6}
                            display="flex"
                            flexDirection="column"
                            alignItems="start"
                            bg={"#0b0e14"}
                            borderColor={"gray.900"}
                            borderWidth={1}
                        >
                            <Box
                                borderRadius="full"
                                p={4}
                                mb={2}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Icon as={feature.icon} boxSize={6}/>
                            </Box>
                            <Heading as="h3" fontSize="lg" mb={2} fontWeight="semibold">
                                {feature.title}
                            </Heading>
                            <Text fontSize="sm" color="gray.600">
                                {feature.description}
                            </Text>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
export default Highlight;
