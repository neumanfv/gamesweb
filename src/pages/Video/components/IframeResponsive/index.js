import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';


// src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=0`}  
//  src={`https://html5.gamedistribution.com/296513dd41894e5da420eb200209117d/`}
// <GoButton id="go-button">Enable Full Screen</GoButton> após responsiveiframe e dentro de videocontainer
function IframeResponsive({ youtubeID }) {
  return (
    <>
    <VideoContainer id="element">
      <ResponsiveIframe id="iframeR"
        title="Titulo do Iframe"
        src={`${youtubeID}`} 
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      
      />
     
     </VideoContainer>
    
   </>
     
  );
}




export default IframeResponsive;