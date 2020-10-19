import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';

import Arcade from '../../assets/img/arcade.png';
import Board from '../../assets/img/board.png';
import Meninas from '../../assets/img/meninas.png';
import Puzzle from '../../assets/img/puzzle.png';
import Soccer from '../../assets/img/soccer.png';
import Busca from '../../assets/img/busca.png';

import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink'; 

function MenuSearch() {
  
  
  
 


   return (
    
    <>
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <text className="texttitulo">Jogos Online Gratuitos</text>  
      
     
      

     
    </nav>

    <nav className="MenuCategoria">
     
    <Link className = "Link" to="/tela/categoria/1">
        
        <img className="LogoMenu" src={Puzzle} alt="Puzzles" />
        <text className="text">Puzzles</text>
    </Link>
      
    <Link className = "Link" to="/tela/categoria/2">
        
        <img className="LogoMenu" src={Meninas} alt="Girls" />
        <text className="text">Girls</text>
    </Link>

    <Link className = "Link" to="/tela/categoria/3">
        
        <img className="LogoMenu" src={Arcade} alt="Arcade" />
        <text className="text">Arcade</text>
    </Link>

    <Link className = "Link" to="/tela/categoria/4">
        
        <img className="LogoMenu" src={Soccer} alt="Sports" />
        <text className="text">Sports</text>
    </Link>

    <Link className = "Link" to="/tela/categoria/5">
        
        <img className="LogoMenu" src={Board} alt="Board" />
        <text className="text">Board</text>
    </Link>

    </nav>
    
    
    </>
    
  );
}

export default MenuSearch;