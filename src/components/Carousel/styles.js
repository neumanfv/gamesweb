import styled from 'styled-components';

export const Title = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 0.2;
  margin-bottom: 5px;
  display: inline-block;
  padding-left: 10px;
  background: transparent;
  border-radius: 4px;

  width:100%;

  

  @media (max-width: 800px) {
    font-size: 18px;
    padding-left: 10px;
  }
`;

export const ExtraLink = styled.a`

display : flex;
flex-direction:row;
align-items:center; 

margin-bottom:15px;
margin-top:15px; 

text-decoration: none;
  transition: opacity .3s;
  &:hover{
    opacity: .5;
  }
  @media (max-width: 800px) {
    
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
  min-height: 150px;
  margin-left: 5%;
  margin-bottom: 16px;
  justify-content:center;
  align-items:center;
  background-color:#009FE3;
  width:90%;
  border-radius:15px;

  &:first-child {
    margin-top: 40px;
  }
`;

export const MiniBox  = styled.h6`
font-size:15px;
margin-left:10px;
:hover{
  opacity: .5;
}
@media (max-width: 800px) {
    
  font-size:10px;
}


`;
