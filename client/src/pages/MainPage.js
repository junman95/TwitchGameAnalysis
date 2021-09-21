import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { Box, Heading } from "@chakra-ui/layout";
//importing Components
import NavBar from "./NavBar";
import Body from "./Body";
//theme
import theme from "../styleComponents/theme/Theme";

const MainPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box h="100vh" w="100vw"  bg={"#A0AEC0"}>
        <NavBar h="8%" fontFamily="TwitchFont"/>
        <Body h="92%" boxShadow={"3px 3px 8px"}/>
      </Box>
    </ChakraProvider>
  );
};

export default MainPage;
