/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`


padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    transform: initial;
    &:before {
      font-size: 34px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  margin-bottom:16px;
  position:relative;
  align-items:center;

  img {
    margin: 16px;
    width: 161px;
    height: 107px;
    object-fit: cover;
  }
  :hover{
    opacity:.5;
  }

`;

export const BoxText = styled.a`
     
    font-size:12px;
    font-weight:bold;
   
  
    width: 90%;
    height: 20px;
    background-color:#000;
    color:#fff;
    opacity:.7;
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,

     

      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 2000,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 