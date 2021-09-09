import React from "react";
import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
//GridItems
import StreamingView from "./gridItems/StreamingView";

const Body = (props) => {

  const [isLeftTopOpacity,setIsLeftTopOpacity] = useState("50%");
  const [isLeftBottomOpacity,setIsLeftBottomOpacity] = useState("50%");
  const [isCenterOpacity,setIsCenterOpacity] = useState("50%");
  const [isRightTopOpacity,setIsRightTopOpacity] = useState("50%");
  const [isRightBottomOpacity,setIsRightBottomOpacity] = useState("50%");

  return (
    <Grid
      margin="7"
      h="850"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={3}
    >
      <GridItem onMouseOver={()=>setIsLeftTopOpacity("100%")} onMouseOut={()=>setIsLeftTopOpacity("50%")} colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={isLeftTopOpacity}></GridItem>
      <GridItem onMouseOver={()=>setIsCenterOpacity("100%")} onMouseOut={()=>setIsCenterOpacity("50%")} colSpan={3} rowSpan={2} bg={'#A0AEC0'} opacity={isCenterOpacity}>
        <StreamingView/>
      </GridItem>
      <GridItem onMouseOver={()=>setIsRightTopOpacity("100%")} onMouseOut={()=>setIsRightTopOpacity("50%")} colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={isRightTopOpacity}>hi</GridItem>
      <GridItem onMouseOver={()=>setIsLeftBottomOpacity("100%")} onMouseOut={()=>setIsLeftBottomOpacity("50%")} colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={isLeftBottomOpacity}>hi</GridItem>
      <GridItem onMouseOver={()=>setIsRightBottomOpacity("100%")} onMouseOut={()=>setIsRightBottomOpacity("50%")} colSpan={1} rowSpan={1} bg={'#A0AEC0'} opacity={isRightBottomOpacity}>hi</GridItem>
    </Grid>
  );
};
export default Body;