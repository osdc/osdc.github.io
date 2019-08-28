import React from "react";
import styled, { keyframes , createGlobalStyle } from "styled-components";
import Monoton from '../../styles/fonts/Monoton-Regular.ttf';
import Assistant from '../../styles/fonts/Assistant-ExtraLight.ttf';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

library.add(faAngleDoubleDown);

/*Styled Components*/

const GlobalStyle = createGlobalStyle`
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
  font-size: 23px;
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
    font-size: 19px;
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
  margin-bottom: 45px;
`;

const Abouttext = styled.p`
  font-size: 23px;
  font-weight: 400;
  letter-spacing: 0.02em;
  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

/* Contact links */

const ContactSection = styled.div`
  min-height: 400px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0px;
  background-color: black;
  color: white;
  font-family: 'Assistant', sans-serif;

  @media (max-width: 420px) {
    padding-top: 40px;
  }
`;

const FindHead = styled.div`
  font-size: 55px;
  padding-bottom: 7px;
  border-bottom: 1px solid white;

  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

const IconsContainer = styled.div`
  min-height: 150px;
  width: 75%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const GithubLink = styled.div`
  width: 180px;
  border: 1px solid #f50057;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  font-family: 'Assistant', sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #f50057;
  transition: all 180ms ease-in-out;

  &:hover {
    box-shadow: inset 210px 0px 0 0 #f50057;
    cursor: pointer;
    color: black;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

const TelegramLink = styled.div`
  width: 180px;
  border: 1px solid #ffca28;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  font-family: 'Assistant', sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #ffca28;
  transition: all 180ms ease-in-out;

  &:hover {
    box-shadow: inset 210px 0px 0 0 #ffca28;
    cursor: pointer;
    color: black;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

const FacebookLink = styled.div`
  width: 180px;
  border: 1px solid #00b0ff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  font-family: 'Assistant', sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #00b0ff;
  transition: all 180ms ease-in-out;

  &:hover {
    box-shadow: inset 210px 0px 0 0 #00b0ff;
    cursor: pointer;
    color: black;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

const BlogLink = styled.div`
  width: 180px;
  border: 1px solid #76ff03;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  font-family: 'Assistant', sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #76ff03;
  transition: all 180ms ease-in-out;

  &:hover {
    box-shadow: inset 210px 0px 0 0 #76ff03;
    cursor: pointer;
    color: black;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

const Alink = styled.a`
  text-decoration: none;
  outline: none !important;

  &:focus {
    outline: none;
    text-decoration: none;
  }

  &:active {
    outline: none;
    text-decoration: none;
  }
`;

const handleArrowClick = (e) => {
  e.preventDefault();

  // get the id of the element to scroll to. e.g. "#aboutsection"
  const targetQuery = e.currentTarget.getAttribute('href');

  // scroll the element into view
  document.querySelector(targetQuery).scrollIntoView({ behavior: 'smooth' });

  // set the URL hash to the href attribute
  if (window.history.state) {
    window.history.pushState(null, null, targetQuery);
  } else {
    window.location.hash = targetQuery;
  }
};

/* Main */

export default () => <Container>
  <GlobalStyle />
  <Helmet>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Home Page for the Open Source Developers Community" />
  <title>OSDC</title>
  <link rel="icon" type="image/png" href="https://avatars1.githubusercontent.com/u/919383?s=200&v=4" sizes="16x16" />
  </Helmet>
  <Main>
    <Gradientbox>
      <Logo>OSDC</Logo>
    </Gradientbox>
    <Subheading>Open Source Developers Club</Subheading>
    <Arrowdown><a href="#aboutsection" onClick={handleArrowClick}><FontAwesomeIcon icon="angle-double-down" color="#ffca28" size="2x" /></a></Arrowdown>
  </Main>

  <About id="aboutsection">
    <Aboutus>
      <Aboutheading>About us</Aboutheading>
      <Abouttext>
        We are an Open Source Community based in and around Jaypee Institute of Information Technology, Noida, India. A community of web developers, android freaks, machine learning enthusiasts, hackers, designers, game developers and most significantly Explorers.
        We welcome those who believe in the open source philosophy and are willing to sacrifice their naps in order to change the world.
      </Abouttext>
      <Abouttext>
        We also organize various workshops, talks and hackathons in an effort towards encouraging more people to lean into the open source world!
            We love having late night conversations on tech and building new things. If you love the same just hop in, we are looking forward for your participation.
      </Abouttext>
    </Aboutus>
  </About>

  <ContactSection>
    <FindHead>Find us on</FindHead>
    <IconsContainer>
      <Alink href="https://github.com/osdc/" target="_blank">
         <GithubLink>
          <span>GITHUB</span>
         </GithubLink>
      </Alink>
      <Alink href="https://t.me/jiitosdc" target="_blank">
        <TelegramLink>
          <span>TELEGRAM</span>
        </TelegramLink>
      </Alink>
      <Alink href="https://www.facebook.com/groups/jiitlug/" target="_blank">
        <FacebookLink>
         <span>FACEBOOK</span>
        </FacebookLink>
      </Alink>
      <Alink href="https://osdc.github.io/blog/" target="_blank">
        <BlogLink>
          <span>BLOG</span>
        </BlogLink>
      </Alink>
    </IconsContainer>
  </ContactSection>
</Container>
