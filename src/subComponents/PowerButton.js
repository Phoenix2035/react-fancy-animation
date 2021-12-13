import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

const Power = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  top: 2rem;
  left: 50%;
  z-index:3;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.1);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/">
                <PowerBtn fill="currentColor" />
            </NavLink>
        </Power>
    );
};

export default PowerButton;
