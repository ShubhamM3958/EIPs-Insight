import {Box, Button, Flex, Grid, GridItem, Tag, Text} from "@chakra-ui/react";
import {lineCardData} from "@/constant/lineUtils";
import LineChart from "@components/charts/LineChart";
import {Doughnut} from "react-chartjs-2";
import {doughnutData, doughnutOptions} from "@/constant/doughnutUtils";

const Category = () => {
    return (
        <Box mt={5}>
            <Grid
                templateColumns="repeat(10, 1fr)"
                gap={2}
                alignItems="start"
            >
                {/* Mapped card items */}
                <GridItem
                    colSpan={{base: 10, lg: 6}}
                    borderRadius="20px"
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                >
                    {lineCardData.map((card, index) => (
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
                            <LineChart data={card.data} options={card.options}/>
                        </Box>
                    ))}
                </GridItem>

                <GridItem
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
                                Category
                            </Text>
                            <Tag variant="solid" rounded="full" colorScheme="blue" px={3}>
                                918
                            </Tag>
                        </Flex>
                    </Flex>
                    <Text fontSize="sm" color="gray.600">
                        Distribution of components across different categories
                    </Text>
                    <Doughnut data={doughnutData} options={doughnutOptions}/>
                </GridItem>
            </Grid>
        </Box>
    );
}
export default Category;