'use client'
import SideBar from "@components/dashboard/SideBar";
import {ReactNode} from "react";
import {Box, Flex,} from "@chakra-ui/react";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import Home from "@components/dashboard/home";

ChartJS.register(ArcElement, Tooltip, Legend);
const DashboardLayout = ({children}: { children: ReactNode }) => {
    return (
        <Flex direction={{base: "column", lg: "row"}} minH="100vh">
            <SideBar/>
            <Box
                flex="1"
                bg="gray.50"
                minH="100vh"
                width={"100%"}
                p="6"
            >
                {children}
            </Box>
        </Flex>
    );
};
export default function DashboardPage() {
    return (
        <DashboardLayout>
            <Home/>
        </DashboardLayout>
    );
}