import React from 'react';
import IframeResponsive from '../IframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton, PlayFullScreen } from './styles';

import fullscreen from '../../../../assets/img/fullscreen.png';
import BannerAddVideo from '../../../../components/BannerAddVideo';

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
          <BannerAddVideo/>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <IframeResponsive
            youtubeID={GameURL}
          />
          
          <PlayFullScreen id= "go-button" src={fullscreen}/>
        </ContentAreaContainer.Item>
       
       
      </ContentAreaContainer>
     
    </BannerMainContainer>
  );
}