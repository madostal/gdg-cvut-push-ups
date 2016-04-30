(function() {
  'use strict';

  angular.module('cz.angular.pushups',
    [
      'ui.router',
      'ngToast',
      'ngProgress',
      'angularStats',

      'cz.angular.common.auth',

      'cz.angular.pushups.dashboard',
      'cz.angular.pushups.activity',
      'cz.angular.pushups.login'
    ])

  // .constant('API_URL', 'http://private-2b637-pushups.apiary-mock.com')
    .constant('API_URL', 'http://gdg-cvut-pushups-java.herokuapp.com')

    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/login');

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/login/login.template.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        })
        .state('app', {
          url: '/',
          templateUrl: 'app/app.html',
          abstract: true,
          data: {
            authLogged: true
          }
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

    .run(function($rootScope, $state, $log, ngProgressFactory, ngToast) {
      var ngProgress = ngProgressFactory.createInstance();
      ngProgress.setColor('SkyBlue');

      $rootScope.$on('$stateChangeStart', function() {
        ngProgress.start();
      });

      $rootScope.$on('$stateChangeSuccess', function() {
        ngProgress.complete();
      });

      var errorHandler = function(event, toState, fromState, toParams, fromParams, error) {
        ngProgress.reset();
        $log.error(error, toState, fromState, toParams, fromParams);
      };

      $rootScope.$on('$stateNotFound', errorHandler);
      $rootScope.$on('$stateChangeError', errorHandler);

      $rootScope.$on('auth:forbidden', function(event, response) {
        debugger;
        ngProgress.reset();
        $log.error('Forbidden API request', response.config.url);
        ngToast.danger('Forbidden API request: '+ response.config.url);
        // TODO redirect?

      });

      $rootScope.$on('auth:loginCanceled', function() {
        ngProgress.reset();
        $log.error('event loginCanceled', arguments);
        ngToast.danger('You must be logged!');

        $state.go('login');
      });

    })

    .config(function(ngToastProvider) {
      ngToastProvider.configure({
        verticalPosition: 'bottom',
        horizontalPosition: 'left',
        dismissButton: true
      });
    });

})();
