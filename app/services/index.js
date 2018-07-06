const spotifyService = require('./search');
const authInterceptor = require('./auth.interceptor');

angular
.module('services', [])
.service('spotify', spotifyService)
.factory('authInterceptor', authInterceptor)
.config(($httpProvider) => {
  'ngInject';
  $httpProvider.interceptors.push('authInterceptor');
});