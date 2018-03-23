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
       
     </Container>