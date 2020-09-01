import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Comment = () => {
  const { appUser } = useContext(AppContext);
  const [comments, setComments] = useState("");
  const handleChange = (event) => {
    setComments(event.target.value);
  };
  let commentsArray = [{ comments: comments }];
  const handleSubmit = (event) => {
    event.preventDefault();
    const newComments = { comments: comments };
    commentsArray.concat(newComments);
  };
  console.log(commentsArray);
  let render;
  if (commentsArray.length > 0) {
    render = commentsArray.map((item) => {
      return <Text>{item.comments}</Text>;
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Comment here:
          <Input type="text" value={comments} onChange={handleChange} />
        </label>
        <Submit type="submit" value="Submit" />
      </form>
      <Text>{render}</Text>
    </>
  );
};

const Container = styled.div`
  display: flex;
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;
const Text = styled.p`
  font-size: 20px;
`;

const Input = styled.input`
  margin-left: 10px;
`;

const Submit = styled.input`
  margin-left: 10px;
`;
export default Comment;
