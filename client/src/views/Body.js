import React from "react";
import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
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
      margin="7"
      h="850"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={3}
    >
      <GridItem onMouseOver={()=>setIsLeftTopOpacity("100%")} onMouseOut={()=>setIsLeftTopOpacity("80%")} colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={isLeftTopOpacity}>
      </GridItem>
      <GridItem colSpan={2} rowSpan={2} bg={'#A0AEC0'} opacity={isCenterOpacity}>
        <StreamingView/>
      </GridItem>
      <GridItem onMouseOver={()=>setIsRightTopOpacity("100%")} onMouseOut={()=>setIsRightTopOpacity("80%")} colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={isRightTopOpacity}><RankingView/></GridItem>
      <GridItem colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={isLeftBottomOpacity}>hi</GridItem>
      <GridItem colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={isRightBottomOpacity}>hi</GridItem>
    </Grid>
  );
};
export default Body;