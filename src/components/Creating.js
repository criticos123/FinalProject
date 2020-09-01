import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Creating = () => {
  const [name, setName] = useState("");
  const [player, setPlayer] = useState("");
  const { tourney, setTourney } = useContext(AppContext);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handlePlayerChange = (event) => {
    setPlayer(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const uniqueId = Math.floor(Math.random() * 10000);
    const newTourney = {
      name: name,
      started: false,
      players: player,
      id: uniqueId,
    };
    setTourney(tourney.concat(newTourney));
  };
  console.log(tourney);
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Tournament Name:
        <InputText type="text" value={name} onChange={handleChange} />
        Number of players:
        <select value={player} onChange={handlePlayerChange}>
          <option value="4">4</option>
          <option value="8">8</option>
        </select>
      </Label>
      <Inputbutton type="submit" value="Create Tournament" />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;
const Inputbutton = styled.input`
  color: #fff;
  background-color: #8a2be2;
  margin-left: 10px;
`;
const InputText = styled.input`
  margin-left: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;
export default Creating;
