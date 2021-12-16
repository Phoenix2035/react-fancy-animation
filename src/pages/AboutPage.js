import styled, {keyframes, ThemeProvider} from "styled-components";
import {motion} from "framer-motion";


import {darkTheme} from "../components/Themes";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

import Astronaut from "../assets/Images/spaceman.png"


const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.body};
  position: relative;
  overflow: hidden;
`

const float = keyframes`
  0% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateX(15px) translateY(15px);
  }
  100% {
    transform: translateY(-10px);
  }
`

const Spaceman = styled.div`
  width: 20vw;
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
  width: 50vw;
  height: 60vh;
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  z-index: 3;
  line-height: 1.5;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  top: 10rem;
  left: calc(5rem + 5vw);

  font-family: "Ubunto Mono", monospace;
  font-style: italic;
`


const AboutPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <Logo/>
                <PowerButton theme={"dark"}/>
                <SocialMediaIcons theme={"dark"}/>
                <ParticleComponent theme={"dark"}/>

                <Spaceman>
                    <motion.img src={Astronaut} alt="astronaut" drag
                                dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
                                dragElastic={.5}/>
                </Spaceman>

                <Main>
                    I'm a Frontend developer located in Iran. I love to create simple yet beautiful websites with
                    great user experience. <br/><br/>

                    I'm interested in the whole Frontend stack Like trying new things and building great projects. . I
                    love to see movies and read books. <br/><br/>

                    I believe everything is an Art when you put your consciousness in it. You can connect with me via
                    social links.
                </Main>

            </Box>
        </ThemeProvider>
    )
}

export default AboutPage
