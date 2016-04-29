(function() {
  'use strict';

  angular.module('cz.angular.simpleDevstack',
    [
      'angularStats',
      'ui.router',

      'cz.angular.simpleDevstack.dashboard',
      'cz.angular.simpleDevstack.activity'
    ])

    .constant('API_URL', 'http://private-2b637-pushups.apiary-mock.com')

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
        .state('app.devel-form', {
          url: 'activity/devel/form',
          templateUrl: 'app/_tmp/form-template.html'
        })
        .state('app.devel-table', {
          url: 'activity/devel/form',
          templateUrl: 'app/_tmp/table-template.html'
        });
    })
    .run(function($rootScope, $log) {
      $rootScope.$on('$stateNotFound',
        function(event, toState, fromState, toParams, fromParams, error) {
          $log.error(error, toState, fromState, toParams, fromParams);
        });

      $rootScope.$on('$stateChangeError',
        function(event, toState, fromState, toParams, fromParams, error) {
          $log.error(error, toState, fromState, toParams, fromParams);
        });
    });
})();
