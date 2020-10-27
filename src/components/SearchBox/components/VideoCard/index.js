import React, { useEffect, useState } from 'react';
import { VideoCardContainer } from './styles';
//import videosRepository from '../../../../repositories/videos';
import config from '../../../../config';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

 function VideoCard({ gameTitle, gameURL, categoryColor, gameId, gameThumbnail }) {

  //const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  //const image = 'https://img.elo7.com.br/product/zoom/1B9FD2E/banner-de-festa-os-vingadores-vingadores.jpg'  869x1200
  
  return (
    <VideoCardContainer
      url={gameThumbnail}
      href={`${config.URL_SERVER}/tela/video/${gameId}`}  // videoURL , https://gamesweb.vercel.app/ , http://localhost:3000/
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={gameTitle}
           
    />
  );
}

export default VideoCard;
