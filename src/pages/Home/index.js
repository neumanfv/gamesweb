import React, { useEffect, useState } from 'react';
import dadosInternos from '../../data/dados_iniciais3.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import BannerAdd from '../../components/BannerAdd';

import { Link } from 'react-router-dom';
import Button from '../../components/Button';


function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [dadosInterior, setDadosInterior] = useState([]);
 

  /*useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithGames()
      .then((categoriasComGames) => {
        console.log(categoriasComGames[0].games[0]);
        console.log(dadosInternos.categorias[0].games[0]);
        console.log(categoriasComGames);
        console.log(dadosInternos.categorias);
        setDadosIniciais(categoriasComGames); 
        setDadosInterior(dadosInternos.categorias);
        
      })
      .catch((err) => {
        console.log(err.message);
      });

    

  }, []);*/

  useEffect(() => {
    
    
    setDadosInterior(dadosInternos.categorias);
    

  }, []);
  
  function store(){
    var inputEmail= document.getElementById("search");
    localStorage.setItem("busca", inputEmail.value);
    console.log(localStorage.getItem("busca"));
    
   };

  


  return (
    <PageDefault paddingAll={0}>
      {/*dadosIniciais.length === 0 && (<div>Loading...</div>)*/}
      {dadosInternos.length === 0 && (<div>Loading...</div>)}
      
      
      {/*dadosIniciais.map((categoria, indice) => {
       

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })*/}

       {dadosInterior.map((categoria, indice) => {
       

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}


      { /*
       <>
        <Carousel category={dadosInternos.categorias[0]}/>

        <Carousel category={dadosInternos.categorias[1]}/>
        <Carousel category={dadosInternos.categorias[2]}/>

        <Carousel category={dadosInternos.categorias[3]}/>
        <Carousel category={dadosInternos.categorias[4]}/>

       
       </> 
        
      */}


    
        
        
      
      <BannerAdd/>

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