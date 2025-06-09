import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
;


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;

h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif ;
    font-weight:500;
}

@media (max-width: 768px) {
    h2,h3,h4,h5,h6 {
        font-size: 1.1rem;
    }
}
`

const Container = styled.div`
padding: 2rem;

@media (max-width: 768px) {
    padding: 1rem;
}
`

const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;

@media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    font-size: 0.9rem;
}
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;

@media (max-width: 768px) {
    right: 0.5rem;
    font-size: 0.9rem;
}
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;

@media (max-width: 768px) {
    left: 0.5rem;
    font-size: 0.9rem;
}
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;

@media (max-width: 768px) {
    bottom: 0.5rem;
    font-size: 0.9rem;
}
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;

@media (max-width: 768px) {
    font-size: 0.9rem;
}
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;

@media (max-width: 768px) {
    font-size: 0.9rem;
}
`

const rotate = keyframes`
from{
        transform: rotate(0);
}
to{
        transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
        animation: ${rotate} infinite 1.5s linear;
        width: ${props => props.click ? '80px' : '120px'};
        height: ${props => props.click ? '80px' : '120px'};
}

&>:last-child{
        display: ${props => props.click ? 'none' :'inline-block'  };
        padding-top: 1rem;
        font-size: 1rem;
}

@media (max-width: 768px) {
    top: ${props => props.click ? '90%' :'50%'  };
    left: ${props => props.click ? '90%' :'50%'  };

    &>:first-child{
        width: ${props => props.click ? '50px' : '80px'};
        height: ${props => props.click ? '50px' : '80px'};
    }
    &>:last-child{
        font-size: 0.8rem;
        padding-top: 0.5rem;
    }
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;

@media (max-width: 768px) {
    width: ${props => props.click ? '60%' : '0%'};
}
`


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    // Function to handle "Say hi.." click and open default mail client
    const handleSayHiClick = (e) => {
        e.preventDefault();
        window.location.href = "mailto:mukilan93421@gmail.com";
    };

    // Function to handle Resume click and trigger PDF download
    const handleResumeDownload = (e) => {
        e.preventDefault();
        // Replace with your actual PDF file path in the public folder
        const pdfUrl = process.env.PUBLIC_URL + '/mukilan_resume.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'mukilan.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <MainContainer>
         <DarkDiv   click={click}/>
            <Container>
            <PowerButton />
            <LogoComponent theme={click ? 'dark' :'light'}/>
            <SocialIcons theme={click ? 'dark' :'light'} />
           
            <Center click={click}>
                <YinYang  onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                <span>click here</span>
            </Center>

            <Contact href="mailto:mukilan93421@gmail.com" onClick={handleSayHiClick}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    Say hi..
                </motion.h2>
            </Contact>
            <BLOG to="/resume" as="a" href="/mukilan_resume.pdf" onClick={handleResumeDownload}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Resume
                </motion.h2>
            </BLOG>
            <WORK to="/work" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Project
                </motion.h2>
            </WORK>
            <BottomBar>
            <ABOUT to="/about" click={+click}>
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    About.
                </motion.h2>
            </ABOUT>
            <SKILLS to="/skills">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    My Skills.
                </motion.h2>
            </SKILLS>

            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main
