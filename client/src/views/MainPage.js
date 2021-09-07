import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
//importing Components
import NavBar from "./NavBar";
//theme
import theme from "../styleComponents/theme/Theme";
import Fonts from "../styleComponents/fonts/Fonts";

const MainPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
    </ChakraProvider>
  );
};

export default MainPage;
