import React from "react";
import { useState } from "react";
import { Grid, GridItem,Box } from "@chakra-ui/react";
//GridItems
import StreamingView from "./gridItems/StreamingView";
import RankingView from "./gridItems/RankingView";

const Body = (props) => {

  const [isLeftTopOpacity,setIsLeftTopOpacity] = useState("80%");
  const [isLeftBottomOpacity,setIsLeftBottomOpacity] = useState("80%");
  const [isCenterOpacity,setIsCenterOpacity] = useState("80%");
  const [isRightTopOpacity,setIsRightTopOpacity] = useState("80%");
  const [isRightBottomOpacity,setIsRightBottomOpacity] = useState("80%");

  return (
    <Grid
      position="relative"
      margin="7"
      h="850"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={3}
    >
      <GridItem boxShadow={props.boxShadow} onMouseOver={()=>setIsLeftTopOpacity("100%")} onMouseOut={()=>setIsLeftTopOpacity("80%")} colSpan={1} rowSpan={1} bg={'#FAF5FF'} opacity={isLeftTopOpacity}>
      </GridItem>
      <GridItem boxShadow={props.boxShadow} colSpan={2} rowSpan={2} bg={'#FAF5FF'} opacity={isCenterOpacity}>
        <Box fontSize="100pt"> 현지가 지켜본다!</Box>
      </GridItem>
      <GridItem onMouseOver={()=>setIsRightTopOpacity("100%")} onMouseOut={()=>setIsRightTopOpacity("80%")} colSpan={1} rowSpan={1} opacity={isRightTopOpacity}><RankingView boxShadow={props.boxShadow}/></GridItem>
      <GridItem boxShadow={props.boxShadow} colSpan={1} rowSpan={1} bg={'#FAF5FF'} opacity={isLeftBottomOpacity}>hi</GridItem>
      <GridItem boxShadow={props.boxShadow} colSpan={1} rowSpan={1} bg={'#FAF5FF'} opacity={isRightBottomOpacity}>hi</GridItem>
    </Grid>
  );
};
export default Body;