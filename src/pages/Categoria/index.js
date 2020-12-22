import React, { useEffect, useState } from 'react';
import dadosInternos from '../../data/dados_iniciais3.json';
//import BannerVideo from '../Video/components/BannerVideo';
import PageDefault from '../../components/PageDefault';
import Stand from '../../components/Stand';
//import videosRepository from '../../repositories/videos';
import categoriasRepository from '../../repositories/categorias';
import BannerAdd from '../../components/BannerAdd';

function Categoria() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [dadosInterior, setDadosInterior] = useState([]);

  var url_atual = window.location.href;
  //console.log(typeof(url_atual)); 
  var numero = url_atual.split('/');
  var id = numero[5];
 
 /* useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithGames()
      .then((categoriasComGames) => {
        //console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComGames);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); */

  useEffect(() => {
    
    
    setDadosInterior(dadosInternos.categorias);
    

  }, []);

  
  // dadosIniciais, dadosInterior
  
  return (
    <PageDefault paddingAll={0}>
      {dadosInterior.length === 0 && (<div>Loading...</div>)}  

      {dadosInterior.map((categoria) => {
         if(categoria.id == id){
          return (

            <Stand
            key={id}
            category={categoria}
          />
          );
        }
        

       
      })}

    <BannerAdd/>
    </PageDefault>
  );



  

}

export default Categoria;