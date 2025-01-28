'use client'

import {Box, chakra, Container, SimpleGrid, Stack, Text, useColorModeValue, VisuallyHidden,} from '@chakra-ui/react'
import {ReactNode} from 'react'
import {FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'


const SocialButton = ({
                          children,
                          label,
                          href,
                      }: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({children}: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

export default function Footer() {
    return (
        <Box
            color={useColorModeValue('gray.700', 'gray.200')} bg={'#f1f4f9'}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{sm: '1fr 1fr', md: '2fr 1fr 1fr'}}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Text fontSize="xl" fontWeight="normal">
                                EIPs Insight
                            </Text>
                            <Text fontSize={'xl'}>v2.0.0</Text>
                        </Box>

                        <Text fontSize={'sm'}>© 2025 EIPs Insight. All rights reserved</Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Twitter'} href={'#'}>
                                <FaTwitter/>
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'#'}>
                                <FaYoutube/>
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <FaInstagram/>
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Box as="a" href={'#'}>
                            About us
                        </Box>
                        <Box as="a" href={'#'}>
                            Blog
                        </Box>
                        <Box as="a" href={'#'}>
                            Contact us
                        </Box>
                        <Box as="a" href={'#'}>
                            Pricing
                        </Box>
                        <Box as="a" href={'#'}>
                            Testimonials
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Box as="a" href={'#'}>
                            Help Center
                        </Box>
                        <Box as="a" href={'#'}>
                            Terms of Service
                        </Box>
                        <Box as="a" href={'#'}>
                            Legal
                        </Box>
                        <Box as="a" href={'#'}>
                            Privacy Policy
                        </Box>
                        <Box as="a" href={'#'}>
                            Satus
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}