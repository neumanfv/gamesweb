import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  gameTitle,
  gameDescription,
  url,
  gameThumbnail,
}) {
  /*const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;*/
  //  backgroundImage={bgUrl}
  return (
    <BannerMainContainer backgroundImage={gameThumbnail}> 
      <ContentAreaContainer >
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {gameTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {gameDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={url}  //youtubeID
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
