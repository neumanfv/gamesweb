import React, {useState, useEffect} from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Box, { BoxItem} from './components/Box';
import videosRepository from '../../repositories/videos';


function SearchBox() {
  
  const [dadosModificados, setDadosModificados] = useState([]);
  const [q, setQ] = useState(localStorage.getItem("busca"));  // "", localStorage.getItem("busca")
  
  
  useEffect(()=>{

    videosRepository.getGames()
      .then((games) => {
        setDadosModificados(games);
      })
      .catch((err) => {
        console.log(err.message);
      });
     
     
   },[q])

   
function search(rows) {
  //localStorage.removeItem("busca");
  return rows.filter((row) =>  row.titulo.toLowerCase().indexOf(q)>-1 );
  //Refresh();
}

/*function Refresh(){

    window.location.reload();
    
 }*/

  
  // <ExtraLink href={categoryExtraLink.url} target="_blank">  
  //  https://filmesweb.vercel.app , http://localhost:3000
  //    <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
  return (
    <VideoCardGroupContainer>
       <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
      
    
      <Box>
        {search(dadosModificados).map((game, index) => {        
          if (index >= 25) {
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

             
            </BoxItem>
          );
        })}
         
      </Box>
     
     
    </VideoCardGroupContainer>
   
  );
}

export default SearchBox;

