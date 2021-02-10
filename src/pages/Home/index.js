import React, { useEffect, useState } from 'react';
import dadosInternos from '../../data/dados_iniciais3.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import BannerAdd from '../../components/BannerAdd';

import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import InitialBox from '../../components/InitialBox';
import SecondaryBox from '../../components/SecondaryBox';
import Divs from '../../components/Divs';
import {Container} from './styles';
import SectionTitle from '../../components/SectionTitle';


function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [dadosInterior, setDadosInterior] = useState([]);
  const [dadosGames, setDadosGames] = useState([]);
  
  const [categoria1, setCategoria1] = useState([]);
  const [categoria2, setCategoria2] = useState([]);
  const [categoria3, setCategoria3] = useState([]);
  const [categoria4, setCategoria4] = useState([]);
  const [categoria5, setCategoria5] = useState([]);
  const [categoria6, setCategoria6] = useState([]);

  const gamesCategoria1 = [];
  const gamesCategoria2 = [];
  const gamesCategoria3 = [];
  const gamesCategoria4 = [];
  const gamesCategoria5 = [];
  const gamesCategoria6 = [];


  const games = [];

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
    setDadosGames(dadosInternos.categorias[0].games);

    setCategoria1(dadosInternos.categorias[0].games);
    setCategoria2(dadosInternos.categorias[1].games);
    setCategoria3(dadosInternos.categorias[2].games);
    setCategoria4(dadosInternos.categorias[3].games);
    setCategoria5(dadosInternos.categorias[4].games);
    setCategoria6(dadosInternos.categorias[5].games);

    

  }, []);
  
  function store(){
    var inputEmail= document.getElementById("search");
    localStorage.setItem("busca", inputEmail.value);
    console.log(localStorage.getItem("busca"));
    
   };

 
   console.log(dadosGames);

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

       {/*dadosInterior.map((categoria, indice) => {
       

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })*/}

      <Carousel category={dadosInternos.categorias[5]}/>
      { /*
       <>
        <Carousel category={dadosInternos.categorias[0]}/>

        <Carousel category={dadosInternos.categorias[1]}/>
        <Carousel category={dadosInternos.categorias[2]}/>

        <Carousel category={dadosInternos.categorias[3]}/>
        <Carousel category={dadosInternos.categorias[4]}/>

       
       </> 
        
      */}


    
      <SectionTitle/>  
      <InitialBox/>
      <BannerAdd/>
      
       <Container>
              { categoria1.map((game, index)=>{

                          
              if(game.id!=null){
                gamesCategoria1.push(game);
                //console.log(gamesCategoria1[0].url);
              }
                
              

              if (index===0 ){

                return(
                  
              
                    <Divs key={gamesCategoria1.id}
                  
                    titulo="Arcade"
                    cor="black"
                    
                    games={gamesCategoria1} 
                    category="1"
                    
                    
                    /> 
                    
                  
                
                
                )
                }    


              })}

                { categoria2.map((game, index)=>{

                                  
                if(game.id!=null){
                  gamesCategoria2.push(game);
                  //console.log(gamesCategoria5[0].url);
                }
                  


                if (index===0 ){

                  return(
                    
                  
                      <Divs key={gamesCategoria2.id}
                    
                      titulo="Board"
                      cor="black"
                      
                      games={gamesCategoria2} 
                      category="2"
                      
                      /> 
                      
                    
                
                  
                  )
                  }    


                })}

                  { categoria3.map((game, index)=>{

                                            
                  if(game.id!=null){
                    gamesCategoria3.push(game);
                    //console.log(gamesCategoria2[0].url);
                  }
                    


                  if (index===0 ){

                    return(
                      
                    
                        <Divs key={gamesCategoria3.id}
                      
                        titulo="Girls"
                        cor="black"
                        
                        games={gamesCategoria3} 
                        category="3"
                        
                        /> 
                        
                      
                  
                    
                    )
                    }    


                  })}


                  { categoria4.map((game, index)=>{

                                            
                  if(game.id!=null){
                    gamesCategoria4.push(game);
                    //console.log(gamesCategoria1[0].url);
                  }
                    


                  if (index===0 ){

                    return(
                      

                        <Divs key={gamesCategoria4.id}
                      
                        titulo="Puzzles"
                        cor="black"
                        
                        games={gamesCategoria4} 
                        category="4"
                        
                        /> 
                        
                      
                    
                    
                    )
                    }    


                  })}

                    { categoria5.map((game, index)=>{

                                      
                    if(game.id!=null){
                      gamesCategoria5.push(game);
                      //console.log(gamesCategoria4[0].url);
                    }
                      


                    if (index===0 ){

                      return(
                        
                      
                          <Divs key={gamesCategoria5.id}
                        
                          titulo="Sports"
                          cor="black"
                          
                          games={gamesCategoria5} 
                          category="5"
                          
                          /> 
                          
                        
                    
                      
                      )
                      }    


                    })}

                      { categoria6.map((game, index)=>{

                                                
                      if(game.id!=null){
                        gamesCategoria6.push(game);
                        //console.log(gamesCategoria6[0].url);
                      }
                        


                      if (index===0 ){

                        return(
                          
                        
                            <Divs key={gamesCategoria6.id}
                          
                            titulo="Hot Games"
                            cor="black"
                            
                            games={gamesCategoria6} 
                            category="6"
                            
                            /> 
                            
                          
                      
                        
                        )
                        }    


                      })}

              
      </Container>

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