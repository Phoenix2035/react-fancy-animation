import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Github} from "../components/AllSvgs";


const Box = styled.li`
  width: 16rem;
  height: 40vh;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.body};
  transition: all .2s ease;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
  }
`

const Title = styled.h2`
  font-size: calc(1rem + 0.5vw);
`

const Description = styled.h3`
  font-size: calc(0.7rem + 0.5vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`

const Tags = styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid ${props => props.theme.text};
  }
`

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.7em + 0.3vw);
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

const Link = styled(NavLink)`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: cacl(1em + 0.5vw);

  ${Box}:hover & {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`


const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  ${Box}:hover & {
    & > * {
      fill: ${props => props.theme.text};
    }
  }
`

const Card = (props) => {

    const {name, description, tags, demo, github} = props.data


    return (
        <Box>
            <Title>
                {name}
            </Title>

            <Description>
                {description}
            </Description>

            <Tags>
                {
                    tags.map((item, index) =>
                        <Tag key={index}>#{item}</Tag>
                    )
                }
            </Tags>

            <Footer>
                <Link to={{pathname: `${demo}`}} target="_blank">
                    Visit
                </Link>


                <Git to={{pathname: `${github}`}} target="_blank">
                    <Github width={30} height={30}/>
                </Git>

            </Footer>
        </Box>
    );
};

export default Card;
