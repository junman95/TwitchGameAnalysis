import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Body = (props) => {
  return (
    <Grid
      margin="7"
      h="850"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={3}
    >
      <GridItem colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={"50%"}>hi</GridItem>
      <GridItem colSpan={3} rowSpan={2} bg={'#A0AEC0'} opacity={"50%"}>hi</GridItem>
      <GridItem colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={"50%"}>hi</GridItem>
      <GridItem colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={"50%"}>hi</GridItem>
      <GridItem colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={"50%"}>hi</GridItem>
    </Grid>
  );
};
export default Body;