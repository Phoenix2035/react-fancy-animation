import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {motion} from "framer-motion";


const Container = styled(motion.div)``

const Box = styled(NavLink)`
  width: calc(10rem + 15vw);
  height: 20rem;
  padding: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  width: 100%;
  height: 60%;
  background-image: ${(props) => `url( ${props.img})`};
  background-size: cover;
  background-position: center center;
  border: 1px solid transparent;
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`

const projectAnimation = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.5
        }
    }
}

const Projects = (props) => {
    const {name, tags, imgSrc, link} = props.project;

    return (
        <Container variants={projectAnimation} >
            <Box target="_blank" to={{pathname: link}}>
                <Image img={imgSrc}/>
                <Title>{name}</Title>
                <HashTags>
                    {tags.map((item, index) => (
                        <Tag key={index}>{item}</Tag>
                    ))}
                </HashTags>
            </Box>
        </Container>
    );
};

export default Projects;
