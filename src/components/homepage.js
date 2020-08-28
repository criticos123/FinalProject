import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import styled from "styled-components";
import Header from "./header";
import Feed from "./Feed";

const Homepage = () => {
   let [product, setProduct] = useState();
     useEffect(() => {
     fetch(`/tournament`)
      .then((res) => res.json())
      .then((data)=>setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(product)
  let productRender;
  if(product){
    productRender= product.map((item)=>{
      return(
      <Container>
      <Gametitle>{item.name}</Gametitle>
      
      <span>Started: {item.started}</span>
      { item.started==="no" ? <NavLink to="/tournament">
      <Join>Join</Join>
      </NavLink> : <NavLink to="/tournament"> <Join>View</Join></NavLink>}
      </Container>
      ) ;
    })
  }
  return (
    <>
      <Header />
      <Wrapper>
        <Content>
          <Title>Tournament Feed: </Title>
          <Products>
            {productRender}
          </Products>
        </Content>
      </Wrapper>
      </>
  );
  
};

const Wrapper= styled.div`
  background-color:#DDA0DD;

`;
const Content= styled.div`
  background-color: #fff;
  width: 600px;
  height:77vh;
  overflow-y: scroll;
  margin-left:30%;
  border: 2px solid #483D8B;
`;

const Title= styled.h3`
  margin-left:20px;
`;

const Products= styled.div`
`;

const Container= styled.div`
   border: 2px solid #483D8B;
   display:flex;
   justify-Content:space-between;
   padding:20px;
   margin-bottom:20px;
   font-weight:bold;
`;

const Join= styled.button`
  padding-left:10px;
  padding-right:10px;
  font-size:15px;
  background:#8B008B;
  color:#fff;
  width:10vw;
  height: 30px;
  border: 1px solid #4B0082 ;
  transition: all .2s ease-in-out; 

  &:hover{
    transform: scale(1.1); 
  }
  &:active{
    opacity:0.75;
  }
`;

const Gametitle= styled.p`
  font-size:20px;
`;
export default Homepage;
