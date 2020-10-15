import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  display:flex;
  flex-direction:column;
  @media (max-width: 800px) {
    display: none;
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
  height: 94%;
  
`;

export const GoButton = styled.button`
  position: absolute; 
  width: 200px;
  height:6%;
  display: block;
  left:50%;
  margin-left:-100px;
  bottom:0;
  
`;
