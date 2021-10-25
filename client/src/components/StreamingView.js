import { Box, Container, VStack } from "@chakra-ui/layout";
import styled from 'styled-components';
import React,{useEffect,useState} from "react";
//twitch embeding packages
import {
  TwitchEmbed,
  TwitchChat,
  TwitchClip,
  TwitchPlayer,
} from "react-twitch-embed";

const StreamingView = (props) => {
  const [isEmbeded, setIsEmbeded] = useState(false);

  useEffect(() => {
    setIsEmbeded(true);
  }, [])
  return (
    <VStack
      overflow="hidden"
      w="100%"
      height="100%"
      boxShadow={props.boxShadow}
      borderRadius="10px"
      bg={"#FAF5FF"}
    >
      <StreamingBox>
        {isEmbeded? ( <TwitchPlayer
        width="100%"
        height="100%"
        box-sizing="border-box"
        channel="LCK_KOREA"
        id="LCK_KOREA"
        theme="dark"
        onVideoPause={() => console.log(':(')}
      />):""}
      </StreamingBox>
    </VStack>
  );
};

const StreamingBox = styled(Box)`
  display: flex;
  width:100%;
  height: 100%;
  TwitchEmbed{
    object-fit: cover;
  }
`

export default StreamingView;
