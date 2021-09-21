import React from "react";
import { useState } from "react";
import { Grid, GridItem,Box } from "@chakra-ui/react";
//GridItems
import StreamingView from "./gridItems/StreamingView";
import RankingView from "./RankingView";

const Body = ({boxShadow}) => {

  return (
    <Grid
      padding="1vh"
      h="100%"
      w="100%"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={3}
    >
      <GridItem h="50%" boxShadow={boxShadow}  colSpan={1} rowSpan={1} bg={'#FAF5FF'}>
      </GridItem>
      <GridItem colSpan={2} rowSpan={2}>
        <StreamingView boxShadow={boxShadow}/>
      </GridItem>
      <GridItem h="50%" colSpan={1} rowSpan={1}>
        <RankingView  boxShadow={boxShadow}/>
      </GridItem>
      <GridItem boxShadow={boxShadow} colSpan={1} rowSpan={1} bg={'#FAF5FF'}>hi</GridItem>
      <GridItem boxShadow={boxShadow} colSpan={1} rowSpan={1} bg={'#FAF5FF'}>hi</GridItem>
    </Grid>
  );
};
export default Body;