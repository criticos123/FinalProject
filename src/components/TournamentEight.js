import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const TournamentEight = () => {
  return (
    <Wrapper>
      <div class="tournament-container">
        <div class="tournament-headers">
          <h3>Round of 16</h3>
          <h3>Quarter-Finals</h3>
          <h3>Semi-Finals</h3>
          <h3>Final</h3>
          <h3>Winner</h3>
        </div>

        <div class="tournament-brackets">
          <ul class="bracket bracket-1">
            <li class="team-item">
              A2 <time>14:00</time> C2
            </li>
            <li class="team-item">
              D1 <time>20:00</time> 3BEF
            </li>
            <li class="team-item">
              B1 <time>17:00</time> 3ACD
            </li>
            <li class="team-item">
              F1 <time>20:00</time> E2
            </li>
            <li class="team-item">
              C1 <time>17:00</time> 3ABF
            </li>
            <li class="team-item">
              E1 <time>17:00</time> D2
            </li>
            <li class="team-item">
              A1 <time>14:00</time> 3CDE
            </li>
            <li class="team-item">
              B2 <time>20:00</time> F2
            </li>
          </ul>
          <ul class="bracket bracket-2">
            <li class="team-item">
              QF1 <time>20:00</time> QF2
            </li>
            <li class="team-item">
              QF3 <time>20:00</time> QF4
            </li>
            <li class="team-item">
              QF5 <time>20:00</time> QF6
            </li>
            <li class="team-item">
              QF7 <time>20:00</time> QF8
            </li>
          </ul>
          <ul class="bracket bracket-3">
            <li class="team-item">
              SF1 <time>20:00</time> SF2
            </li>
            <li class="team-item">
              SF3 <time>20:00</time> SF4
            </li>
          </ul>
          <ul class="bracket bracket-4">
            <li class="team-item">
              F1 <time>20:00</time> F2
            </li>
          </ul>

          <ul class="bracket bracket-5">
            <li class="team-item">European Champions</li>
          </ul>
        </div>
      </div>
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
export default TournamentEight;
