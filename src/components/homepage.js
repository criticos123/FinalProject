import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";
import Feed from "./Feed";
import Creating from "./Creating";

const Homepage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Content>
          <Title>Tournament Feed: </Title>
          <Creating />
          <Feed />
        </Content>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #dda0dd;
`;
const Content = styled.div`
  background-color: #fff;
  width: 600px;
  height: 77vh;
  overflow-y: scroll;
  margin-left: 30%;
  border: 2px solid #483d8b;
`;

const Title = styled.h3`
  margin-left: 20px;
`;

const Products = styled.div``;

const Container = styled.div`
  border: 2px solid #483d8b;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Join = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 15px;
  background: #8b008b;
  color: #fff;
  width: 10vw;
  height: 30px;
  border: 1px solid #4b0082;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    opacity: 0.75;
  }
`;

const Gametitle = styled.p`
  font-size: 20px;
`;
export default Homepage;
