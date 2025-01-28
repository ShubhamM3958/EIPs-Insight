import {Box, Button, Center, Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {FaPlus, FaRegBookmark} from "react-icons/fa";

const HeroSection = () => {
    return (
        <Box
            py={10}
            px={6}
            textAlign="center"
        >
            <Center>
                <Flex
                    py={1}
                    px={1.5}
                    borderRadius="full"
                    align="center"
                    borderColor="gray.200"
                    bg="#f1f4f9"
                    borderWidth={2}
                >
                    <Text fontSize="sm" fontWeight="normal">
                        One Kit, Endless
                    </Text>
                    <Box mx={1}/>
                    <Flex align="center" bg={"blue.100"} borderRadius={"full"} px={1.5}>
                        <Box
                            as="span"
                            fontSize="lg"
                            role="img"
                            aria-label="confetti"
                            color="blue.600"
                        >
                            🎉
                        </Box>
                        <Text fontSize="sm" fontWeight="bold" color="blue.600" ml={1}>
                            Possibilities
                        </Text>
                    </Flex>
                </Flex>
            </Center>

            <Heading
                as="h1"
                fontSize={{base: "2xl", md: "5xl", lg: "7xl"}}
                mt={4}
                fontWeight="normal"
                color={"gray.800"}
            >
                Ethereum Improvement <br/>Proposal Insight
            </Heading>
            <Center mt={4}>
                <Box w="full" maxW={{base: "200px", md: "300px"}} h="30px" color="blue.100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 30"
                        preserveAspectRatio="none"
                        fill="none"
                    >
                        <path
                            d="M0,15 Q25,0 50,15 T100,15 T150,15 T200,15 T250,15 T300,15"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </Box>
            </Center>

            <Text
                mt={2}
                color={"gray.600"}
                fontSize={{base: "1xl", md: "2xl", lg: "3xl"}}
                fontWeight="medium"
            >
                Track EIPs, ERCs, and RIPs effortlessly with our tooling,<br/> designed for
                clarity and efficiency.
            </Text>

            <Stack
                mt={6}
                direction={{base: "column", sm: "row"}}
                spacing={{base: 2, md: 4}}
                justify="center"
            >
                <Button
                    leftIcon={<FaPlus/>}
                    colorScheme="blue"
                    variant="solid"
                    px={6}
                    borderRadius="full"
                >
                    <a href="/dashboard">Dashboard</a>

                </Button>
                <Button
                    leftIcon={<FaRegBookmark/>}
                    colorScheme="blue"
                    variant="outline"
                    px={6}
                    borderRadius="full"
                >
                    January Insight
                </Button>
            </Stack>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={{base: "90%", md: "80%"}}
                mx="auto"
                mt="50px"
                borderRadius="40px"
                borderWidth="7px"
                borderColor="gray.200"
                overflow="hidden"
            >
                <Image
                    src="/img.png"
                    alt="Dashboard"
                    objectFit="cover"
                    width="100%"
                    height="auto"
                />
            </Box>

        </Box>
    );
}
export default HeroSection;