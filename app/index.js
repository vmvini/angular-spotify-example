require('./vendor.js');
require('./local.modules.js');
const configRoute = require('./routes/index.js');
const startRoute = require('./routes/start.route.js');

angular
.module('spotifyApp', [
  //external modules below
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngSanitize',
  'ngMaterial',
  'angular-jwt',
  //local modules below
  'start-page',
  'components', 
  'services'
])
.config(configRoute)
.config(startRoute);