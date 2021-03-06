import React, { useEffect, useState } from 'react';
import dadosInternos from '../../data/dados_iniciais.json';
import BannerVideo from './components/BannerVideo';
import PageDefault from '../../components/PageDefault';
import videosRepository from '../../repositories/videos';
import BannerAdd from '../../components/BannerAdd';

function Video() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [dadosInterior, setDadosInterior] = useState([]);
 

  var url_atual = window.location.href;
  //console.log(typeof(url_atual)); 
  var numero = url_atual.split('/');
  var id = numero[5];

  function selectgame(allGames, id){
     allGames.map((game)=>{
       if(game.id==id){
          setDadosInterior(game);  
          return "";
         
       }
     }) 

  }

 /* var stringURL =  dadosIniciais.url;
  let params = new URLSearchParams(stringURL); //  ('abc=foo&def=%5Basf%5D&xyz=5');
  const youbeID =   params.get('https://www.youtube.com/watch?v'); //   ("abc") */
            
            //const string = 'fdvkdfkv=34ytoi98u'  
            //const id = string.split('v=')[1].substring(0, 11);
            //const youtubeID = YouTubeGetID(url);
            //const youtubeID = '5b9Z8toVaAU'; 
  
  useEffect(() => {
      
      selectgame(dadosInternos.games,id);
 
      

  },[]);

   /* videosRepository.getGame(id)
      .then((Gameselecionado) => {
            setDadosIniciais(Gameselecionado);
        })
      .catch((err) => {
        console.log(err.message);
      });
         }, []);  


  

  
      <BannerVideo
       GameTitle={dadosIniciais.titulo}
       GameDescription={dadosIniciais.description}
       GameURL={dadosIniciais.url}
       GameThumbnail={dadosIniciais.thumbnail}
            
       />

          {dadosInterior.map((game) => {
            if(game.id === id){
            return (

              <BannerVideo
              GameTitle={game.titulo}
              GameDescription={game.description}
              GameURL={game.url}
              GameThumbnail={game.thumbnail}
                    
              />
            );
          }

                
        })} */


  
  return (
    <PageDefault paddingAll={0}>
      {/*dadosInterior.length === 0 && (<div>Loading...</div>)*/}

      

    <BannerVideo
       GameTitle={dadosInterior.titulo}
       GameDescription={dadosInterior.description}
       GameURL={dadosInterior.url}
       GameThumbnail={dadosInterior.thumbnail}
            
       />
    
     
          
      
    </PageDefault>
  );

  

}

export default Video;