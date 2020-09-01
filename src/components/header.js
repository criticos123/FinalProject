import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Header = () => {
  const { appUser, handleSignOut } = useContext(AppContext);

  return (
    <Wrapper>
      <Homelink to="/home">
        <Title>Tournaminator</Title>
      </Homelink>
      <Navbar>
        <Image src={appUser.photoURL} />
        <Text>{appUser.displayName}</Text>
        <Homelink to="/">
          <Button onClick={handleSignOut}>Sign Out</Button>
        </Homelink>
      </Navbar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 150px;
  background-color: #9400d3;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  margin-left: 20px;
  margin-bottom: 50px;
  font-family: "Arial Black", Gadget, sans-serif;
`;

const Navbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #8a2be2;
  height: 40%;
  border: 2px solid #483d8b;
  font-weight: bold;
`;
const Text = styled.p`
  text-align: left;
  color: #fff;
  margin-left: 15px;
`;

const Button = styled.button`
  margin-left: 20px;
  color: #483d8b;
  border-radius: 5px;
  border: 2px solid #483d8b;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    opacity: 0.75;
  }
`;

const Homelink = styled(NavLink)`
  text-decoration: none;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  margin-left: 20px;
`;
export default Header;
