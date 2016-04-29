(function() {
  'use strict';

  angular.module('cz.angular.simpleDevstack', [
      'angularStats',
      'ui.router',

      'cz.angular.simpleDevstack.dashboard',
      'cz.angular.simpleDevstack.activity'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/login');

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/login.html'
        })
        .state('app', {
          url: '/',
          templateUrl: 'app/app.html',
          abstract: true
        })
        .state('app.dashboard', {
          url: 'dashboard',
          controller: 'DashboardController',
          controllerAs: 'dashboard',
          templateUrl: 'app/dashboard/template.html'
        })
        .state('app.devel-form', {
          url: 'activity/devel/form',
          templateUrl: 'app/_tmp/form-template.html'
        })
        .state('app.devel-table', {
          url: 'activity/devel/form',
          templateUrl: 'app/_tmp/table-template.html'
        });
    })
    .controller('BaseController', function() {
      this.ngVersion = angular.version;
    });

})();
