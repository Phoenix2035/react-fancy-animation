import styled from "styled-components";
import {NavLink} from "react-router-dom";

import {Github, Linkedin, Instagram} from "../components/AllSvgs";
import {darkTheme} from "../components/Themes"
import {motion} from "framer-motion";

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

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialMediaIcons = (props) => {
    return (
        <Icons>
            <motion.div
                initial={{transform: "scale(0)"}}
                animate={{scale: [0, 1, 1.5, 1]}}
                transition={{type: "spring", duration: 1, delay: 1.2}}
            >
                <NavLink
                    style={{color: "inherit"}}
                    target="_blank"
                    to={{pathname: "https://github.com/masturdating1991"}}
                >
                    <Github width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
                </NavLink>
            </motion.div>

            <motion.div
                initial={{transform: "scale(0)"}}
                animate={{scale: [0, 1, 1.5, 1]}}
                transition={{type: "spring", duration: 1, delay: 1.4}}
            >
                <NavLink
                    style={{color: "inherit"}}
                    target="_blank"
                    to={{pathname: "https://www.linkedin.com/in/ali-ghodousi"}}
                >
                    <Linkedin width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
                </NavLink>
            </motion.div>

            <motion.div
                initial={{transform: "scale(0)"}}
                animate={{scale: [0, 1, 1.5, 1]}}
                transition={{type: "spring", duration: 1, delay: 1.6}}
            >
                <NavLink
                    style={{color: "inherit"}}
                    target="_blank"
                    to={{pathname: "https://www.instagram.com/aligh_2035"}}
                >
                    <Instagram width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
                </NavLink>
            </motion.div>

            <Line color={props.theme}
                  initial={{height: 0}} animate={{height: "8rem"}}
                  transition={{type: "spring", duration: 1, delay: 0.8}}
            />
        </Icons>
    );
};

export default SocialMediaIcons;
