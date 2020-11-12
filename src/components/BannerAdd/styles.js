import styled from 'styled-components';

export const Imagem = styled.img`
      width:350px;
      height:152px;
      position:relative;
      top:45%;
      left:50%;
       margin-top:-76px;
       margin-left:-175px;


      @media(max-width:800px){
        width:175px;
        height:76px;
       
        margin-top:-38px;
        margin-left:-88px;
     }

        
`;

export const Link = styled.a`
     
`;

export const Section = styled.section`
     height: 150px;

     @media(max-width:800px){
        height: 75px;
     }
`;