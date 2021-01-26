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
  
  img {
    margin: 15px;
    width: 151px;
    height: 100px; 
    object-fit: cover;
   
  }
  :hover{
    opacity:.5;
  }
`;

export const BoxText = styled.a`
     
    font-size:12px;
    font-weight:bold;
    text-decoration:none;
    position:absolute;
    bottom:0px; 
    

    width: 100%;
    height: 20px;
    background-color:#000;
    color:#fff;
    opacity:.7;
    border-radius:0 0 10px 10px;
    text-align:center;
    line-height:20px;
    overflow:hidden;

    &:hover, &:focus{
     
      cursor:pointer;
    }
  
     

`;




const Box = ({ children }) => (
  <Container>

      {children}
   
  </Container>
);

export default Box; 