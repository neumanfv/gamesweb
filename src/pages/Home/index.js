import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

import { Link } from 'react-router-dom';
import Button from '../../components/Button';


function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithGames()
      .then((categoriasComGames) => {
        console.log(categoriasComGames[0].games[0]);
        setDadosIniciais(categoriasComGames); 
      })
      .catch((err) => {
        console.log(err.message);
      });

    

  }, []);
  
  function store(){
    var inputEmail= document.getElementById("search");
    localStorage.setItem("busca", inputEmail.value);
    console.log(localStorage.getItem("busca"));
    
   };




  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      <div>
      <input name="search" type="text" id="search" required="" placeholder="Search" />
        
      <Button as={Link} onClick={store} to="/tela/SearchPage"  >Busca</Button>
      </div>
      
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                gameTitle={dadosIniciais[0].games[0].titulo}
                url={dadosIniciais[0].games[0].url}
                gameDescription={dadosIniciais[0].games[0].description}
                gameThumbnail={dadosIniciais[0].games[0].thumbnail}
              />
                
               
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      /> */}
    </PageDefault>
  );
}

export default Home;