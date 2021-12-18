import styled, {keyframes} from "styled-components";

import music from "../assets/audio/music.mp3"
import {useRef, useState} from "react";


const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  top: 3rem;
  left: 8rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }

  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }

  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }

  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }

  & > *:nth-child(5) {
    animation-delay: 0.6s;
  }
`

const soundAnimation = keyframes`
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(2);
  }
  100% {
    transform: scaleY(1);
  }
`

const Line = styled.span`
  width: 2px;
  height: 1rem;
  margin: 0 0.1rem;
  background-color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.body};
  border-radius: 20px;

  animation: ${soundAnimation} 1s ease infinite;
  animation-play-state: ${props => props.click ? "running" : "paused"};
`


const SoundBar = () => {

    const ref = useRef(null)
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)

        if (!click) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }


    return (
        <Box onClick={handleClick}>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>

            <audio src={music} ref={ref} loop/>
        </Box>
    );
};

export default SoundBar;
