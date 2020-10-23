import React, {useState, useEffect} from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Box, { BoxItem, BoxText} from './components/Box';
import Pagination from '../Pagination';

function Stand({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const [games, setGames] = useState(category.games);   //videos
  const categoryId = category.id;

  const [total, setTotal] = useState(games.length);    
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesShown, setGamesShown] = useState([]);

    
  function loadPages(){
    
    const totalPages = Math.ceil(total/ limit); 
    var arrayPages = [];
       for (let i = 1; i <= totalPages; i++) {
         arrayPages.push(i);
      } 
  
      setPages(arrayPages); 
      
  }


  useEffect(()=>{

    
      loadgames();

   },[currentPage, limit, total])

   
   
   function loadgames (){
        
    const totalPages = Math.ceil(total/ limit);  // total, search(dadosModificados).length
    loadPages();

     
    var resultado = [[]];
    var grupo = 0;
    
    
    for (var indice = 0; indice < total ; indice++) {  // total, search(dadosModificados).length
      if (resultado[grupo] === undefined) {
        resultado[grupo] = [];
        
      }
 
     resultado[grupo].push(games[indice]); //  videos, search(dadosModificados)
    
 
     if ((indice + 1) % totalPages === 0) {  
       grupo = grupo + 1;
      
     }
    }
    
    resultado = [resultado[0]].concat(resultado);
    setGamesShown(resultado[currentPage]);    // setVideosShown(resultado[currentPage]), search(dadosModificados)
    
   
    
  }
  
  // <ExtraLink href={categoryExtraLink.url} target="_blank">  
  //  https://filmesweb.vercel.app , http://localhost:3000
   //  <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
         
        </>
      )}
      
    
      <Box>
        {gamesShown.map((game, index) => {       //videosShown, search(dadosModificados) --> tirar paginação, if (ignoreFirstVideo && index === 0) { return null;}  
          if (index >= 25) {
            return null;
          }  

          return (
            <BoxItem key={game.titulo}>
              <VideoCard
                gameTitle={game.titulo}
                gameURL={game.url}
                categoryColor={categoryColor}
                gameId = {game.id}
                gameThumbnail = {game.thumbnail}
                
              />

              <BoxText  href={`https://gamesweb.vercel.app/tela/video/${game.id}`}  target="_blank" >
                  {game.titulo}
              </BoxText>
              
             
            </BoxItem>
          );
        })}
         
      </Box>
     
      <Pagination total = {total} pages = {pages} currentPage = {currentPage} setCurrentPage={setCurrentPage}/>
    </VideoCardGroupContainer>
   
  );
}

export default Stand;

