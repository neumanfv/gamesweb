import React from 'react';

import { VideoContainer, ResponsiveIframe, GoButton } from './styles';

function YouTubeIframeResponsive({ youtubeID }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`${youtubeID}`} //https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

     <GoButton id="go-button">Enable Full Screen</GoButton>
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
