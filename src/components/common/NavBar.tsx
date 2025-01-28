"use client";
import {
    Box,
    Button,
    Collapse,
    Flex,
    Icon,
    IconButton,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'
import {ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon, MoonIcon, SunIcon,} from '@chakra-ui/icons'
import {FaGithub} from "react-icons/fa";
import React from "react";

const NavBar = () => {
    const {isOpen, onToggle} = useDisclosure()
    const {colorMode} = useColorMode()
    return (
        <Box>
            <Flex
                color={'gray.600'}
                minH={'60px'}
                py={{base: 4, md: 6, lg: 6}}
                px={{base: 4, md: 4, lg: 32}}
                align={'center'}>
                <Flex
                    flex={{base: 1, md: 'auto'}}
                    ml={{base: -2}}
                    display={{base: 'flex', md: 'none'}}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{md: 1}} justify="space-between" align="center">
                    <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                        <Button
                            as="a"
                            href="/"
                            variant="link"
                            fontSize="2xl"
                            fontFamily="monospace"
                            fontWeight="bold"
                            _hover={{textDecoration: "none"}}
                            _focus={{boxShadow: "none"}}
                            color="black"
                        >
                            EIPs Insight
                        </Button>
                    </Text>

                    <Flex
                        display={{base: 'none', md: 'flex'}}
                        position="absolute"
                        left="50%"
                        transform="translateX(-50%)"
                    >
                        <DesktopNav/>
                    </Flex>
                </Flex>


                <Stack
                    flex={{base: 1, md: 0}}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={{base:1, md:4}}>
                    <IconButton aria-label="Github" variant="outline" colorScheme="blue" borderRadius="20" px={4}
                                py={2}>
                        <FaGithub/>
                    </IconButton>
                    <IconButton aria-label="Theme" colorScheme="blue">
                        {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                    </IconButton>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav/>
            </Collapse>
        </Box>
    );
}
const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')

    return (
        <Stack direction={'row'} gap={0} bg={'rgb(239,243,250)'} borderRadius="30">
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label} borderRadius={"full"} p={{base: 1, lg: 2}} _hover={{bg: '#0063970a'}}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box
                                as="a"
                                p={{base: 1, lg: 2}}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Box>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}

const DesktopSubNav = ({label, href, subLabel}: NavItem) => {
    return (
        <Box
            as="a"
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{
                bg: '#0063970a',
            }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon w={5} h={5} as={ChevronRightIcon}/>
                </Flex>
            </Stack>
        </Box>
    )
}

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{md: 'none'}}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({label, children, href}: NavItem) => {
    const {isOpen, onToggle} = useDisclosure()

    return (
        <Stack spacing={0} onClick={children && onToggle}>
            <Box
                py={2}
                as="a"
                href={href ?? '#'}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Stack direction="row">
                    <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                        {label}
                    </Text>
                    {children && (
                        <Icon
                            as={ChevronDownIcon}
                            transition={'all .25s ease-in-out'}
                            transform={isOpen ? 'rotate(180deg)' : ''}
                            w={6}
                            h={6}
                        />
                    )}
                </Stack>

            </Box>

            <Collapse in={isOpen} animateOpacity style={{marginTop: '0!important'}}>
                <Stack
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Box as="a" key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Box>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Pecta',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'All-Eips',
        children: [
            {
                label: 'Pecta',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'All-Eips',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Tools',
        href: '#',
    },
    {
        label: 'Insight',
        href: '#',
    },
    {
        label: 'Dashboard',
        href: '/dashboard',
    },
    {
        label: 'More',
        href: '#',
    },
]
export default NavBar;