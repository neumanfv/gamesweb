import React, {useState, useEffect} from 'react';
import { VideoCardGroupContainer, Title, ExtraLink, InputSearch, NoFound } from './styles';
import VideoCard from './components/VideoCard';
import Box, { BoxItem, BoxText} from './components/Box';
import videosRepository from '../../repositories/videos';
import config from '../../config';

import dadosInternos from '../../data/dados_iniciais.json';


function SearchBox() {
  
  const [dadosModificados, setDadosModificados] = useState([]);
  const [q, setQ] = useState(localStorage.getItem("busca"));  // "", localStorage.getItem("busca")
  const gamestotais =[];
  
  /*useEffect(()=>{

    videosRepository.getGames()
      .then((games) => {
        setDadosModificados(games);
      })
      .catch((err) => {
        console.log(err.message);
      });
     
     
   },[q]) */

   useEffect(() => {
    
    
    setDadosModificados(dadosInternos.games);
    

  }, [q]);

   
function search(rows) {
  //localStorage.removeItem("busca");
  return rows.filter((row) =>  row.titulo.toString().toLowerCase().indexOf(q)>-1 );
  //Refresh();
  
}

/*function Refresh(){

    window.location.reload();
    
 }*/
 
  
  // <ExtraLink href={categoryExtraLink.url} target="_blank">  
  //  https://filmesweb.vercel.app , http://localhost:3000
  //    <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
  //   <InputSearch placeholder="Search Game" type="text" value={q} onChange={(e) => setQ(e.target.value)} />
  return (
   
    
    <VideoCardGroupContainer>
      {search(dadosModificados).length === 0 && (<NoFound>no results found..</NoFound>)}  
    
      <Box>
        
    
        {search(dadosModificados).map((game, index) => {        
          if (index >= 50) {
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
              <BoxText  href={`${config.URL_SERVER}/tela/video/${game.id}`}  target="_blank" >
                  {game.titulo}
              </BoxText>
             
            </BoxItem>
            
          );
        })}
         
      </Box>
     
     
    </VideoCardGroupContainer>
   
  );
}

export default SearchBox;

