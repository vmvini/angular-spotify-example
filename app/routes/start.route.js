const template = require('!ngtemplate-loader?relativeTo=/app/!html-loader!./../pages/start/template.html');

module.exports = ($stateProvider) => {
  $stateProvider
  .state({ 
    name: 'start', 
    url: '/', 
    templateUrl: template,
    controller: 'StartPageController as vm'
  });
};

