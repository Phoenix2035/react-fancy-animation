import styled, {ThemeProvider} from "styled-components";
import {motion} from "framer-motion";


import {darkTheme} from "../components/Themes";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import PowerButton from "../subComponents/PowerButton";

import {Work} from "../data/WorkData"
import Card from "../subComponents/Card";
import {useEffect, useRef} from "react";
import {YinYang} from "../components/AllSvgs";
import BigTitle from "../subComponents/BigTitle";


const Box = styled.div`
  height: 400vh;
  background-color: ${props => props.theme.body};
  position: relative;
  display: flex;
  align-items: center;
`

const Main = styled(motion.ul)`
  height: 40vh;
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  display: flex;
  color: #fff;
`

const Rotate = styled.span`
  width: 80px;
  height: 80px;
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 1;
`


const containerAnimation = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5
        }
    }
}

const WorkPage = () => {
    const ref = useRef(null)
    const yingYang = useRef(null)

    useEffect(() => {
        let element = ref.current

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`

            yingYang.current.style.transform = `rotate(` + -window.pageYOffset + 'deg)'
        }

        window.addEventListener("scroll", rotate)

        return () => window.removeEventListener("scroll", rotate)

    }, [])

    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <Logo theme={"dark"}/>
                <PowerButton theme={"dark"}/>
                <SocialMediaIcons theme={"dark"}/>
                <Main ref={ref} variants={containerAnimation} initial="hidden" animate="show">
                    {
                        Work.map(item =>
                            <Card key={item.id} data={item}/>
                        )
                    }
                </Main>

                <Rotate ref={yingYang}>
                    <YinYang width={80} height={80} fill={darkTheme.text}/>
                </Rotate>

                /<BigTitle text="WORK" top="10%" right="20%"/>
            </Box>
        </ThemeProvider>
    )
}

export default WorkPage
