import React from "react";
import { useState } from "react";
import { Grid, GridItem,Box } from "@chakra-ui/react";
//GridItems
import StreamingView from "./gridItems/StreamingView";
import RankingView from "./gridItems/RankingView";

const Body = (props) => {

  return (
    <Grid
      position="relative"
      margin="7"
      h="850"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={3}
    >
      <GridItem boxShadow={props.boxShadow}  colSpan={1} rowSpan={1} bg={'#FAF5FF'}>
      </GridItem>
      <GridItem colSpan={2} rowSpan={2}>
        <StreamingView boxShadow={props.boxShadow}/>
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <RankingView  boxShadow={props.boxShadow}/>
      </GridItem>
      <GridItem boxShadow={props.boxShadow} colSpan={1} rowSpan={1} bg={'#FAF5FF'}>hi</GridItem>
      <GridItem boxShadow={props.boxShadow} colSpan={1} rowSpan={1} bg={'#FAF5FF'}>hi</GridItem>
    </Grid>
  );
};
export default Body;