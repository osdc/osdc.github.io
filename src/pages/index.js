import React from "react";

import styled, {keyframes} from "styled-components";

import { injectGlobal } from 'styled-components';

import Monoton from '../../styles/fonts/Monoton-Regular.ttf';

import Assistant from '../../styles/fonts/Assistant-ExtraLight.ttf';


/*Styled Components*/

injectGlobal`
	body {
		margin: 0;
	}

	@font-face {
		font-family: 'Monoton';
		src: url(${Monoton});
	}

	@font-face {
		font-family: 'Assistant';
		src: url(${Assistant});
	}

	body::-webkit-scrollbar {
    	display: none; 
	}
`;

/*Animation Keyframes*/

const neon = keyframes`
  0% {
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
  }
  12% {
    text-shadow: 0 0 20px rgba(10, 175, 230, 1.5),  0 0 20px rgba(10, 175, 230, 1);
  }
  18% {
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0.2);
  }
  25% {
    text-shadow: 0 0 20px rgba(10, 175, 230, 0.9),  0 0 20px rgba(10, 175, 230, 0.3);
  }
  35% {
    text-shadow: 0 0 20px rgba(10, 175, 230, 0.8),  0 0 20px rgba(10, 175, 230, 0.1);
  }
  42% {
    text-shadow: 0 0 20px rgba(10, 175, 230, 1.2),  0 0 20px rgba(10, 175, 230, 0);
  }
  50% {
    text-shadow: 0 0 20px rgba(10, 175, 230, 1.6),  0 0 20px rgba(10, 175, 230, 1);
  }
  100% {
    text-shadow: 0 0 20px rgba(10, 175, 230, 1.6),  0 0 20px rgba(10, 175, 230, 1);
  }
`;

const down = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

/*Animation keyframes ending*/

const Container = styled.div`
	min-height: 100vh;
`;

const Main = styled.div`
	min-height: 100vh;
 	background-color: black;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	color: #c6e2ff;
`;

const Gradientbox = styled.div`
  height: 300px;
  width: 600px;
  background-image: linear-gradient(90deg, #f50057 0%,#242323 35%, #00b0ff 60%, #76ff03  100%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 620px) {
  	width: 500px;
  }
  @media (max-width: 520px) {
  	width: 400px;
    height: 220px;
  }
  @media (max-width: 420px) {
  	height: 200px;
    width: 320px;
  }
  @media (max-width: 336px) {
  	height: 190px;
    width: 310px;
  }
  @media (max-width: 316px) {
  	background: transparent;
  }
`;

const Logo = styled.div`
  background-color: black;
  background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
  height: 290px;
  width: 590px;
  font-family: 'Monoton', cursive;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${neon} 900ms ease-in-out infinite alternate;
  animation-delay: 100ms;
  font-size: 140px;
  pointer-events: none;
  @media (max-width: 620px) {
  	font-size: 120px;
    width: 490px;
  }
  @media (max-width: 520px) {
  	font-size: 100px;
    width: 390px;
    height: 210px;
  }
  @media (max-width: 420px) {
  	font-size: 87px;
    width: 310px;
    height: 190px;;
  }
  @media (max-width: 336px) {
  	font-size: 80px;
    width: 300px;
    height: 180px;
  }
  @media (max-width: 316px) {
  	font-size: 75px;
    width: 300px;
    height: 180px;
  }
`;



const Subheading = styled.span`
  background-color: black;
  z-index: 5;
  font-size: 22px;
  font-family: 'Assistant', sans-serif;
  margin-top: -17px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:620px) {
  	font-size: 22px;
  }
  @media (max-width: 520px) {
  	font-size: 20px;
  }
  @media (max-width: 420px) {
  	font-size: 17px;
    width: 250px;
  }
  @media (max-width: 336px) {
  	font-size: 17px;
    width: 250px;
  }
  @media (max-width: 316px) {
  	font-size: 15px;
    width: 250px
  }
`;

const Arrowdown = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  margin-left: -15px;
  animation: ${down} 1550ms ease-in-out infinite;
`;

const About = styled.section`
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 420px) {
  	padding: 10px;
  }
`;

const Aboutus = styled.div`
  min-height: 100vh;
  min-width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 15px;
  font-family: 'Assistant',sans-serif;
`;

const Aboutheading = styled.span`
  font-size: 55px;
  border-bottom: 1px solid white;
  padding-bottom: 7px;
`;

const Abouttext = styled.p`
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.02em;
`;


/*Main*/

export default () => <Container>
	<Main>
		<Gradientbox>
			<Logo>OSDC</Logo>
		</Gradientbox>
		<Subheading>Open Source Developers Club</Subheading>
		<Arrowdown><a href="#aboutsection"><i className="fa fa-angle-double-down fa-3x" aria-hidden="true"></i></a></Arrowdown>
	</Main>

	<About>
		<Aboutus>
			<Aboutheading>About us</Aboutheading>
			<Abouttext>
				We are an Open Source Community based in and around Jaypee Institute of Information Technology, Noida, India. A community of web developers, android freaks, machine learning enthusiasts, hackers, designers, game developers and most significantly Explorers.
				We welcome those who believe in the open source philosophy and are willing to sacrifice their naps in order to change the world.
			</Abouttext>
			<Abouttext>
				We also organise various workshops, talks and hackathons in an effort towards encouraging more people to lean into the open source world!
        		We love having late night conversations on tech and building new things. If you love the same just hop in, we are looking forward for your participation.
			</Abouttext>
		</Aboutus>
	</About>
</Container>
