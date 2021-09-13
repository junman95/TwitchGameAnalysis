import React from "react";
import { Box, Heading, Flex, Link } from "@chakra-ui/react";

const MenuItems = ({ children }) => (
  <Link mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Link>
);

const NavBar = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      color="white"
      bg="#9146FF"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      {...props}
    >
      <Flex align="center" mt={-5} mr={10}>
        <Heading fontWeight={10} fontFamily={props.fontFamily} as="h1" size="lg" >
          Twitch Game Analysis
        </Heading>
      </Flex>
      <Box display="flex" width="auto" alignItems="center" flexGrow={1} color="white">
        <MenuItems>Home</MenuItems>
        <MenuItems>Blogs</MenuItems>
        <MenuItems>About</MenuItems>
        <MenuItems>Contact</MenuItems>
      </Box>
    </Flex>
  );
};

export default NavBar;
