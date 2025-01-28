import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Text
} from "@chakra-ui/react";
import {FiSearch} from "react-icons/fi";
import OverView from "@components/dashboard/home/OverView";
import Category from "@components/dashboard/home/Category";
import Status from "@components/dashboard/home/Status";

const Home = () => {
    return (
        <>
            <Flex
                align="center"
                justify="space-between"
                px={{base:2,md:4}}
                py="2"
                gap={4}
                w="full"
            >
                <Breadcrumb fontWeight="medium" fontSize="sm" color="#00000073">
                    <BreadcrumbItem>
                        <BreadcrumbLink>Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Box w={{base: '200px', md: '300px'}} maxW="300px">
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <FiSearch color="gray.300"/>
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="Search"
                            pl="10"
                            bg="gray.50"
                            border="1px solid"
                            borderColor="gray.300"
                            _placeholder={{color: 'gray.400'}}
                        />
                    </InputGroup>
                </Box>
            </Flex>
            <Text fontSize="2xl" fontWeight="bold">
                Hi, Welcome back 👋
            </Text>
            <OverView/>
            <Category/>
            <Status/>

        </>
    );
}
export default Home;