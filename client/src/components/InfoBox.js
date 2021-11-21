import { Box } from '@chakra-ui/layout';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

function InfoBox({ url,fade }) {

  const BoxArtImg = ({ url }) => {
    return <img alt={url} src={url} />;
  };

  return (
    <Container fade={fade} bgGradient="linear(purple.100 20%, red.100 80%)" boxShadow={"3px 3px 8px" }>
       {url ? <BoxArtImg url={url} /> : <BoxArtImg url={url} />}
    </Container>
  )
}

const Container = styled(Box)`
  position: relative;
  height: 49%;
  overflow: scroll;
  border-radius: 10px;
  background-blend-mode: screen;
  font-weight: bold;
  scroll-behavior: smooth;
  animation:${props=> props.fade?'fadein':'fadeout'} 2s;
  img {
    width: 100%;
    height: 100%;
    animation:${props=> props.fade?'fadein':'fadeout'} 2s;
    //animation: ${props => props.fade === 'fadein' ?'fadeIn':'fadeOut'} 2s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fadeout {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;




export default InfoBox
