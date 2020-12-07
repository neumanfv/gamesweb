const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://json-gamesweb-heroku.herokuapp.com'; // https://json-filmesweb-heroku.herokuapp.com

  const URL_SERVER = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000'
  : 'https://gingoplay.com'; // https://json-filmesweb-heroku.herokuapp.com , https://gingoplay.com, https://gamesweb.vercel.app


export default {
  URL_BACKEND_TOP,
  URL_SERVER,
};