import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./header";
import { AppContext } from "./AppContext";

const Profile = () => {
  const { appUser } = useContext(AppContext);
  return (
    <>
      <Header />
      <Wrapper>
        <Avatar src={appUser.photoURL} />
        <Text>
          <Profilename>{appUser.displayName}</Profilename>
          <p>{appUser.email}</p>
          <Friends>Friends:</Friends>
          <Trophies>Trophies:</Trophies>
        </Text>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
  background-color: #fff;
  border: 2px solid lightgray;
  width: 70vw;
  height: 60vh;
  display: flex;
`;

const Profilename = styled.h3``;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-left: 20px;
  margin-top: 30px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Friends = styled.div`
  display: flex;
  flex-direction: column;
`;

const Trophies = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Profile;
