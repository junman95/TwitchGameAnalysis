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
        position="relative"
        padding="20px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={3}
        overflow="hidden"
      >
        <GridItem
          boxShadow={props.boxShadow}
          colSpan={1}
          rowSpan={1}
          bg={"#FAF5FF"}
        ></GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <StreamingView boxShadow={props.boxShadow} />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <RankingView boxShadow={props.boxShadow} />
        </GridItem>
        <GridItem
          boxShadow={props.boxShadow}
          colSpan={1}
          rowSpan={1}
          bg={"#FAF5FF"}
        >
          hi
        </GridItem>
        <GridItem
          boxShadow={props.boxShadow}
          colSpan={1}
          rowSpan={1}
          bg={"#FAF5FF"}
        >
          hi
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
`
export default Body;
