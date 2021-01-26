import styled from 'styled-components';

export const BigCard = styled.a`
border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 150px;
  width: 150px;
  height: 100px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 5px;
  
  margin:5px 20px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media(max-width:800px){
    flex: 0 0 454px;
     width: 454px;
     height: 300px;
  }



`;

export const RightCards = styled.a`

  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  
  color: white;
  flex: 0 0 151px;
  
  width: 151px;
  height: 100px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 10px;
  
  margin:5px 5px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 5px;
  }

  @media(max-width:800px){
    flex: 0 0 151px;
     width: 151px;
     height: 100px;
    

    &:not(:first-child) {
      margin-left: 5px;
  }
  }

`;

export const BottomCards = styled.a`

border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 227px;
  width: 227px;
  height: 150px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  margin:5px 5px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media(max-width:800px){
    flex: 0 0 151px;
     width: 151px;
     height: 100px;
    

    &:not(:first-child) {
    margin-left: 5px;
  }
  }

`;

export const Title = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-decoration:none;
  cursor:default;
 
  border-radius: 4px;
   color:white;
   margin-left:15px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
    margin-left:5px;
  }
`;

export const ButtonAdd = styled.a`

   width:30px;
   height:30px;
   background:#42413C;
   font-size:18px;
   line-height:30px;
   margin-bottom:5px;
   text-align:center;
   font-weight:bold;
   margin-right:15px;
   text-decoration:none;
   border-radius:5px;

   :hover{
     opacity:.5;
     cursor:pointer;
   }

`;

export const HeaderAdd = styled.div`
display:flex;
flex-direction:row;  
justify-content:space-between;
align-items:center;
 
  width:100%;

`;

export const TopContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin:10px 10px;
background-color:#009FE3;
border-radius:20px;
min-height:100px
width:20%;
border: 5px solid #009FE3;

`;
export const BottomContainer = styled.div`
display:flex;
flex-direction:row;

justify-content:center;
align-items:center;
flex-wrap:wrap;
margin:10px 0;
`;

export const Container = styled.div`
display:flex;
flex-direction:row;

justify-content:center;
align-items:center;
flex-wrap:wrap;
margin:10px 0;
width:100%;

`;

export const FullContainer = styled.div`
background-color:#F7F7F7;
border-radius:15px;
align-items:center;
justify-content:center;


`;


export const RightContainer = styled.div`
display:flex;
flex-direction:column;

`;
export const InnerRightContainer = styled.div`
display:flex;
flex-direction:Row;
align-items:center;
justify-content:center;


`;




export const BoxText = styled.a`
     
    font-size:12px;
    font-weight:bold;

    width: 100%;
    height: 20px;
    background-color:#000;
    color:#fff;
    opacity:.7;
    border-radius:0 0 8px 8px;
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


