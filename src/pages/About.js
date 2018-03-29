import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Linkmain = styled.li`
  display: inline-block;
  font-size: 2.5rem;
  padding: 12px;
`;
const Linknormal = styled.li`
  display: inline-block;
  font-size: 1.5rem;
  padding: 12px;
`;
const HeadLinks = styled.ul`
  list-style: none;
  align-items: left;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const About = styled.h1`
 margin: 30px 600px;
 font-size: 3rem;
`;
const AboutSection = styled.p`
text-align: left;
margin: 30px 200px;
font-size: 1.5rem;
`;
export default() =><Container>
      <HeadLinks>
        <Linkmain><Link to="/">OPEN SOURCE DEVELOPERS CLUB</Link></Linkmain>
        <Linknormal><Link to="/leaderboard">Community</Link></Linknormal>
        <Linknormal><Link to="/About">About</Link></Linknormal>
      </HeadLinks>
        <About><u>About Us</u></About>
        <AboutSection>We are an Open Source Community based in and around Jaypee Institute of Information Technology, Noida, India. A community of web developers, android freaks, machine learning enthusiasts, hackers, designers, game developers and most significantly Explorers. We welcome those who believe in the open source philosophy and are willing to sacrifice their naps in order to change the world.<br></br><br></br>
We also organise various workshops, talks and hackathons in an effort towards encouraging more people to lean into the open source world! We love having late night conversations on tech and building new things. If you love the same just hop in, we are looking forward for your participation.</AboutSection>
     </Container>