import {Box, Flex, Grid, GridItem, Icon, Tag, Text} from "@chakra-ui/react";
import {FiCheckCircle} from "react-icons/fi";
import {IoIosDocument} from "react-icons/io";
import {CiCircleAlert, CiSearch} from "react-icons/ci";
import BarChart from "@components/charts/BarChart";
import {barData, barOptions} from "@/constant/barUtils";

const OverView = () => {
    return (
        <Box mt={5}>
            <Grid
                templateColumns={{base: "1fr", md: "repeat(2, 1fr)", lg: "4fr 5fr"}}
                gap={4}
            >
                <GridItem>
                    <Grid
                        p={4}
                        templateColumns={{base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)"}}
                        gap={2}
                    >
                        <Box
                            borderRadius="lg"
                            shadow="md"
                            overflow="hidden"
                            borderWidth="1px"
                            borderColor="gray.200"
                            minW={"150px"}
                        >
                            <Box
                                p={4}
                                bgGradient="linear(to-r, green.300, green.500)"
                                color="white"
                            >
                                <Icon as={FiCheckCircle} boxSize={6} mb={1}/>
                                <Text fontSize="3xl" fontWeight="extrabold" mb={1}>
                                    4
                                </Text>
                                <Text fontSize="sm" fontWeight="medium">
                                    Final EIPs
                                </Text>
                            </Box>
                            <Box
                                bg="white"
                                p={4}
                                fontSize="md"
                                fontWeight="medium"
                                color="gray.700"
                            >
                                Earned This Month
                            </Box>
                        </Box>
                        <Box
                            borderRadius="lg"
                            shadow="md"
                            overflow="hidden"
                            borderWidth="1px"
                            borderColor="gray.200"
                            minW={"150px"}
                        >
                            <Box
                                p={4}
                                bgGradient="linear(to-r, blue.300, blue.500)"
                                color="white"
                            >
                                <Icon as={IoIosDocument} boxSize={6} mb={1}/>
                                <Text fontSize="3xl" fontWeight="extrabold" mb={1}>
                                    11
                                </Text>
                                <Text fontSize="sm" fontWeight="medium">
                                    Draft EIPs
                                </Text>
                            </Box>
                            <Box
                                bg="white"
                                p={4}
                                fontSize="md"
                                fontWeight="medium"
                                color="gray.700"
                            >
                                Earned This Month
                            </Box>
                        </Box>
                        <Box
                            borderRadius="lg"
                            shadow="md"
                            overflow="hidden"
                            borderWidth="1px"
                            borderColor="gray.200"
                            minW={"150px"}
                        >
                            <Box
                                p={4}
                                bgGradient="linear(to-r, yellow.400, yellow.500)"
                                color="white"
                            >
                                <Icon as={CiSearch} boxSize={6} mb={1}/>
                                <Text fontSize="3xl" fontWeight="extrabold" mb={1}>
                                    7
                                </Text>
                                <Text fontSize="sm" fontWeight="medium">
                                    Review EIPs
                                </Text>
                            </Box>
                            <Box
                                bg="white"
                                p={4}
                                fontSize="md"
                                fontWeight="medium"
                                color="gray.700"
                            >
                                Earned This Month
                            </Box>
                        </Box>
                        <Box
                            borderRadius="lg"
                            shadow="md"
                            overflow="hidden"
                            borderWidth="1px"
                            borderColor="gray.200"
                            minW={"150px"}
                        >
                            <Box
                                p={4}
                                bgGradient="linear(to-r, red.300, red.500)"
                                color="white"
                            >
                                <Icon as={CiCircleAlert} boxSize={6} mb={1}/>
                                <Text fontSize="3xl" fontWeight="extrabold" mb={1}>
                                    10
                                </Text>
                                <Text fontSize="sm" fontWeight="medium">
                                    Stagnant EIPs
                                </Text>
                            </Box>
                            <Box
                                bg="white"
                                p={4}
                                fontSize="md"
                                fontWeight="medium"
                                color="gray.700"
                            >
                                Earned This Month
                            </Box>
                        </Box>
                    </Grid>
                </GridItem>
                <GridItem>
                    <Box h="100%" p={4} borderRadius="lg" shadow="lg" bg="white" maxW={{base: "95vw", md: "50vw"}}>
                        <Flex alignItems="center" gap={2}>
                            <Text fontSize="xl" fontWeight="bold">
                                All EIPs
                            </Text>
                            <Tag variant="solid" rounded="full" colorScheme="blue" px={3}>
                                918
                            </Tag>
                        </Flex>
                        <BarChart data={barData} options={barOptions}/>
                    </Box>
                </GridItem>
            </Grid>

        </Box>
    );
}
export default OverView;