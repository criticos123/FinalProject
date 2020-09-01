import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Feed = () => {
  const { tourney } = useContext(AppContext);

  let productRender;
  if (tourney) {
    productRender = tourney.map((item) => {
      return (
        <Container>
          <Gametitle>{item.name}</Gametitle>
          <Players>players:{item.players}</Players>
          {item.started === false ? (
            <Join to={`/tournament/${item.id}`}>Join</Join>
          ) : (
            <Cannot>Cannot Join it has started</Cannot>
          )}
        </Container>
      );
    });
  }
  return <Wrapper>{productRender}</Wrapper>;
};

const Wrapper = styled.div``;

const Container = styled.div`
  border: 2px solid #483d8b;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Join = styled(NavLink)`
  font-size: 18px;
  width: 10vw;
  height: 50px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #8b008b;
  color: #fff;
  border: 1px solid #4b0082;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    opacity: 0.75;
  }
`;
const Cannot = styled.span`
  padding: 20px;
  font-size: 15px;
  background: #dcdcdc;
  color: #fff;
  width: 10vw;
  height: 30px;
`;
const Gametitle = styled.p`
  font-size: 20px;
`;

const Players = styled.span`
  font-size: 15px;
`;

export default Feed;
