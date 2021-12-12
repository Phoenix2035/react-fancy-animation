import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: "Pacifico", cursive;
  user-select: none;

  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;
`;

const LogoComponent = () => {
  return <Logo>GH</Logo>;
};

export default LogoComponent;
