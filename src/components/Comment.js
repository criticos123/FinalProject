import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Comment = () => {
  const { appUser } = useContext(AppContext);
  const [comments, setComments] = useState([]);
  const [state, setState] = useState("");
  console.log(appUser);
  const handleChange = (event) => {
    setState(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newComments = { comments: state };
    setComments(comments.concat(newComments));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Comment here:
          <Input type="text" value={state} onChange={handleChange} />
        </label>
        <Submit type="submit" value="Submit" />
      </form>
      <Commentsection>
        {comments.map((item) => {
          return (
            <Container>
              <Avatar src={appUser.photoURL} />
              {appUser.displayName}: <Smalltext>{item.comments}</Smalltext>
            </Container>
          );
        })}
      </Commentsection>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #f0ffff;
  width: 30%;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: bold;
  color: black;
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  margin-top: 5px;
  margin-left: 8px;
  margin-right: 8px;
`;

const Input = styled.input`
  margin-left: 10px;
`;

const Submit = styled.input`
  margin-left: 10px;
`;

const Smalltext = styled.p`
  font-weight: normal;
  margin-left: 8px;
`;

const Commentsection = styled.div`
  width: 70%;
  overflow-y: scroll;
  border: 1px solid lightgray;
  margin-top: 10px;
  height: 35vh;
`;
export default Comment;
