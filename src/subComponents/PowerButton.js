import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

const Power = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  cursor: pointer;
`;

const PowerButton = () => {
  return (
    <Power>
      <PowerBtn fill="currentColor" />
    </Power>
  );
};

export default PowerButton;
