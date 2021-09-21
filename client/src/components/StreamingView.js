import { Box, Container, VStack } from "@chakra-ui/layout";
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
      h="100%"
      w="100%"
      boxShadow={props.boxShadow}
      borderRadius="10px"
      bg={"#FAF5FF"}
    >
      <Box>
        {isEmbeded? ( <TwitchEmbed
        box-sizing= "border-box"
        width="100%"
        channel="kimdoe"
        id="kimdoe"
        theme="dark"
        muted
      />):""}
      </Box>
    </VStack>
  );
};

export default StreamingView;
