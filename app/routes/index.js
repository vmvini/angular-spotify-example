module.exports = ($locationProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise(($injector) => {
    const state = $injector.get('$state');
    state.go('start');
  });
};