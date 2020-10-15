import config from '../config';

const URL_GAMES = `${config.URL_BACKEND_TOP}/games`;

function create(objetoDoGame) {
  return fetch(`${URL_GAMES}?_embed=games`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoGame),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

function getGame(n) {
  return fetch(`${URL_GAMES}/${n}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        //console.log(resposta);
        return resposta;
        
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}


function getGames() {
  return fetch(`${URL_GAMES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        //console.log(resposta);
        return resposta;
        
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  create,
  getGame,
  getGames,
};