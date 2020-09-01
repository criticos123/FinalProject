import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { AppContext } from "./AppContext";

const SignIn = () => {
  const { signInWithGoogle } = useContext(AppContext);

  return (
    <StyledPageWrapper>
      <Container>
        <Title> WELCOME TO TOURNMINATOR</Title>
        <NavLink to="/home">
          <Button onClick={signInWithGoogle}>Sign In</Button>
        </NavLink>
      </Container>
    </StyledPageWrapper>
  );
};

const StyledPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9400d3;
  min-width: 100vw;
  min-height: 100vh;
`;

const Container = styled.div`
  box-shadow: 2px 2px 2px 2px purple;
  height: 400px;
  width: 300px;
  background: #4b0082;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  margin-bottom: 40px;
  text-align: center;
  font-family: "Arial Black", Gadget, sans-serif;
`;

const Button = styled.button`
  padding: 20px;
  font-size: 20px;
  background: #8b008b;
  color: #fff;
  box-shadow: 3px 3px darkblue;
  border: 1px solid #4b0082;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    opacity: 0.75;
  }
`;

export default SignIn;
