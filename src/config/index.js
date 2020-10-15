const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://json-gamesweb-heroku.herokuapp.com'; // https://json-filmesweb-heroku.herokuapp.com

export default {
  URL_BACKEND_TOP,
};