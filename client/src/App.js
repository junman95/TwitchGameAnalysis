import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { Box } from "@chakra-ui/layout";
//importing Components
import NavBar from "./components/NavBar";
import Body from "./pages/Body";
//Router
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
//styled-component sass
import styled from "styled-components";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Container>
          <NavBar fontFamily="TwitchFont" />
          <Switch>
            <Route exact path="/">
              <Body boxShadow={"3px 3px 8px"} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
`;

export default App;
