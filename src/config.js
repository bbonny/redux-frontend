require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  apofficeHost: process.env.APOFFICEHOST || 'apoffice-integration.azurewebsites.net/api',
  app: {
    title: 'BRICKS',
    description: 'A pptx presentation in the blink of an eye !',
    head: {
      titleTemplate: 'Bricks: %s',
      meta: [
        {name: 'description', content: 'Bricks'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Bricks'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Bricks'},
        {property: 'og:description', content: 'Bricks'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
