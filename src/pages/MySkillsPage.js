import styled, {ThemeProvider} from "styled-components";


import {lightTheme} from "../components/Themes";
import {Develop} from "../components/AllSvgs";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";


const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.body};

  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled.div`
  width: 30vw;
  height: 60vh;
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubunto Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);


  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *first-child {
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(.6em + 1vw);
  padding: .5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul, p {
    margin-left: 2rem;
  }
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <Logo/>
                <PowerButton theme={"light"}/>
                <SocialMediaIcons theme={"light"}/>
                <ParticleComponent theme={"light"}/>
                <Main>
                    <Title>
                        <Develop width={40} height={40}/> Frontend Developer
                    </Title>
                    <Description>
                        I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <ul>
                            <li>Web Design</li>
                            <li>Mobile App</li>
                        </ul>
                    </Description>
                </Main>

                <Main>

                </Main>

                <BigTitle text="SKILLS" top="80%" right="30%"/>
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage
