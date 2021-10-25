import React from "react";
import { useState } from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
//GridItems
import StreamingView from "../components/StreamingView";
import RankingView from "../components/RankingView";
import styled from "styled-components";

const Body = (props) => {
  return (
    <Container>
      <Grid
        width="100vw"
        height = "92vh"
        position="relative"
        padding="20px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={3}
      >
        <GridItem colSpan={3} rowSpan={2}>
          <StreamingView boxShadow={props.boxShadow} />
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <RankingView boxShadow={props.boxShadow} />
        </GridItem>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  background: url("/images/purple-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
`
export default Body;
