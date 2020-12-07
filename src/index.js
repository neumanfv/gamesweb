import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Categoria from './pages/Categoria';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import SearchPage from './pages/SearchPage';

import AdsTxt from './pages/AdsTxt';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Desafio master blaster na descrição
// Colocar um jogo nessa página: https://www.youtube.com/watch?v=jOAU81jdi-c :)
const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
  <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/tela/video" component={Video} />
      <Route path="/tela/categoria" component={Categoria} />
      <Route path="/tela/SearchPage" component={SearchPage} />

      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      
      <Route path="/ads.txt" component={AdsTxt} />

      <Route component={Pagina404} />
  </Switch> 
  </BrowserRouter>,
  document.getElementById('root')
);


