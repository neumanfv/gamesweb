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
     
`;

export const Section = styled.section`
     height: 200px;

     @media(max-width:800px){
        height: 100px;
     }
`;