import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import LogoComponent from "../subComponents/Logo";
import PowerButton from "../subComponents/PowerButton";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import { Gmail } from "./AllSvgs";
import { NavLink } from "react-router-dom";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.body};
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Email = styled.div`
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
  cursor: pointer;
`;

const Projects = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 1vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
  text-decoration: none;
  cursor: pointer;
`;

const Work = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  cursor: pointer;
`;

const About = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  cursor: pointer;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  cursor: pointer;
`;

const BottomBar = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1rem;

  display: flex;
  justify-content: space-evenly;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialMediaIcons />

        <Email data-tip="aligodosi@gmail.com">
          <ReactTooltip effect="solid" />
          <Gmail width={40} height={40} />
        </Email>

        <Projects to="/projects">
          <h2>Projects</h2>
        </Projects>

        <Work to="/work">
          <h2>Work</h2>
        </Work>

        <BottomBar>
          <About to="/about">
            <h2>About Me</h2>
          </About>

          <Skills to="/skills">
            <h2>My Skills</h2>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
