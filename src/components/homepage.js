import React from "react";
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

export default Homepage;
