import React, { useState } from "react";
import styled from "styled-components";

const TournamentEight = () => {
  const [position, setPosition] = useState({
    a: "p1",
    b: "p2",
    c: "p3",
    d: "p4",
    e: "p5",
    f: "p6",
    g: "p7",
    h: "p8",
    i: null,
    j: null,
    k: null,
    l: null,
    m: null,
    n: null,
    o: null,
    p: null,
  });

  const win = (starting, advance) => {
    if (position[starting] !== null) {
      let positionCopy = { ...position };
      let player = positionCopy[starting];
      positionCopy[advance] = player;
      setPosition(positionCopy);
    }
  };

  const reset = () => {
    let defaultPositon = {
      ...position,
      a: "p1",
      b: "p2",
      c: "p3",
      d: "p4",
      e: "p5",
      f: "p6",
      g: "p7",
      h: "p8",
      i: null,
      j: null,
      k: null,
      l: null,
      m: null,
      n: null,
      o: null,
      p: null,
    };
    setPosition(defaultPositon);
  };
  return (
    <Wrapper>
      <div class="tournament-container">
        <div class="tournament-brackets">
          <ul class="bracket bracket-1">
            <li class="team-item">
              {position.i === null ? (
                <button
                  onClick={() => {
                    win("a", "i");
                  }}
                >
                  {position.a}
                </button>
              ) : (
                <div>{position.a} </div>
              )}
            </li>
            <li class="team-item">
              {position.i === null ? (
                <button
                  onClick={() => {
                    win("b", "i");
                  }}
                >
                  {position.b}
                </button>
              ) : (
                <div>{position.b} </div>
              )}
            </li>
            <li class="team-item">
              {position.j === null ? (
                <button
                  onClick={() => {
                    win("c", "j");
                  }}
                >
                  {position.c}
                </button>
              ) : (
                <div>{position.c} </div>
              )}
            </li>
            <li class="team-item">
              {position.j === null ? (
                <button
                  onClick={() => {
                    win("d", "j");
                  }}
                >
                  {position.d}
                </button>
              ) : (
                <div>{position.d} </div>
              )}
            </li>
            <li class="team-item">
              {position.k === null ? (
                <button
                  onClick={() => {
                    win("e", "k");
                  }}
                >
                  {position.e}
                </button>
              ) : (
                <div>{position.e} </div>
              )}
            </li>
            <li class="team-item">
              {position.k === null ? (
                <button
                  onClick={() => {
                    win("f", "k");
                  }}
                >
                  {position.f}
                </button>
              ) : (
                <div>{position.f} </div>
              )}
            </li>
            <li class="team-item">
              {position.l === null ? (
                <button
                  onClick={() => {
                    win("g", "l");
                  }}
                >
                  {position.g}
                </button>
              ) : (
                <div>{position.g} </div>
              )}
            </li>
            <li class="team-item">
              {position.l === null ? (
                <button
                  onClick={() => {
                    win("h", "l");
                  }}
                >
                  {position.h}
                </button>
              ) : (
                <div>{position.h} </div>
              )}
            </li>
          </ul>
          <ul class="bracket bracket-2">
            <li class="team-item">
              {position.m === null ? (
                <button
                  onClick={() => {
                    win("i", "m");
                  }}
                >
                  {position.i}{" "}
                </button>
              ) : (
                <div>{position.i} </div>
              )}
            </li>
            <li class="team-item">
              {position.m === null ? (
                <button
                  onClick={() => {
                    win("j", "m");
                  }}
                >
                  {position.j}{" "}
                </button>
              ) : (
                <div>{position.j} </div>
              )}
            </li>
            <li class="team-item">
              {position.n === null ? (
                <button
                  onClick={() => {
                    win("k", "n");
                  }}
                >
                  {position.k}{" "}
                </button>
              ) : (
                <div>{position.k} </div>
              )}
            </li>
            <li class="team-item">
              {position.n === null ? (
                <button
                  onClick={() => {
                    win("l", "n");
                  }}
                >
                  {position.l}{" "}
                </button>
              ) : (
                <div>{position.l} </div>
              )}
            </li>
          </ul>
          <ul class="bracket bracket-3">
            <li class="team-item">
              {position.o === null ? (
                <button
                  onClick={() => {
                    win("m", "o");
                  }}
                >
                  {position.m}{" "}
                </button>
              ) : (
                <div>{position.m} </div>
              )}
            </li>
            <li class="team-item">
              {position.o === null ? (
                <button
                  onClick={() => {
                    win("n", "o");
                  }}
                >
                  {position.n}{" "}
                </button>
              ) : (
                <div>{position.n} </div>
              )}
            </li>
          </ul>
          <ul class="bracket bracket-4">
            <li class="team-item">
              <div>Winner:{position.o} </div>
            </li>
          </ul>
        </div>
      </div>
      <Reset onClick={reset}>Reset</Reset>
    </Wrapper>
  );
};
const Wrapper = styled.div`
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

    h3 {
      width: 25%;
      text-align: center;
      font-weight: 400;
      border-right: 1px dashed #ccc;
      margin: 0;
      padding: 1rem;
    }
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
    vertical-align: middle;
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

const Reset = styled.button`
  margin-bottom: 10px;
`;

export default TournamentEight;
