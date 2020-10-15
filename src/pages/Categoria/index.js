import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
//import BannerVideo from '../Video/components/BannerVideo';
import PageDefault from '../../components/PageDefault';
import Stand from '../../components/Stand';
//import videosRepository from '../../repositories/videos';
import categoriasRepository from '../../repositories/categorias';

function Categoria() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  var url_atual = window.location.href;
  //console.log(typeof(url_atual)); 
  var numero = url_atual.split('/');
  var id = numero[5];
 
  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithGames()
      .then((categoriasComGames) => {
        //console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComGames);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  

  
  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria) => {
         if(categoria.id == id){
          return (

            <Stand
            key={id}
            category={categoria}
          />
          );
        }
        

       
      })}

     
    </PageDefault>
  );



  

}

export default Categoria;