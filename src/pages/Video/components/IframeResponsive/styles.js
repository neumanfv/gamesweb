import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  display:flex;
  flex-direction:column;
  
  align-items:center;
  @media (max-width: 800px) {
   
  }

  
`;
// height: 100%; em baixo
export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
 
  
`;







