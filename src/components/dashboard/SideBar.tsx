'use client'

import React from 'react'
import {
    Box,
    BoxProps,
    Button,
    CloseButton,
    Drawer,
    DrawerContent,
    Flex,
    FlexProps,
    Icon,
    IconButton,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'
import {FiCompass, FiHome, FiMenu, FiSettings, FiStar,} from 'react-icons/fi'
import {IconType} from 'react-icons'

interface LinkItemProps {
    name: string
    icon: IconType
}

const LinkItems: Array<LinkItemProps> = [
    {name: 'Home', icon: FiHome},
    {name: 'Pecta', icon: FiCompass},
    {name: 'All-EIPS', icon: FiStar},
    {name: 'Insight', icon: FiSettings}
]

export default function SideBar() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onClose={() => onClose} display={{base: 'none', lg: 'block'}}/>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose}/>
                </DrawerContent>
            </Drawer>
            <MobileNav display={{base: 'flex', lg: 'none'}} onOpen={onOpen}/>
            <Box ml={{base: 0, md: 60}}>
                {/* Content */}
            </Box>
        </Box>
    )
}

interface SidebarProps extends BoxProps {
    onClose: () => void
}

const SidebarContent = ({onClose, ...rest}: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{base: 'full', lg: 60}}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
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
                <CloseButton display={{md: 'flex', lg: 'none'}} onClick={onClose}/>
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}

interface NavItemProps extends FlexProps {
    icon: IconType
    children: React.ReactNode
}

const NavItem = ({icon, children, ...rest}: NavItemProps) => {
    return (
        <Box
            as="a"
            href="#"
            style={{textDecoration: 'none'}}
            _focus={{boxShadow: 'none'}}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: '#c2c2c2',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}

interface MobileProps extends FlexProps {
    onOpen: () => void
}

const MobileNav = ({onOpen, ...rest}: MobileProps) => {
    return (
        <Flex
            ml={{base: 0,}}
            px={{base: 4, md: 24}}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu/>}
            />

            <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                <Button
                    as="a"
                    href="/"
                    variant="link"
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold"
                    _hover={{textDecoration: "none"}}
                    color="black"
                    _focus={{boxShadow: "none"}}
                >
                    EIPs Insight
                </Button>
            </Text>
        </Flex>
    )
}