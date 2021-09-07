import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Heading Font Name';
        src: url('C:\Users\junma\Desktop\vscode_python\junma_git_python\TwitchGameAnalysis\client\public\font\Twitchy.TV.ttf') format('truetype');
      }
      `}
  />
);

export default Fonts;
