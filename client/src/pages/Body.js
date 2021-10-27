import React from "react";
import { useState, useEffect } from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
//GridItems
import StreamingView from "../components/StreamingView";
import RankingView from "../components/RankingView";
import styled from "styled-components";
//redux
import { useDispatch, useSelector } from "react-redux";
import rankReducer, { setRank } from "../features/rank/rankSlice";
import axios from "axios";

const Body = ({ boxShadow }) => {
  const dispatch = useDispatch();
  let rankItems = [];

  useEffect(() => {
    //get rank items
    const rankConfig = {
      method: "get",
      url: "https://api.twitch.tv/helix/games/top",
      headers: {
        Authorization: process.env.REACT_APP_TWITCH_AUTH,
        "client-id": process.env.REACT_APP_TWITCH_CLIENTID,
      },
    };

    axios(rankConfig)
      .then(function (response) {
        //setIsRank(response.data.data);
        const rankList = response.data.data;

        rankList.map((doc) => {
          rankItems = [...rankItems, { ...doc }];
        });
        console.log(rankItems);
        dispatch(
          setRank({
            rankItem: rankItems,
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Grid
        width="100vw"
        height="92vh"
        position="relative"
        padding="20px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={3}
      >
        <GridItem colSpan={3} rowSpan={2}>
          <StreamingView boxShadow={boxShadow} />
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <RankingView waitBeforeShow={500} boxShadow={boxShadow} />
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
`;
export default Body;
