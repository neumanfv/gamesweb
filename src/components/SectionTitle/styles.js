import styled from 'styled-components';

export const Imagem = styled.img`
      width:1060px;
      height:176px;
      position:relative;
      top:45%;
      left:50%;
       margin-top:-88px;
       margin-left:-530px;


      @media(max-width:800px){
        width:400px;
        height:68px;
       
        margin-top:-34px;
        margin-left:-200px;
     }

        
`;

export const Link = styled.a`
     text-decoration:none;
     font-size:18px;
     padding-left:2%;
     cursor:default;
`;

export const Title = styled.h3`
font-size:20px;
font-weight:300;
padding-left:2%;
font-family:arial;


`;

export const Section = styled.section`
     height: 40px;
     background:#009FE3;
     margin-bottom:10px;
     margin-right:40px;
     margin-left:40px;
     color:white;
     line-height:40px;
     border-radius:10px;

     @media(max-width:800px){
        height: 40px;
     }
`;