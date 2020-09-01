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
    commentsArray.push(newComments);
  };
  console.log(commentsArray);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Comment here:
          <input type="text" value={comments} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
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
export default Comment;
