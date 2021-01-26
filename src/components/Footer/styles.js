import styled from 'styled-components';


export const FooterBase = styled.footer`
  
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
 
  text-align: center;

  background:  #F7F7F7;
  border-top: 2px solid #EEE;
  color: #42413C;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const SocialImage = styled.img`
  height:40px;
  width:40px;
`;

export const InternalBox = styled.section`
  
  
`;

export const ParentBox =styled.section`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`;

export const SocialLink = styled.a`
  margin-right:5px;
  :hover{
    opacity:.5
  }
`;
export const TermsLink = styled.a`
  margin-right:35px;
  text-decoration:none;

  :hover{
    opacity:.5
  }
`;

