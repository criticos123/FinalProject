import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./header";
import Feed from "./Feed";
import Tournament from "./Tournament";

const TournamentPage= () => {
  return (
    <>
      <Header />
      <Wrapper>
          <Tournament/>
      </Wrapper>
      </>
  );
  
};

const Wrapper= styled.div`
  background-color:#DDA0DD;
`;

export default TournamentPage;
