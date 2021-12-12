import styled from "styled-components";
import LogoComponent from "../subComponents/Logo";
import PowerButton from "../subComponents/PowerButton";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";

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

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialMediaIcons />
      </Container>
    </MainContainer>
  );
};

export default Main;
