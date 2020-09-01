import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const TournamentFour = () => {
  const [position, setPosition] = useState({
    a: "p1",
    b: "p2",
    c: "p3",
    d: "p4",
    e: null,
    f: null,
    g: null,
  });

  const win = (starting, advance) => {
    if (position[starting] !== null) {
      let positionCopy = { ...position };
      let player = positionCopy[starting];
      positionCopy[advance] = player;
      setPosition(positionCopy);
    }
  };
  return (
    <Wrapper>
      <div class="tournament-container">
        <div class="tournament-headers"></div>
        <div class="tournament-brackets">
          <ul class="bracket bracket-1">
            <li class="team-item">
              {position.e === null ? (
                <button
                  onClick={() => {
                    win("a", "e");
                  }}
                >
                  {position.a}
                </button>
              ) : (
                <div>{position.a} </div>
              )}
            </li>
            <li class="team-item">
              {position.e === null ? (
                <button
                  onClick={() => {
                    win("b", "e");
                  }}
                >
                  {position.b}{" "}
                </button>
              ) : (
                <div>{position.b} </div>
              )}
            </li>
            <li class="team-item">
              {position.f === null ? (
                <button
                  onClick={() => {
                    win("c", "f");
                  }}
                >
                  {position.c}{" "}
                </button>
              ) : (
                <div>{position.c} </div>
              )}
            </li>
            <li class="team-item">
              {position.f === null ? (
                <button
                  onClick={() => {
                    win("d", "f");
                  }}
                >
                  {position.d}{" "}
                </button>
              ) : (
                <div>{position.d} </div>
              )}
            </li>
          </ul>
          <ul class="bracket bracket-2">
            <li class="team-item">
              {position.g === null ? (
                <button
                  onClick={() => {
                    win("e", "g");
                  }}
                >
                  {position.e}{" "}
                </button>
              ) : (
                <div>{position.e} </div>
              )}
            </li>
            <li class="team-item">
              {position.g === null ? (
                <button
                  onClick={() => {
                    win("f", "g");
                  }}
                >
                  {position.f}{" "}
                </button>
              ) : (
                <div>{position.f} </div>
              )}
            </li>
          </ul>
          <ul class="bracket bracket-4">
            <li class="team-item"> Winner: {position.g}</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: sans-serif;
    margin: 0;
    height: 100%;
  }

  .tournament-container {
  }

  .tournament-headers {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
  }

  .tournament-brackets {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    background: #fdfdfd;
    margin-bottom: 50px;
  }

  .bracket {
    padding-left: 0;
    display: flex;
    margin: 0;
    padding: 30px 0;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-around;
    list-style-type: none;
    border-right: 1px dashed #ccc;
    flex: 1;
  }

  .team-item {
    background-color: #f4f4f4;
    padding: 0.5rem;
    display: block;
    margin: 0.5rem 10px;
    position: relative;
    line-height: 2;
    text-align: center;
  }

  .team-item:after {
    content: "";
    border-color: #4f7a38;
    border-width: 2px;
    position: absolute;
    display: block;
    width: 10px;
    right: -11px;
  }

  .team-item:nth-of-type(odd):after {
    border-right-style: solid;
    border-top-style: solid;
    height: 100%;
    top: 50%;
  }

  .team-item:nth-of-type(even):after {
    border-right-style: solid;
    border-bottom-style: solid;
    height: 100%;
    top: -50%;
  }

  .team-item:before {
    content: "";
    border-top: 2px solid #4f7a38;
    position: absolute;
    height: 2px;
    width: 10px;
    left: -10px;
    top: 50%;
  }

  .bracket-2 {
    .team-item:nth-of-type(odd):after {
      height: 200%;
      top: 50%;
    }
    .team-item:nth-of-type(even):after {
      height: 200%;
      top: -150%;
    }
  }

  .bracket-3 {
    .team-item:nth-of-type(odd):after {
      height: 350%;
      top: 50%;
    }
    .team-item:nth-of-type(even):after {
      height: 350%;
      top: -300%;
    }
  }

  .bracket-4 {
    .team-item:nth-of-type(odd):after {
      height: 700%;
      top: 50%;
    }
    .team-item:nth-of-type(even):after {
      height: 700%;
      top: -650%;
    }
  }

  .bracket:first-of-type {
    .team-item:before {
      display: none;
    }
  }

  .bracket-4 {
    .team-item:after {
      display: none;
    }
  }

  .bracket:last-of-type {
    .team-item:before,
    .team-item:after {
      display: none;
    }
  }

  .team-item time {
    display: inline-block;
    background-color: #dbdbdb;
    font-size: 0.8rem;
    padding: 0 0.6rem;
  }
`;

export default TournamentFour;
