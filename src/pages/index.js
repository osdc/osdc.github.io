import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const keyframes = styled.keyframes;

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
`;
const Logo = styled.div`
  box-sizing: border-box;
  margin: 140px 520px;
  display: flex;
  border-radius: 50px;
  border: 5px solid red;
  text-shadow: 2px 2px 10px red;
  font-size: 10rem;
  padding: 30px 30px;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const Body = styled.body`
 background: black;
`;
 export default({children}) =><Body><Container>
      <HeadLinks>
        <Linkmain><Link to="/">OPEN SOURCE DEVELOPERS CLUB</Link></Linkmain>
        <Linknormal><Link to="/leaderboard">Community</Link></Linknormal>
        <Linknormal><Link to="/About">About</Link></Linknormal>
      </HeadLinks>
    <Logo>
        OSDC
    </Logo>
</Container></Body>