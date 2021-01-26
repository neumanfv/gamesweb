/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
//import SlickSlider from 'react-slick';
import styled from 'styled-components';
// BoxItem height: 197px;
const Container = styled.ul`
  padding: 0;
  margin: 0;
  display:flex;
  flex-direction:row;
  flex-flow: row wrap;
  list-style-type:none;

  @media(max-width:800px){
    justify-content:center;


  }

`;

export const BoxItem = styled.li`
  margin-right: 16px;
  margin-bottom:16px;
  
 
  position:relative;
 :hover{
    opacity:.5;
  }
  
  img {
    margin: 15px;
    width: 151px;
    height: 100px; 
    object-fit: cover;
   
  }
`;

export const BoxText = styled.a`
     
    font-size:12px;
    font-weight:bold;

    width: 100%;
    height: 20px;
    background-color:#000;
    color:#fff;
    opacity:.9;
    border-radius:0 0 10px 10px;
    text-align:center;
    line-height:20px;
    overflow:hidden;
    
   
    

    text-decoration:none;
    position:absolute;
    bottom:0px;
     
    &:hover, &:focus{
     
      cursor:pointer;
    }
  
     

`;









export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

export const CompleteSection = styled.section`
   display:flex;
   flex-direction:column;

`;

export const SuperiorSection = styled.section`
   
`;

export const InferiorSection = styled.section`
`;

export const InputSearch = styled.input`
  margin-top:35px;
  margin-bottom:5px;
  height:30px;
  width:250px;
`;










const Box = ({ children }) => (
  <Container>

      {children}
   
  </Container>
);

export default Box; 