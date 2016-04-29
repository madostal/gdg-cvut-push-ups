(function() {
  'use strict';

  angular.module('cz.angular.simpleDevstack', [
    'angularStats',
    'ui.router',

    'cz.angular.simpleDevstack.dashboard'
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
        .state('app.activity', {
          url: 'activity',
          templateUrl: 'app/activity/list/template.html'
        })
        .state('app.activity-form', {
          url: 'activity/form',
          templateUrl: 'app/activity/form/template.html'
        });
    })
    .controller('BaseController', function() {
      this.ngVersion = angular.version;
    });

})();
