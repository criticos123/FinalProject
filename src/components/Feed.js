import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const Feed = () => {
  const generateId = (event) => {
    event.preventDefault();
    console.log("hello");
  };

  return (
    <Wrapper onSubmit={generateId}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  margin: auto;
  border: 2px solid black;
  height: 300px;
`;

export default Feed;
