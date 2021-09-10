import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
//chakra-ui
import { Box, VStack, StackDivider } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Icon from "@chakra-ui/icon";

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
  useEffect(() => {
    const config = {
      method: "get",
      url: "https://api.twitch.tv/helix/games/top",
      headers: {
        Authorization: "Bearer h01qel241io76w5uz6wp00hty1gwjr",
        "client-id": "z4axj8z8mqrhv5g5zq0aincu6kngf4",
      },
    };
    axios(config)
      .then(function (response) {
        setIsRank(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (!isRank) return null;
  return (
    <Box>
      <VStack spacing={1} divider={<StackDivider borderColor="#123123" />}>
        <Box>
          <Image style={{float:"left",marginTop:"2px",marginRight:"7px"}} boxSize={5} src="img/ranking.png" />
          게임 랭킹
        </Box>
        {isRank.map((rank) => (
          <Box marginStart={3} key={rank.id}>
            {rank.name}
          </Box>
        ))}
      </VStack>
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
    </Box>
  );
};

export default RankingView;
