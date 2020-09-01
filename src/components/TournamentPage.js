import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";
import TournamentFour from "./TournamentFour";
import Comment from "./Comment";
import TournamentEight from "./TournamentEight";
import { AppContext } from "./AppContext";

const TournamentPage = () => {
  const { tourney } = useContext(AppContext);
  console.log(tourney);
  let { id } = useParams();

  const findPlayer = tourney.find((e) => e.id.toString() === id);
  console.log(findPlayer);
  if (findPlayer !== undefined) {
    return (
      <>
        <Header />
        <Wrapper>
          {findPlayer.players === "4" ? (
            <TournamentFour />
          ) : (
            <TournamentEight />
          )}
          <Comment />
        </Wrapper>
      </>
    );
  } else {
    return <div> Loading..</div>;
  }
};

const Wrapper = styled.div``;

export default TournamentPage;
