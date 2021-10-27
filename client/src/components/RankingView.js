import React, { useState, useEffect } from "react";
import axios from "axios";
//chakra-ui
import { Box, VStack, StackDivider } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import styled from "styled-components";
//redux
import { useSelector } from "react-redux";
import { selectRankItem } from "../features/rank/rankSlice";

const getJsonData = (data) => {
  const parseData = data.data.map((item) => (
    <li key={item.id} bg={"blue.100"}>
      {("게임명 : ", item.name)}
    </li>
  ));
  console.log(parseData);
  return parseData;
};

const RankingView = (props) => {
  const [isRank, setIsRank] = useState(false);
  const rankItems = useSelector((state) => state.rankItem);
  //console.log(rankItems);
  if (!rankItems) return null;
  return (
    <Container as="div">
      <RankingBox
        boxShadow={props.boxShadow}
        bgGradient="linear(purple.100 20%, red.100 80%)"
      >
        <RankingStack
          padding="1"
          spacing={1}
          divider={<StackDivider borderColor="#6441A5" />}
        >
          <Box>
            <Image
              style={{ float: "left", marginTop: "2px", marginRight: "7px" }}
              boxSize={5}
              src="images/ranking.png"
            />
            게임 랭킹
          </Box>
          {rankItems.map((rank) => (
            <ItemBox cursor="pointer" onClick marginStart={3} key={rank.id}>
              {rank.name}
            </ItemBox>
          ))}
        </RankingStack>
      </RankingBox>
      <Box textAlign="right" fontSize={1}>
        <a
          href="https://www.flaticon.com/kr/authors/flat-icons"
          title="Flat Icons"
        >
          Flat Icons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/kr/" title="Flaticon">
          www.flaticon.com
        </a>
      </Box>
      <InfoBox
        boxShadow={props.boxShadow}
        bgGradient="linear(purple.100 20%, red.100 80%)"
      >
        a
      </InfoBox>
    </Container>
  );
};

const Container = styled(Box)`
  height: 100%;
  margin-bottom: 8px;
`;

const RankingStack = styled(VStack)`
  justify-content: center;
`;

const RankingBox = styled(Box)`
  position: relative;
  height: 49%;
  overflow: scroll;
  border-radius: 10px;
  background-blend-mode: screen;
  font-weight: bold;
  scroll-behavior: smooth;
`;

const ItemBox = styled(Box)`
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.2);
  }
`;

const InfoBox = styled(RankingBox)``;

export default RankingView;
