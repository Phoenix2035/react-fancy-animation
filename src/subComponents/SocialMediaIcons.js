import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Github, Linkedin, Instagram } from "../components/AllSvgs";
import { darkTheme } from "../components/Themes"

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  left: 2rem;
  bottom: 0;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialMediaIcons = (props) => {
    return (
        <Icons>
            <div>
                <NavLink
                    style={{ color: "inherit" }}
                    target="_blank"
                    to={{ pathname: "https://github.com/masturdating1991" }}
                >
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>

            <div>
                <NavLink
                    style={{ color: "inherit" }}
                    target="_blank"
                    to={{ pathname: "https://www.linkedin.com/in/ali-ghodousi" }}
                >
                    <Linkedin width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>

            <div>
                <NavLink
                    style={{ color: "inherit" }}
                    target="_blank"
                    to={{ pathname: "https://www.instagram.com/aligh_2035" }}
                >
                    <Instagram width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>

            <Line color={props.theme} />
        </Icons>
    );
};

export default SocialMediaIcons;
