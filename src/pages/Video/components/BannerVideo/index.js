import React from 'react';
import IframeResponsive from '../IframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerVideo({
  GameTitle,
 
  GameDescription,
  GameURL,
  GameThumbnail
}) {
  //const youTubeID = getYouTubeId(url);
  const bgUrl = `${GameThumbnail}`    //`https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {GameTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {GameDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <IframeResponsive
            youtubeID={GameURL}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}