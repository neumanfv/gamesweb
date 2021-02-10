import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink, MiniBox } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem, BoxText } from './components/Slider';
import config from '../../config';

function Carousel({
  ignoreFirstGame,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const games = category.games;    //category.videos, const videos
  const categoryId = category.id;
  // <ExtraLink href={categoryExtraLink.url} target="_blank">  
  //  https://filmesweb.vercel.app , http://localhost:3000
    
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title >
          {categoryExtraLink && 
        
        <ExtraLink href={`${config.URL_SERVER}/tela/categoria/${categoryId}`} target="_blank">   
          {categoryTitle}  
        </ExtraLink>
        
        
    
      
       
      }
            
          </Title>
          
        </>
      )}
      <Slider>
        {games.map((game, index) => {   // videos, video
          if (ignoreFirstGame && index === 0 ) {
            return null;
          }
          if (index < 20 ) {
            return null;
          }

          return (
            <SliderItem key={game.titulo}>
              <VideoCard
                gameTitle={game.titulo}
                gameURL={game.url}
                categoryColor={categoryColor}
                gameId = {game.id}
                gameThumb = {game.thumbnail}
                
              />
              <BoxText  href={`${config.URL_SERVER}/tela/video/${game.id}`}  target="_blank" >
                  {game.titulo}
              </BoxText>
             
              
          
              
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
