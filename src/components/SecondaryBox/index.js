import React, {useState, useEffect} from 'react';
import Box, {BoxItem, BoxText, VideoCardGroupContainer} from './styles';
import VideoCard from './components/VideoCard';



import config from '../../config';

import dadosInternos from '../../data/dados_iniciais.json';


function SecondaryBox() {
  
  const [dadosModificados, setDadosModificados] = useState([]);
 

   useEffect(() => {
    
    
    setDadosModificados(dadosInternos.games);
    

  }, []);

   

  return (
   
      <VideoCardGroupContainer>
    
      <Box> 
        {dadosModificados.map((game, index) => {        
          if (index >= 5) {
            return null;
          }  

          return (
            <BoxItem key={game.id}>
              <VideoCard
                gameTitle={game.titulo}
                gameURL={game.url}
                categoryColor="#FF0000"
                gameId = {game.id}
                gameThumbnail={game.thumbnail}
                
              />
              <BoxText  href={`${config.URL_SERVER}/tela/video/${game.id}`}  target="_blank" title={game.titulo} >
                  {game.titulo}
              </BoxText>
             
            </BoxItem>
          );
        })}
         
      </Box>
     
      </VideoCardGroupContainer>
      
   
  );
}

export default SecondaryBox;