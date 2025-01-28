"use client";
import NavBar from "@components/common/NavBar";
import {Box,} from "@chakra-ui/react";
import Footer from "@components/home/Footer";
import Faq from "@components/home/Faq";
import HeroSection from "@components/home/HeroSection";
import Highlight from "@components/home/Highlight";
import About from "@components/home/About";

export default function Home() {
    return (
        <>
            <main style={{overflow: "hidden", position: "relative"}}>
                <NavBar/>
                <Box
                    bg="#f1f4f9"
                    position="absolute"
                    top={0}
                    w="100%"
                    h={{base: "600px", md: "800px", lg: "900px"}}
                    zIndex={-1}
                    borderBottomRadius={70}
                ></Box>
                <Box
                    position="absolute"
                    top={{base:"-5%",md:"-10%",lg:"-15%"}}
                    left="50%"
                    transform="translateX(-50%)"
                    width={{base:"400px", md:"500px",lg:"800px"}}
                    height={{base:"400px", md:"500px",lg:"800px"}}
                    borderRadius="full"
                    bgGradient="radial(blue.200, transparent)"
                    opacity={0.7}
                    filter="blur(60px)"
                    zIndex={-1}
                />
                <HeroSection/>
                <Highlight/>
                <About/>
                <Faq/>
            </main>
            <Footer/>

        </>
    );
}
