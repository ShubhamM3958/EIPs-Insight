import {Box, Button, Flex, Grid, GridItem, Tag, Text} from "@chakra-ui/react";
import {Doughnut} from "react-chartjs-2";
import {doughnutData, doughnutOptions} from "@/constant/doughnutUtils";
import {barCardData} from "@/constant/barUtils";
import BarChart from "@components/charts/BarChart";

const Status = () => {
    return (
        <Box mt={5}>
            <Grid
                templateColumns="repeat(10, 1fr)"
                gap={2}
                alignItems="start"
            >
                <GridItem
                    order={{base: 2, lg: 1}}
                    colSpan={{base: 10, lg: 4}}
                    borderRadius="20px"
                    p={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    bg="white"
                    boxShadow="md"
                    position={{lg: "sticky"}}
                    top="10px"
                    alignSelf="start"
                >
                    <Flex justifyContent="space-between" alignItems="center" mb={2} width="100%">
                        <Flex alignItems="center" gap={2}>
                            <Text fontSize="xl" fontWeight="bold">
                                Status
                            </Text>
                            <Tag variant="solid" rounded="full" colorScheme="blue" px={3}>
                                918
                            </Tag>
                        </Flex>
                    </Flex>
                    <Text fontSize="sm" color="gray.600">
                        Current status distribution across all systems and components
                    </Text>
                    <Doughnut data={doughnutData} options={doughnutOptions}/>
                </GridItem>
                {/* Mapped card items */}
                <GridItem
                    order={{base: 1, lg: 2}}
                    colSpan={{base: 10, lg: 6}}
                    borderRadius="20px"
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                >
                    {barCardData.map((card, index) => (
                        <Box
                            key={index}
                            mb={2}
                            borderRadius="20px"
                            p={4}
                            display="flex"
                            flexDirection="column"
                            alignItems="start"
                            bg="white"
                            boxShadow="md"
                            width={"100%"}
                        >
                            <Flex justifyContent="space-between" alignItems="center" mb={2} width="100%">
                                <Flex alignItems="center" gap={2}>
                                    <Text fontSize="xl" fontWeight="bold">
                                        {card.heading}
                                    </Text>
                                    <Tag variant="solid" rounded="full" colorScheme="blue" px={3}>
                                        {card.tag}
                                    </Tag>
                                </Flex>
                                <Button size="sm">
                                    Download CSV
                                </Button>
                            </Flex>
                            <Text fontSize="sm" color="gray.600">
                                {card.description}
                            </Text>
                            <BarChart data={card.data} options={card.options}/>
                        </Box>
                    ))}
                </GridItem>
            </Grid>
        </Box>
    );
}
export default Status;