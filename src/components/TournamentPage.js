import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./header";
import TournamentFour from "./TournamentFour";
import Comment from "./Comment";
import TournamentEight from "./TournamentEight";
import { AppContext } from "./AppContext";

const TournamentPage = () => {
  const { tourney } = useContext(AppContext);
  console.log(tourney);
  let players = "4";
  return (
    <>
      <Header />
      <Wrapper>
        {players === "4" ? <TournamentFour /> : <TournamentEight />}
        <Comment />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default TournamentPage;
