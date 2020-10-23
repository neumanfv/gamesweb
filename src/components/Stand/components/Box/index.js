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
`;

export const BoxItem = styled.li`
  margin-right: 16px;
  margin-bottom:16px;
  position:relative;
  
  img {
    margin: 15px;
    width: 298px;
    height: 197px; 
    object-fit: cover;
   
  }
  :hover{
    opacity:.5;
  }
`;

export const BoxText = styled.a`
     
    font-size:20px;
    font-weight:bold;
    text-decoration:none;
    position:absolute;
    bottom:10px; 
    left:30px; 
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