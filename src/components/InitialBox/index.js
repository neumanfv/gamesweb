import React, {useState, useEffect} from 'react';
import { VideoCardGroupContainer, Title, ExtraLink, InputSearch } from './styles';
import VideoCard from './components/VideoCard';
import Box, { BoxItem, BoxText} from './components/Box';
//import videosRepository from '../../repositories/videos';
import config from '../../config';

import dadosInternos from '../../data/dados_iniciais.json';


function InitialBox() {
  
  const [dadosModificados, setDadosModificados] = useState([]);
 

   useEffect(() => {
    
    
    setDadosModificados(dadosInternos.games);
    

  }, []);

   

  return (
    <VideoCardGroupContainer>
      
      
    
      <Box>
        {dadosModificados.map((game, index) => {        
          if (index >= 28) {
            return null;
          }  

          return (
            <BoxItem key={game.id}>
              <VideoCard
                gameTitle={game.titulo}
                gameURL={game.url}
                categoryColor="#000000"
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

export default InitialBox;

