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
        channel="109ace"
        id="109ace"
        theme="dark"
        withChat="false"
        muted
        onVideoPause={() => console.log(':(')}
      />):""}
      </Box>
    </VStack>
  );
};

export default StreamingView;
