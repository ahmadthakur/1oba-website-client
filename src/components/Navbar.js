import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Spacer,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  LogIn,
  UserPlus,
  Home,
  TrendingUp,
  Box as FeatherBox,
  Grid,
  Users,
} from "react-feather";
import logo from "../images/logo-g.png";

export default function NavigationBar() {
  const { user, logout } = useContext(UserContext);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box px={{ base: 0, xl: 20 }}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            src={logo}
            alt="Logo"
            maxWidth={{ base: "100px", md: "200px" }}
            objectFit="cover"
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
          />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {user ? (
            <>
              <Avatar name={user.name} src={user.avatar} />
              <Button
                onClick={logout}
                display={{ base: "none", md: "inline-flex" }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                py={2}
                px={4}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                as={Link}
                to={"/login"}
                border={"1px"}
                _hover={{
                  bg: "grey.300",
                }}
                display={{ base: "none", md: "inline-flex" }}
              >
                <Box as={LogIn} mr={2} /> Login
              </Button>
              <Button
                py={2}
                px={4}
                fontSize={"sm"}
                fontWeight={600}
                variant={"link"}
                color={"white"}
                bg={"blue.400"}
                as={Link}
                to={"/register"}
                _hover={{
                  bg: "blue.300",
                }}
                display={{ base: "none", md: "inline-flex" }}
              >
                <Box as={UserPlus} mr={2} /> Register
              </Button>
            </>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "blue.600");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Flex
          key={navItem.label}
          align="center"
          as={Link}
          to={navItem.href}
          p={2}
          fontSize={"sm"}
          fontWeight={500}
          color={linkColor}
          _hover={{
            textDecoration: "none",
            color: linkHoverColor,
          }}
        >
          <Box mr={2}>{navItem.icon}</Box>
          {navItem.label}
        </Flex>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      {user ? (
        <Button onClick={logout} w="full">
          Logout
        </Button>
      ) : (
        <>
          <Button as={Link} to="/login" w="full" variant="ghost">
            Login
          </Button>
          <Button as={Link} to="/register" w="full" colorScheme="blue">
            Register
          </Button>
        </>
      )}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, icon }) => {
  const { isOpen } = useDisclosure();

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        to={href}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
        align="center"
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          <Box mr={2}>{icon}</Box>
          {label}
        </Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        ></Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    label: "Sell",
    href: "/sell",
    icon: <TrendingUp />,
  },
  {
    label: "Buy",
    href: "/buy",
    icon: <FeatherBox />,
  },
  {
    label: "Find Property",
    href: "/find-property",
    icon: <Grid />,
  },
  {
    label: "About",
    href: "/about",
    icon: <Users />,
  },
];
