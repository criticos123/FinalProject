import React, { useContext } from "react";
import { NavLink,Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Header = () => {
  const { appUser, handleSignOut } = useContext(AppContext);
  return(
    <Wrapper>
      <Homelink to="/home">
      <Title>Tournaminator</Title>
      </Homelink>
      <Navbar>
        <Text>Welcome, {appUser.displayName}</Text>
        <Homelink to="/">
        <Button onClick={handleSignOut}>Sign Out</Button>
        </Homelink>
      </Navbar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height:150px;
  background-color:#9400D3;
`;

const Title= styled.h1`
    font-size:30px;
    color: #fff;
    margin-left: 20px;
    margin-bottom:50px;
    font-family:"Arial Black", Gadget, sans-serif;
`;

const Navbar= styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #8A2BE2;
  height: 40%;
  border: 2px solid #483D8B;
  font-weight: bold;

`;
const Text= styled.p`
  text-align:left;
  color:#fff;
  margin-left:15px;
`;

const Button=styled.button`
  margin-left: 20px;
  color:#483D8B;
  border-radius:5px;
  border: 2px solid #483D8B;
  transition: all .2s ease-in-out; 

  &:hover{
    transform: scale(1.1); 
  }
  &:active{
    opacity:0.75;
  }
  
`;

const Homelink= styled(NavLink)`
  text-decoration:none;
`;
export default Header;