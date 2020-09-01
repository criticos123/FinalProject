import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Creating = () => {
  const [name, setName] = useState("");
  const [player, setPlayer] = useState("4");
  const { tourney, setTourney } = useContext(AppContext);
  console.log(tourney);
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handlePlayerChange = (event) => {
    setPlayer(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const uniqueId = Math.floor(Math.random() * 10000);
    if (tourney) {
      fetch(`/tournament/:id`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: name,
          started: false,
          players: player,
          id: uniqueId,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          setTourney(json.mapTournaments);
        });
    }
    const newTourney = {
      name: name,
      started: false,
      players: player,
      id: uniqueId,
    };

    if (name === "") {
      alert("error no name given");
    } else {
      setTourney([...tourney, newTourney]);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Tournament Name:
        <InputText type="text" value={name} onChange={handleChange} />
        <Players>players:</Players>
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
  margin-left: 10px;
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

const Players = styled.span`
  margin-left: 10px;
`;
export default Creating;
